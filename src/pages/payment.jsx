import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { Radio } from '@/components/Radio'
import { Skeleton } from '@/components/Skeleton'
import { PATH } from '@/config'
import { useCart } from '@/hooks/useCart'
import { useQuery } from '@/hooks/useQuery'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { addressService } from '@/services/address'
import { cartService } from '@/services/cart'
import { cartActions } from '@/stories/cart'
import { cn, currency, handleError, storePreCheckoutData } from '@/utils'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const Paymentpage = () => {
    useScrollToTop()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { preCheckoutResponse, preCheckoutData } = useCart()
    const { items } = preCheckoutResponse
    useEffect(() => {
        if (!preCheckoutResponse.items || !preCheckoutData.address_id) {
            navigate(PATH.Cart)
        }
    }, [])
    const { loading: loadingAddress, data, } = useQuery({
        queryFn: () => addressService.getAddress(),
    })
    const { loading: loadingCheckout, reFetch: checkoutService } = useQuery({
        queryFn: () => cartService.checkout(preCheckoutData),
        enable: false
    })
    const address = data?.data?.find(e => e.id == preCheckoutData.address_id)
    const addressId = preCheckoutData.address
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    useEffect(() => {
        fetch('https://esgoo.net/api-tinhthanh/1/0.htm')
            .then((res) => res.json())
            .then((data_province) => {
                if (data_province.error === 0) {
                    setProvinces(data_province.data);
                }
            });
        fetch(`https://esgoo.net/api-tinhthanh/2/${address?.province}.htm`)
            .then((res) => res.json())
            .then((data_district) => {
                if (data_district.error === 0) {
                    setDistricts(data_district.data);
                }
            });


        fetch(`https://esgoo.net/api-tinhthanh/3/${address?.district}.htm`)
            .then((res) => res.json())
            .then((data_ward) => {
                if (data_ward.error === 0) {
                    setWards(data_ward.data);
                }
            });

    }, [data])
    const onOrder = async () => {
        try {
            const res = await checkoutService()
            navigate(PATH.OrderComplete, { state: res })
            dispatch(cartActions.clearCart())
        } catch (err) {
            handleError(err)
        }
    }
    return (
        <main className="paymentpage">
            <div className="payment__container">
                <div className="payment__progress">
                    <div className="payment__progress-item active">
                        <div className="progress__number">
                            1
                        </div>
                        <p className="progress__text">thông tin nhận hàng</p>
                    </div>
                    <div className="payment__progress-item active">
                        <div className="progress__number">
                            2
                        </div>
                        <p className="progress__text">thanh toán</p>
                    </div>
                </div>
                <div className="payment row">
                    <div className="payment__left col-xl-8">
                        <div className="payment__receive">
                            <p className="receive__title">thông tin nhận hàng</p>
                            {/* <p class="receive__title-sub">Hình thức nhận hàng</p> */}
                            {
                                loadingAddress ? <div className="receive__address-item">
                                    <div className="receive__address-top" id="account-edit">
                                        <img src="./images/edit_note_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="edit" />
                                        <p className="edit-text">chỉnh sữa</p>
                                    </div>
                                    <div className="receive__address-text">
                                        <p className="receive__address-main"><Skeleton width={300} height={22} /></p>
                                        <p className="receive__address-sub"><Skeleton width={600} height={22} /></p>
                                    </div>
                                </div> : <div className="receive__address-item">
                                    <div className="receive__address-top" id="account-edit">
                                        {/* <Link to={generatePath(PATH.Profile.AddressEdit, { id: addressId })}> */}
                                        <div className="flex gap-2" onClick={() => navigate(PATH.Profile.AddressEdit.replace(':id', addressId), {
                                            state: { redirectBackTo: PATH.Payment }
                                        })}>
                                            <img src="./images/edit_note_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="edit" />
                                            <p className="edit-text">chỉnh sữa</p>
                                        </div>
                                        {/* </Link> */}
                                    </div>
                                    <div className="receive__address-text">
                                        <p className="receive__address-main">{address?.name} - {address?.phone}
                                        </p>
                                        <p className="receive__address-sub">{address?.address},   {wards.find(e => e.id === address?.ward)?.full_name || "Không xác định"},
                                            {districts.find(e => e.id === address?.district)?.full_name || "Không xác định"},
                                            {provinces.find(e => e.id === address?.province)?.full_name || "Không xác định"}</p>
                                    </div>
                                </div>
                            }

                        </div>
                        <div className="payment__methods">
                            <p className="methods__title">phương thức thanh toán</p>
                            <Radio.Group
                                value={preCheckoutData.method}
                                onChange={value => {
                                    dispatch(cartActions.setPreCheckoutMethod(value));
                                    storePreCheckoutData.set({
                                        ...preCheckoutData,
                                        method: value
                                    })
                                }}
                            >
                                <Radio.Toggle value="COD" >

                                    <div className={cn("method__item", { "active": preCheckoutData.method === "COD" })}>
                                        <div className="method__item-dot">
                                            <div className="dot" />
                                        </div>
                                        <div className="method__item-text">
                                            Thanh toán khi nhận hàng (COD)
                                        </div>
                                    </div>
                                </Radio.Toggle>
                                <p className="methods__title-sub">Thanh toán bằng thẻ nội địa hoặc ngân hàng</p>
                                <Radio.Toggle value="QR">
                                    <div className={cn("method__item", { "active": preCheckoutData.method === "QR" })}>
                                        <div className="method__item-dot">
                                            <div className="dot" />
                                        </div>
                                        <div className="method__item-text">
                                            Thanh toán quét mã QR <img src="./images/qr_code_scanner_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt />
                                        </div>
                                    </div>
                                </Radio.Toggle>
                                <Radio.Toggle value="VISA">
                                    <div className={cn("method__item", { "active": preCheckoutData.method === "VISA" })}>
                                        <div className="method__item-dot">
                                            <div className="dot" />
                                        </div>
                                        <div className="method__item-text">
                                            Thanh toán thẻ quốc tế <img src="./images/list-pay.webp" alt />
                                        </div>
                                    </div>
                                </Radio.Toggle>
                            </Radio.Group>
                        </div>
                        <Button onClick={onOrder} loading={loadingCheckout}>đặt hàng</Button>
                        <Link to={PATH.Checkout}>
                            <Button>Quay lại</Button>
                        </Link>
                    </div>
                    <div className="payment__right col-xl-4">
                        <div className="cart__calculate">
                            <p className="cart__calculate-title">tạm tính</p>
                            <div className="cart__calculate-provisional">
                                <p className="provisional">Tạm tính ({preCheckoutResponse?.quantityTotal || 0} sản phẩm)</p>
                                <p className="money">{currency(preCheckoutResponse?.total)}</p>
                            </div>
                            <div className="cart__calculate-discount">
                                <p className="discount">Tổng giảm giá</p>
                                <p className="money">{currency(0)}</p>
                            </div>
                            <div className="cart__calculate-discount">
                                <p className="discount">Vận chuyển</p>
                                <p className="money">{currency(0)}</p>
                            </div>
                            <div className="cart__calculate-total">
                                <p className="total">Tổng thanh toán</p>
                                <p className="money">{currency(preCheckoutResponse?.total)}</p>
                            </div>
                            <p className="des">* Đã bao gồm VAT</p>
                            <button className="full">thanh toán ngay</button>
                        </div>
                        <div className="shipping__product-list">
                            <p className="shipping__product-title">danh sách sản phẩm</p>
                            <div className="cart__items">
                                {
                                    items?.map(e => <CartItem key={e.id} {...e} hideAction />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >

    )
}

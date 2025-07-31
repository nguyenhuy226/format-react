import { ListAddressCardCheckout } from '@/components/AddressCardCheckout'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { PATH } from '@/config'
import { useCart } from '@/hooks/useCart'
import { useQuery } from '@/hooks/useQuery'
import { addressService } from '@/services/address'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Radio } from '@/components/Radio'
import { currency, storePreCheckoutData } from '@/utils'
import { cartActions } from '@/stories/cart'
import { useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'



export const CheckoutPage = () => {
    const { preCheckoutResponse, preCheckoutData } = useCart()
    const [note, setNote] = useState(preCheckoutData.note)
    const { items } = preCheckoutResponse
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (!preCheckoutResponse.items) {
            navigate(PATH.Cart)
        }
    }, [])

    const { loading, data, } = useQuery({
        queryFn: () => addressService.getAddress(),
        onSuccess: (res) => {
            res.data.sort(e => e.default ? -1 : 0)
        }
    })
    const [address, setAddress] = useState()
    useEffect(() => {
        if (preCheckoutData.address_id) {
            setAddress(preCheckoutData.address_id);
        } else {
            const defaultAddressId = data?.data?.find(e => e.default == 1)?.id;
            setAddress(defaultAddressId);
        }
    }, [data?.data]);

    useEffect(() => {
        if (address) {
            console.log("Dispatching address: ", address);
            dispatch(cartActions.setPreCheckoutAddress(address));
            storePreCheckoutData.set({
                ...preCheckoutData,
                address_id: address
            })

        }
    }, [address]);

    const onPayment = () => {
        if (note?.trim()) {
            dispatch(cartActions.setPreCheckoutNote(note))
        }
        navigate(PATH.Payment)
    }
    return (
        <main className="shippingpage">
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <div className="shipping__container">
                <div className="shipping__progress">
                    <div className="shipping__progress-item active">
                        <div className="progress__number">
                            1
                        </div>
                        <p className="progress__text">thông tin nhận hàng</p>
                    </div>
                    <div className="shipping__progress-item">
                        <div className="progress__number">
                            2
                        </div>
                        <p className="progress__text">thanh toán</p>
                    </div>
                </div>
                <div className="shipping row">
                    <div className="shipping__left col-xl-8">
                        <div className="shipping__receive">
                            <p className="receive__title">thông tin nhận hàng
                                <Button onClick={() => navigate(PATH.Profile.AddressAdd, {
                                    state: { redirectBackTo: PATH.Checkout }
                                })}>Thêm địa chỉ khác</Button>
                                <Link to={PATH.Cart}>
                                    <Button>Giỏ hàng</Button>
                                </Link>
                            </p>
                            <p className="receive__title-sub">Hình thức nhận hàng</p>
                            <div className="receive__method">
                                <div className="receive__home">
                                    <div className="receive__home-dot">
                                        <div className="dot" />
                                    </div>
                                    <div className="receive__home-text">
                                        <p className="receive-main">nhận tại nhà</p>
                                        <p className="receive-sub">Thời gian giao hàng dự kiến từ 3-5 ngày</p>
                                    </div>
                                </div>
                                <div className="receive__store">
                                    <div className="receive__store-dot" />
                                    <div className="receive__store-text">
                                        <p className="receive-main">nhận tại cửa hàng</p>
                                        <p className="receive-sub">Miễn phí nhận hàng tại hệ thống cửa hàng FORMAT</p>
                                    </div>
                                </div>
                            </div>
                            <p className="receive__title-sub">Địa chỉ nhận hàng</p>
                            <div className="receive__address">
                                {

                                    <Radio.Group
                                        value={address}
                                        onChange={value => {
                                            setAddress(value);
                                        }}
                                    >
                                        <ListAddressCardCheckout
                                            radio
                                            loading={loading}
                                            data={data?.data}
                                            empty={
                                                <div className="col-12 flex flex-col justify-center items-center">
                                                    <p className="text-xl border p-5 text-center w-full mb-5">
                                                        Bạn chưa đăng ký địa chỉ 😞
                                                    </p>
                                                    <Button onClick={() => navigate(PATH.Profile.AddressAdd, {
                                                        state: { redirectBackTo: PATH.Checkout }
                                                    })} className="w-64">Thêm địa chỉ</Button>
                                                </div>
                                            }
                                        />
                                    </Radio.Group>

                                }
                            </div>
                            <p className="note-text">Ghi chú</p>
                            <input className="note-input" type="text" value={note} placeholder="Nhập ghi chú của Quý khách" onChange={(ev) => {
                                setNote(ev.target.value)
                                storePreCheckoutData.set({
                                    ...preCheckoutData,
                                    note: ev.target.value
                                })
                            }} />

                        </div>
                        <div className="shipping__transport">
                            <p className="transport__title">thông tin nhận hàng</p>
                            <p className="transport__title-sub">Hình thức nhận hàng</p>
                            <div className="transport__method">
                                <div className="transport__item">
                                    <div className="transport__item-dot">
                                        <div className="dot" />
                                    </div>
                                    <div className="transport__item-text">
                                        <p className="transport-main">nhận tại nhà</p>
                                        <p className="transport-sub">Thời gian giao hàng dự kiến từ 3-5 ngày</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button onClick={onPayment} className="btn-continue">tiếp tục</Button>

                    </div>
                    <div className="shipping__right col-xl-4">
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
        </main>

    )
}

import { Button } from '@/components/Button'
import { CartItemPage } from '@/components/CartItemPage'
import { Contact } from '@/components/Contact'
import { Service } from '@/components/Service'
import { PATH } from '@/config'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { currency } from '@/utils'
import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const CartPage = () => {
    const { cart, preCheckoutResponse, preCheckoutLoading, preCheckoutData } = useCart()
    const location = useLocation()
    const cartItemSelected = location?.state?.cartItemSelected
    const { user } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate(PATH.Login)
        }
    }, [])
    return (
        <main className="mainwrapper cartpage">
            <Helmet>
                <title>Giỏ hàng</title>
            </Helmet>
            <section className="cart">
                {
                    cart?.cart?.length > 0 ? <>
                        <div className="cart__title">
                            <img src="images/shopping.png" alt="cart" />
                            <p className="cart__title-text">giỏ hàng của quý khách</p>
                            <p className="cart__title-quantity">({cart?.quantityTotal} sản phẩm)</p>
                        </div>
                        <div className="cart__main">
                            <div className="cart__list">
                                <div className="cart__head">
                                    <div className="cart__head-check">
                                        <input type="checkbox" name="productall" id="productall" />
                                    </div>
                                    <p className="cart__head-product">sản phẩm</p>
                                    <p className="cart__head-price">giá</p>
                                    <p className="cart__head-quantity">số lượng</p>
                                    <p className="cart__head-total">tạm tính</p>
                                </div>
                                <div className="cart__wrapt">
                                    {
                                        cart?.cart?.map(e => <CartItemPage key={e.id} {...e} cartItemSelected={cartItemSelected} />)
                                    }
                                </div>
                            </div>
                            <div className="cart__calculate">
                                <Spin spinning={preCheckoutLoading}>
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
                                    <Link to={PATH.Checkout}><Button className="full" disable={!preCheckoutData?.data?.length}>thanh toán ngay</Button></Link>
                                </Spin>
                            </div>
                        </div>
                    </> :
                        <div className="cart__empty">
                            <img src="./images/cart-empty.png" alt="empty-cart" />
                            <p className="cart__empty-text">giỏ hàng hiện đang trống</p>
                            <Link to={PATH.Product}>
                                <Button>tiếp tục mua sắm</Button>
                            </Link>
                        </div>
                }
            </section>
            <Service />
            <Contact />
        </main>

    )
}

import { useCart } from '@/hooks/useCart'
import { Drawer } from 'antd'
import React from 'react'
import { CartItem } from '../CartItem'
import { currency } from '@/utils'
import { Link } from 'react-router-dom'
import { PATH } from '@/config'

export const CartDrawer = ({ open, onClose }) => {
    const { cart } = useCart()
    return (
        <Drawer open={open} onClose={onClose} headerStyle={{ display: 'none' }} bodyStyle={{ padding: 0 }} width={494}>
            {
                cart?.cart?.length ? <div className="popup__cart-wrap">
                    <div className="cart__top">
                        <img className="cart__top-icon" src="/images/shopping.png" alt="cart" />
                        <p className="cart__top-title">giỏ hàng</p>
                        <p className="cart__top-quantity">({cart?.quantityTotal} sản phẩm)</p>
                        <p className="cart__top-close" onClick={onClose}>
                            <img src="/images/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="close" />
                        </p>
                    </div>
                    <div className="cart__items">
                        {
                            cart?.cart?.map(e => <CartItem key={e.id} {...e} />)
                        }
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-provisional">
                            <p className="provisional">tạm tính ({cart?.quantityTotal} sản phẩm)</p>
                            <p className="money">{currency(cart?.subtotal)}</p>
                        </div>
                        <div className="cart__bottom-discount">
                            <p className="discount">Tổng giảm giá</p>
                            <p className="money">{currency(0)}</p>
                        </div>
                        <div className="cart__bottom-total">
                            <p className="total">Tổng thanh toán</p>
                            <p className="money">{currency(cart?.subtotal)}</p>
                        </div>
                        <p className="des">* Ưu đãi có thể được áp dụng trong giỏ hàng</p>
                        <Link to={PATH.Cart} onClick={onClose}>
                            <button className="full">xem giỏ hàng</button>
                        </Link>
                    </div>
                </div> : <div className="cart__empty">
                    <img src="/images/upcoming.svg" alt="empty-cart" />
                    <p className="cart__empty-title">Giỏ hàng của bạn hiện đang trống</p>
                    <p className="cart__empty-des">Hãy thêm sản phẩm vào giỏ hàng để bắt đầu mua sắm</p>
                    <Link to={PATH.Product}>
                        <button className="full" onClick={onClose}>Tiếp tục mua sắm</button>
                    </Link>
                </div>
            }

        </Drawer>
    )
}

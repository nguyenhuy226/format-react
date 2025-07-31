import React, { useEffect, useRef } from 'react'
import { currency } from '@/utils'
import { URL_IMAGE_PRODUCT } from '@/config'
import { useDispatch } from 'react-redux'
import { removeCartItemAction, updateCartItemAction } from '@/stories/cart'
import { Popconfirm, Spin } from 'antd'
import { useCart } from '@/hooks/useCart'

export const CartItem = ({ product, quantity, id, hideAction }) => {
    const dispatch = useDispatch()
    const inputRef = useRef()
    const { loading } = useCart()
    const _loading = loading[id] || false

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = quantity
        }
    }, [quantity])

    const onIncrement = () => {
        inputRef.current.value++
        if (inputRef.current.value >= product.quantity) {
            inputRef.current.value = product.quantity
        }
        dispatch(updateCartItemAction({
            id,
            quantity: inputRef.current.value
        }))
    }

    const onDecrement = () => {
        inputRef.current.value--
        dispatch(updateCartItemAction({
            id,
            quantity: inputRef.current.value
        }))
    }

    const onChangeQuantity = (val) => {
        const quantity = Number(val);
        if (isNaN(quantity) || quantity < 1) {
            inputRef.current.value = 1;
        } else {
            inputRef.current.value = quantity;
        }
        dispatch(updateCartItemAction({
            id,
            quantity: inputRef.current.value
        }));
    }

    const onRemoveCartItem = () => {
        dispatch(removeCartItemAction(id))
    }
    return (
        <Spin spinning={_loading} tip="Đang xử lý...">
            <div className="cart__item">
                <div className="cart__item-img">
                    <img src={`${URL_IMAGE_PRODUCT}${product.image}`} alt="cart" />
                </div>
                <div className="cart__item-text">
                    <p className="cart__item-name">{product.name}</p>
                    <p className="cart__item-sku">SKU: {product.sku}</p>
                    <p className="cart__item-info">
                        <span className="info-item">màu sắc : xanh lá</span>
                        <span className="info-item">kích cỡ: size xl</span>
                    </p>
                    {
                        product?.origin_price && (
                            <span className="cart__item-origin">{currency(product.origin_price)}</span>
                        )
                    }
                    {
                        hideAction && <>
                            <span className="quantity">SL: {quantity}</span>
                            <p className="total-number">
                                {currency(product.price)}
                            </p>
                        </>
                    }
                    {
                        !hideAction && <>
                            <span className="cart__item-price">{currency(product.price)}</span>
                            <div className="cart__item-quantity">
                                <div className="product__choose-quantity">
                                    <span className="quantity">SL:</span>
                                    {
                                        !hideAction && <div className="form-group">
                                            <div className="quantity__main">
                                                <Popconfirm
                                                    disabled={quantity > 1}
                                                    title="Thông báo"
                                                    description="Bạn có chắc chăn muốn xóa sản phẩm"
                                                    placement='bottomRight'
                                                    okButtonProps={{ style: { background: '#313131', width: 60, height: 30 } }}
                                                    showCancel={false}
                                                    onConfirm={onRemoveCartItem}
                                                >
                                                    <div onClick={quantity > 1 ? onDecrement : undefined} className="quantity-prev">-</div>
                                                </Popconfirm>

                                                <input ref={inputRef} className="quantity" defaultValue={quantity} onBlur={(ev) => onChangeQuantity(ev.target.value)} />
                                                <div onClick={onIncrement} className="quantity-next">+</div>
                                            </div>
                                        </div>
                                    }

                                </div>
                                {
                                    !hideAction && <Popconfirm
                                        title="Thông báo"
                                        description="Bạn có chắc chăn muốn xóa sản phẩm"
                                        placement='bottomRight'
                                        okButtonProps={{ style: { background: '#313131', width: 60, height: 30 } }}
                                        showCancel={false}
                                        onConfirm={onRemoveCartItem}
                                    >
                                        <p className="close">
                                            <img className="cart-icon" src="/images/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="cart" />
                                            xóa
                                        </p>
                                    </Popconfirm>
                                }
                            </div>
                        </>
                    }
                    {
                        !hideAction && <div className="cart__item-total">
                            <span className="total-text">Tổng cộng:</span>
                            <p className="total-number">
                                {currency(product.price * quantity)}
                            </p>
                        </div>
                    }

                </div>
                {
                    hideAction && <div className="cart__item-total">
                        <p className="total-number">
                            {currency(product.price * quantity)}
                        </p>
                    </div>
                }

            </div>
        </Spin>
    )
}

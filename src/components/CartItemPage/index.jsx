import { URL_IMAGE_PRODUCT } from '@/config'
import { useCart } from '@/hooks/useCart'
import { removeCartItemAction, toogleCheckedCartItemAction, updateCartItemAction } from '@/stories/cart'
import { currency } from '@/utils'
import { Popconfirm, Spin } from 'antd'
import { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox } from '../Checkbox'

export const CartItemPage = ({ product, id, quantity,cartItemSelected }) => {
    const dispatch = useDispatch()
    const inputRef = useRef(quantity)
    const { loading , preCheckoutData: {data}} = useCart()
    const _loading = loading[id] || false
    const selected = !!data.find(e => e === id)
    useEffect(() => {
        if(cartItemSelected == product.id) {
            dispatch(toogleCheckedCartItemAction({
                productId : id,
                checked: true
            }))
        }
    },[cartItemSelected])
    useEffect(() => {
        inputRef.current.value = quantity
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

    const onSelectCartItem = (checked) => {
        dispatch(toogleCheckedCartItemAction({
            productId : id,
            checked
        }))
    }
    return (
        <Spin spinning={_loading} tip="Đang xử lý...">
        <div className="cart__item">
            <Checkbox checked={selected} onChange={onSelectCartItem}/>
            <div className="item__product">
                <img src={`${URL_IMAGE_PRODUCT}${product.image}`} alt="cart" />
                <div className="item__text">
                    <div className="item__info">
                        <p className="item__text-name">{product.name}</p>
                        <p className="item__text-sku">SKU: 2100007870366</p>
                        <span className="item__item-size">kích cỡ: size xl | </span><span className="item__item-color">màu sắc: be/họa tiết xanh lá</span>
                    </div>
                    <div className="item__price">{currency(product.price)}</div>
                    <div className="item__quantity">
                        <div className="quantity-wrapt">
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
                    <div className="item__total">
                        <p className="item__total-number">{currency(product.price * quantity)}</p>
                        <Popconfirm
                            title="Thông báo"
                            description="Bạn có chắc chăn muốn xóa sản phẩm"
                            placement='bottomRight'
                            okButtonProps={{ style: { background: '#313131', width: 60, height: 30 ,cursor:"pointer" } }}
                            showCancel={false}
                            onConfirm={onRemoveCartItem}
                        >
                            <div className="bnt__product-close cursor-pointer">
                                <img className="cart-icon" src="images/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="cart" />
                                xóa
                            </div>
                        </Popconfirm>
                    </div>
                </div>
            </div>
        </div>
        </Spin>
    )
}

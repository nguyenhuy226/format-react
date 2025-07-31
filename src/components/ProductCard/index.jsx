import { PATH, URL_IMAGE_PRODUCT } from '@/config'
import { useAction } from '@/hooks/useAction'
import { useCategory } from '@/hooks/useCategories'
import { productService } from '@/services/product'
import { cn, currency } from '@/utils'
import { withListLoading } from '@/utils/withListLoading'
import { generatePath, Link } from 'react-router-dom'
import { Skeleton } from '../Skeleton'

export const ProductCard = ({productToCartList ,onAddToArrayCart ,onRemoveWishlistSuccess, className, wishlist, id, image, price, name, product_code, category_id }) => {
    const category = useCategory(category_id)

    const onRemoveWishlist = useAction({
        service:() => productService?.removeWishlist(id),
        loadingMessage: `Đang xóa sản phẩm "${name}" khỏi yêu thích`,
        successMessage: `Xóa sản phẩm "${name}" khỏi yêu thích thành công`,
        onSuccess: onRemoveWishlistSuccess,
    })
    const addToCart = (ev) =>{
        if(ev.target.checked) {
            if(productToCartList.includes(id))  return
            onAddToArrayCart((state) => [...state,id])
        } else {
            onAddToArrayCart(state => {
                if(state.includes(id)) {
                    return state.filter(e => e !== id)
                }
            })
        }
    }

    return (
        <div className={className}>
            <div className={cn("product__item-img")}>
                <Link to={generatePath(PATH.ProductDetail, {id})}>
                    <img src={`${URL_IMAGE_PRODUCT}${image}`} alt="product" />
                </Link>
                {
                    wishlist && <div className="product__item-tools">
                        <button className="white close" onClick={onRemoveWishlist}>x</button>
                        <input type="checkbox"  checked={productToCartList.includes(id)}  name="select" onChange={(ev) => addToCart(ev)} />
                    </div>
                }
            </div>
            <div className="product__item-info">
                <span className="product__item-brand"><img src="/images/logo-category.webp" /></span>
                <span className="product__item-code">{product_code}</span>
            </div>
            <div className="product__item-detail">
                <p className="product__item-name">{name}</p>
                {
                    category && <p className="product__item-collection">{category.name}</p>
                }
                <p className="product__item-price">{currency(price)}</p>
            </div>
        </div>
    )
}

export const ProductCardLoading = ({className}) => {
    return (
        <div className={className}>
            <div className="product__item-img">
                    <Skeleton height={500} width={'100%'} />
            </div>
            <div className="product__item-info">
                <span className="product__item-brand"><Skeleton width={100} height={20} /></span>
                <span className="product__item-code"> <Skeleton width={150} height={20} /></span>
            </div>
            <div className="product__item-detail">
                <p className="product__item-name"> <Skeleton width={150} height={25} /></p>
                <p className="product__item-collection"><Skeleton width={'100%'} height={25} /></p>
                <p className="product__item-price"> <Skeleton width={200} height={25} /></p>
            </div>
        </div>
    )
}


export const ListProductCard = withListLoading(ProductCard, ProductCardLoading)

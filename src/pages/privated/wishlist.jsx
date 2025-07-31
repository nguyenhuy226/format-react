import { Button } from '@/components/Button'
import { Paginate } from '@/components/Paginate'
import { ListProductCard } from '@/components/ProductCard'
import { useQuery } from '@/hooks/useQuery'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { useSearch } from '@/hooks/useSearch'
import { productService } from '@/services/product'
import { addCartItemAction } from '@/stories/cart'
import { message } from 'antd'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { useOutletContext } from 'react-router-dom'

export const Wishlist = () => {
    useScrollToTop()
    const { setPopoverAccountMobile } = useOutletContext();
    const [productToCartList, setProductToCartList] = useState([])
    const dispatch = useDispatch()

    const [search] = useSearch({
        page: 1,
    });
    const { data, loading, reFetch, clearPreviousData } = useQuery({
        queryKey: `wishlist-${search.page}`,
        queryFn: ({ signal }) => productService.getWishlist(`?page=${search.page}`, signal),
        keepPrevousData: true,
        deleteAsyncFuncion: true,
    })
    const onAddCartItem = () => {
        if (!(productToCartList.length === 0)) {
            console.log(productToCartList.length)
            dispatch(addCartItemAction({
                product_id: productToCartList,
                showPopover: true
            }))
        } else {
            message.warning('Hãy chọn sản phẩm để thêm vào giỏ hàng')
        }
    }
    const onSelectAll = (ev) => {
        if (ev.target.checked) {
            setProductToCartList(data?.data?.map(item => item.id))
        } else {
            setProductToCartList([])
        }
    }
    return (<div className="account__panel">
        <Helmet>
            <title>Sản phẩm yêu thích</title>
        </Helmet>
        <p className="account__panel-title"><img className="btn-open-nav" onClick={() => setPopoverAccountMobile(true)} src="/images/chevron_right_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="btn-nav" />sản phẩm yêu thích</p>
        <div className="wishlist__top">
            <div className="wishlist__quantity">có {data?.data?.length} sản phẩm</div>
            <div className="wishlist__tools">
                <div className="wishlist__tools-all">
                    <input type="checkbox" name="all" id="all" onChange={(ev) => onSelectAll(ev)} />
                    <label htmlFor="all">chọn tất cả</label>
                </div>
                <Button onClick={onAddCartItem}>thêm vào giỏ</Button>
            </div>
        </div>
        <div className="wishlist__list row">
            <ListProductCard
                loadingCount={6}
                loading={loading}
                data={data?.data}
                onRemoveWishlistSuccess={() => {
                    clearPreviousData()
                    reFetch()
                }}
                productToCartList={productToCartList}
                onAddToArrayCart={setProductToCartList}
                wishlist
                className="product__item col-xl-4 col-6"
            />
        </div>
        <Paginate totalPage={data?.last_page} />
    </div>
    )
}

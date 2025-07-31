import { PRODUCT_API, WISHLIST_API } from '@/config/api';
import { http } from '@/utils';


export const productService = {
    getProduct(query = '', signal) {
        return http.get(`${PRODUCT_API}${query}`, { signal })
    },
    getProductDetail(query = '') {
        return http.get(`${PRODUCT_API}/${query}`)
    },
    getWishlist(query = '', signal) {
        return http.get(`${WISHLIST_API}${query}`, { signal })
    },
    addWishlist(productId) {
        return http.post(`${WISHLIST_API}`, productId)
    },
    removeWishlist(productId) {
        return http.delete(`${WISHLIST_API}`, {
            data: { product_id: productId }
        })
    },
    getRelateship(id) {
        return http.get(`${PRODUCT_API}/relateship/${id}`)
    }
}   
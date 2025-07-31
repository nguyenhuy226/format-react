import { CART_API } from "@/config/api"
import { http } from "@/utils"

export const cartService = {
    addItem(data) {
        return http.post(`${CART_API}`, data)
    },
    getCart() {
        return http.get(`${CART_API}`)
    },
    removeItem(productId) {
        return http.delete(`${CART_API}/${productId}`)
    },
    updateCart(data) {
        return http.put(`${CART_API}/${data.id}`,data)
    },
    preCheckout(data) {
        return http.post(`${CART_API}/pre-checkout`,data)
    },
    checkout(data) {
        return http.post(`${CART_API}/checkout`, data)
    }
}
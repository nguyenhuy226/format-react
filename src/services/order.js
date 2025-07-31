import { ORDER_API } from "@/config/api"
import { http } from "@/utils"

export  const orderService = {
    getOrder(query='') {
        return http.get(`${ORDER_API}${query}`)
    }
}
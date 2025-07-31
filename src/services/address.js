import { ADDRESS_API } from "@/config/api";
import { http } from "@/utils";

export const addressService = {
    getAddress() {
        return http.get(`${ADDRESS_API}`);
    },
    getAddressDetail(id) {
        return http.get(`${ADDRESS_API}/${id}`);
    },
    addAddress(data) {
        console.log(data)
        return http.post(`${ADDRESS_API}`,data);
    },
    updateAddress(data, id) {
        return http.put(`${ADDRESS_API}/${id}`, data)
    },
    deleteAddress(id) {
        return http.delete(`${ADDRESS_API}/${id}`)
    }
}
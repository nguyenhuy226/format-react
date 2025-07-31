import { AUTHEN_API, USER_API } from "@/config/api";
import { http } from "@/utils";

export const userService = {
    register(data) {
        return http.post(`${USER_API}/register`, data);
    },
    getUser() {
        return http.get(`${USER_API}/user`);
    },
    updateUser(data) {
        return http.put(`${USER_API}/user`, data)
    }
}
import { AUTHEN_API } from "@/config/api";
import { http } from "@/utils";

export const authService = {
    login(data) {
        return http.post(`${AUTHEN_API}/login`, data);
    },
    refreshToken(data) {
        return http.post(`${AUTHEN_API}/refresh-token`, data);
    },
    logout(data) {
        return http.post(`${AUTHEN_API}/logout`, data)
    }
}
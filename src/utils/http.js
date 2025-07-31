import axios from "axios";
import { getToken, setToken } from "./token";
import { authService } from "@/services/auth";

// export const COURSE_API = import.meta.env.VITE_COURSE_API;
// export const ORGANIZATION_API = import.meta.env.VITE_ORGANIZATION_API;
// export const USER_API = import.meta.env.VITE_USER_API;
// export const AUTHENTICATION_API = import.meta.env.VITE_AUTHENTICATION_API;

let refeshTokenPromise = null;
export const http = axios.create();

http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  async (err) => {
    console.log(err)
    try {
      if (
        err.response.status === 403 &&
        err.response.data.message === "Token expired"
        // err === "Token expired"
      ) {
        if (refeshTokenPromise) {
          await refeshTokenPromise;
        } else {
          console.log("refesh token");
          //refreshToken:
          const token = getToken();
          // console.log(token)
          refeshTokenPromise = authService?.refreshToken({
            refreshToken: token.refreshToken,
            accessToken: token.accessToken
          });
          const res = await refeshTokenPromise;
          setToken(res);
          refeshTokenPromise = null;
          // thực hiện lại api lỗi
        }
        return http(err.config);
      }
    } catch (error) {
      console.log(error)
    }
    throw err;
  }
);
http.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token.accessToken}`;
  }
  return config;
});
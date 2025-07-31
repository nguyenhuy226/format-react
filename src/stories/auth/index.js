import { getUser } from "@/utils";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { fetchGetUser, fetchLogin, fetchLogout, fetchSetUser } from "./saga";

const initialState = {
  user: getUser(),
  status: "idle",
  loginLoading: false,
};


export const { reducer: authReducer, actions: authActions ,name} = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginAction.pending, (state) => {
  //       state.status = "loading";
  //       state.loginLoading = true;
  //     })
  //     .addCase(loginAction.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.user = action.payload;
  //       state.loginLoading = false;
  //     })
  //     .addCase(loginAction.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.loginLoading = false;
  //       console.error(action.error.message);
  //     });
  // },
});
export const loginAction = createAction(`${name}/login`);
export const logoutAction = createAction(`${name}/logoutAction`);
export const setUserAction = createAction(`${name}/setUserAction`);
export const getUserAction = createAction(`${name}/getUser`);
export const loginSuccesAction = createAction(`${name}/loginSuccess`);
export const logoutSuccesAction = createAction(`${name}/logoutSuccess`);

export function* authSaga() {
  yield takeLatest(loginAction, fetchLogin)
  yield takeLatest(logoutAction, fetchLogout);
  yield takeLatest(setUserAction, fetchSetUser);
  yield takeLatest(getUserAction, fetchGetUser);
}
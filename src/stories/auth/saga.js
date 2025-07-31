import { authService } from "@/services/auth";
import { userService } from "@/services/user";
import { clearToken, clearUser, getToken, setToken, setUser } from "@/utils";
import { call, put } from "redux-saga/effects";
import { authActions, loginSuccesAction, logoutSuccesAction } from ".";



export function* fetchLogin(action) {
  try {
    yield put(authActions.setToogleLoading(true))
    const res = yield call(authService.login, action.payload);
    setToken(res);
    const user = yield call(userService.getUser);
    setUser(user.user);
    yield put(loginSuccesAction());
    yield put(authActions.setUser(user.user));
    return user.user;
  } catch (error) {
    console.log(error)
    throw error.response?.data
  } finally {
    yield put(authActions.setToogleLoading(false))
  }
}

export function* fetchLogout() {
  try {
    const token = getToken();
    if (token) {
      yield call(authService.logout, {
        accessToken: token.accessToken
      });
    }
  } catch (er) {
    console.log(er)
  }
  yield put(authActions.logout());
  yield put(logoutSuccesAction());
  clearUser();
  clearToken();
}

export function* fetchSetUser(action) {
  setUser(action.payload)
  yield put(authActions.setUser(action.payload))
}

export function* fetchGetUser() {
  try {
    if (getToken()) {
      const user = yield call(userService.getUser);
      setUser(user.user);
      yield put(authActions.setUser(user.user));
    }
  } catch (err) {
    console.log(err)
  }
}

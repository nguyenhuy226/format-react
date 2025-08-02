import { cartService } from "@/services/cart";
import { getToken, handleError, storeCart, storePreCheckoutData, storePreCheckoutResponse } from "@/utils";
import { call, delay, put, race, select, take } from "redux-saga/effects";
import { cartActions, getCartAction, updateItemQuantitySuccessAction } from ".";
import { authActions } from "../auth";



export function* fetchAddCartItem(action) {
    try {
        yield put(cartActions.toggleProductLoading({ id: action.payload.product_id, loading: true }))
        yield call(cartService.addItem, action.payload);
        yield put(getCartAction());
        if (action.payload.showPopover) {
            yield put(cartActions.tooglePopoer(true));
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        yield put(cartActions.toggleProductLoading({ id: action.payload.product_id, loading: false }))
    } catch (error) {
        console.error(error);
    }
}

export function* fetchUpdateCartItem(action) {
    try {
        yield delay(300)
        yield put(cartActions.toggleProductLoading({ id: action.payload.id, loading: true }))
        yield call(cartService.updateCart, action.payload);
        yield put(getCartAction());
        yield put(updateItemQuantitySuccessAction(action.payload.id))
        yield put(cartActions.toggleProductLoading({ id: action.payload.id, loading: false }))
    } catch (error) {
        console.error(error);
    }
}

export function* fetchRemoveCartItem(action) {
    try {
        yield put(cartActions.toggleProductLoading({ id: action.payload, loading: true }))
        yield call(cartService.removeItem, action.payload)
        yield put(getCartAction());
        yield put(cartActions.toggleProductLoading({ id: action.payload, loading: false }))
        // yield put(updateItemQuantitySuccessAction(action.payload))
    } catch (error) {
        console.log(error)
    }
}

export function* fetchGetCart() {
    try {
        if (getToken()) {
            const { cart } = yield race({
                cart: call(cartService.getCart),
                logout: take(authActions.logout)
            })
            if (cart) {
                yield put(cartActions.setCart(cart));
            }
        }
    } catch (error) {
        console.error(error);
        throw error.response?.data || error.message || "Something went wrong";
    }
}

export function* clearCart() {
    storePreCheckoutResponse.clear()
    storePreCheckoutData.clear()
    storeCart.clear()
    yield put(cartActions.setCart(null));
    // yield put(cartActions.clearCart())
    // const innitialState = getInitialState()
    // console.log(innitialState)
    yield put(cartActions.resetCart())
}

// eslint-disable-next-line require-yield
export function* setCartSaga(action) {
    storeCart.set(action.payload);
}

export function* fetchToogleCheckedCartItem(action) {
    try {
        let { cart: { preCheckoutData: { data } } } = yield select()
        let newList = [...data];
        const {
            productId,
            checked
        } = action.payload
        if (checked) {
            if (!newList.includes(productId)) {
                newList.push(productId);
            }
        } else {
            newList = newList.filter(e => e !== productId);
        }
        yield put(cartActions.setPreCheckoutData(
            newList
        ))
    } catch (err) {
        handleError(err)
    }
}

export function* fetchPreCheckout(action) {
    try {
        let { cart: { preCheckoutData } } = yield select()
        if (action.type === updateItemQuantitySuccessAction.toString()) {
            let id = action.payload
            if (!preCheckoutData?.data?.find(e => e === id)) return
        }
        yield put(cartActions.tooglePreCheckoutLoading(true))
        const res = yield call(cartService.preCheckout, preCheckoutData)
        yield put(cartActions.setPreCheckoutResponse(res))
        yield put(cartActions.tooglePreCheckoutLoading(false))
        storePreCheckoutData.set(preCheckoutData)
        storePreCheckoutResponse.set(res)
    } catch (err) {
        handleError(err)
    }
}

export function* updatePreCheckoutData(action) {
    let { cart: { preCheckoutData } } = yield select()
    if (preCheckoutData?.data?.find(e => e === action.payload)) {
        yield put(cartActions.setPreCheckoutData(
            preCheckoutData?.data?.filter(e => e !== action.payload)
        ))
    }
}
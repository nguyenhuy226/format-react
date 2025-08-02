import { storeCart, storePreCheckoutData, storePreCheckoutResponse } from "@/utils";
import { createAction, createSlice } from "@reduxjs/toolkit";
import { takeLatest } from "redux-saga/effects";
import { loginSuccesAction, logoutSuccesAction } from "../auth";
import { clearCart, fetchAddCartItem, fetchGetCart, fetchPreCheckout, fetchRemoveCartItem, fetchToogleCheckedCartItem, fetchUpdateCartItem, setCartSaga, updatePreCheckoutData } from "./saga";

// export const addCartItemAction = createAsyncThunk('cart/addCartItem', async (data, thunkApi) => {
//     try {
//         await cartService.addItem(data);
//         thunkApi.dispatch(getCartAction());
//         if(data.showPopover) {
//             thunkApi.dispatch(cartActions.tooglePopoer(true));
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }
//     } catch (error) {
//         console.error(error);
//         throw error.response?.data || error.message || "Something went wrong";
//     }
// })


// export const getCartAction = createAsyncThunk('cart/getCart', async (_, thunkApi) => {
//     try {
//         if (getToken()) {
//             const cart = await cartService.getCart();
//             thunkApi.dispatch(cartActions.setCart(cart));
//             return cart
//         }
//     } catch (error) {
//         console.error(error);
//         throw error.response?.data || error.message || "Something went wrong";
//     }
// })
const initialState = {
    cart: storeCart.get(),
    openCartOver: false,
    loading: {},
    preCheckoutLoading: false,
    preCheckoutData: storePreCheckoutData.get() || {
        data: [],
        note: '',
        method: "COD"
    },
    preCheckoutResponse: storePreCheckoutResponse.get() || {}
}
export const { reducer: cartReducer, actions: cartActions, name, getInitialState } = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        clearCart(state) {
            return {
                ...state,
                openCartOver: false,
                loading: {},
                preCheckoutLoading: false,
                preCheckoutData: {
                    data: [],
                    note: '',
                    method: "COD"
                },
                preCheckoutResponse: {}
            }
        },
        resetCart(state) {
            return {
                ...state,
                openCartOver: false,
                loading: {},
                preCheckoutLoading: false,
                preCheckoutData: {
                    data: [],
                    note: '',
                    method: "COD"
                },
                preCheckoutResponse: {}
            }
        },
        setCart(state, action) {
            state.cart = action.payload
        },
        tooglePopoer(state, action) {
            state.openCartOver = action.payload;
        },
        toggleProductLoading(state, action) {
            state.loading[action.payload.id] = action.payload.loading;
        },
        tooglePreCheckoutLoading(state, action) {
            state.preCheckoutLoading = action.payload
        },
        setPreCheckoutData(state, action) {
            state.preCheckoutData.data = action.payload
        },
        setPreCheckoutAddress(state, action) {
            state.preCheckoutData.address_id = action.payload
        },
        setPreCheckoutNote(state, action) {
            state.preCheckoutData.note = action.payload
        },
        setPreCheckoutMethod(state, action) {
            state.preCheckoutData.method = action.payload
        },
        setPreCheckoutResponse(state, action) {
            state.preCheckoutResponse = action.payload
        }
    }
})
export const addCartItemAction = createAction(`${name}/addCartItem`)
export const removeCartItemAction = createAction(`${name}/removeCartItem`)
export const updateCartItemAction = createAction(`${name}/updateCartItem`)
export const getCartAction = createAction(`${name}/getCart`)
export const toogleCheckedCartItemAction = createAction(`${name}/toogleCheckedCartItem`)
export const updateItemQuantitySuccessAction = createAction(`${name}/updateItemQuantitySuccess`)


export function* cartSaga() {
    yield takeLatest(addCartItemAction, fetchAddCartItem)
    yield takeLatest(updateCartItemAction, fetchUpdateCartItem)
    yield takeLatest(removeCartItemAction, fetchRemoveCartItem)
    yield takeLatest([getCartAction, loginSuccesAction, cartActions.clearCart], fetchGetCart);
    yield takeLatest([logoutSuccesAction, cartActions.clearCart], clearCart);
    yield takeLatest(cartActions.setCart, setCartSaga)
    yield takeLatest(toogleCheckedCartItemAction, fetchToogleCheckedCartItem)
    yield takeLatest([updateItemQuantitySuccessAction, cartActions.setPreCheckoutData], fetchPreCheckout)

    yield takeLatest(removeCartItemAction, updatePreCheckoutData)
}
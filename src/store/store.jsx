import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

store.subscribe(() => {
    const state = store.getState()
    localStorage.setItem('cart', JSON.stringify(state.cart))
    console.log('Estado guardado en localStorage:', state.cart)
})

export default store
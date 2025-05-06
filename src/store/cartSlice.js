import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : {items: [], total: 0}
}

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromLocalStorage(),
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.items.push({ ...product, quantity: product.quantity || 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;

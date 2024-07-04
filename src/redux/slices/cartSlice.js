import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
      state.total += action.payload.price;
      state.total = Number(state.total.toFixed(2));
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.cartItems.filter((cartItem) => {
        if (cartItem.id === action.payload) {
          state.total -= cartItem.price;
          state.total = Number(state.total.toFixed(2));
          return false;
        }
        return true;
      });
      state.cartItems = updatedCartItems;
    },
    increaseQty: (state, action) => {},
    decreaseQty: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  cartSlice.actions;

const cartSliceReducer = cartSlice.reducer;

export default cartSliceReducer;

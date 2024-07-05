import { createSlice } from "@reduxjs/toolkit";

function handleIncreaseQty(state, id) {
  const updatedCartItems = state.cartItems.map((cartItem) => {
    if (cartItem.id === id) {
      state.total += cartItem.price;
      return { ...cartItem, qty: cartItem.qty + 1 };
    }
    return cartItem;
  });

  state.cartItems = updatedCartItems;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
    isCartOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      const alreadyExists = state.cartItems.find((value) => {
        return value.id === action.payload.id;
      });

      if (alreadyExists) {
        handleIncreaseQty(state, action.payload.id);
      } else {
        state.cartItems = [...state.cartItems, action.payload];
        state.total += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.cartItems.filter((cartItem) => {
        if (cartItem.id === action.payload) {
          state.total -= cartItem.price;
          return false;
        }
        return true;
      });
      state.cartItems = updatedCartItems;
    },
    increaseQty: (state, action) => {
      handleIncreaseQty(state, action.payload);
    },
    decreaseQty: (state, action) => {
      const updatedCartItems = state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload) {
          if (cartItem.qty > 1) {
            state.total -= cartItem.price;
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
        }
        return cartItem;
      });

      state.cartItems = updatedCartItems;
    },
    toggleCart: (state, action) => {
      console.log(state.isCartOpen);
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  toggleCart,
} = cartSlice.actions;

const cartSliceReducer = cartSlice.reducer;

export default cartSliceReducer;

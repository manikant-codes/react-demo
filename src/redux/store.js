import { configureStore } from "@reduxjs/toolkit";
import cakeSliceReducer from "./slices/cakeSlice";
import icecreamSliceReducer from "./slices/icecreamSlice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cake: cakeSliceReducer,
    icecream: icecreamSliceReducer,
    cart: cartSliceReducer,
  },
});

export default store;

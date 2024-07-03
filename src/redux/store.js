import { configureStore } from "@reduxjs/toolkit";
import cakeSliceReducer from "./slices/cakeSlice";
import icecreamSliceReducer from "./slices/icecreamSlice";

const store = configureStore({
  reducer: {
    cake: cakeSliceReducer,
    icecream: icecreamSliceReducer,
  },
});

export default store;

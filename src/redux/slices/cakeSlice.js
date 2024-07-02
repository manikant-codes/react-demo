import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cake",
  initialState: {
    numberOfCakes: 5,
  },
  reducers: {
    buyCake: (state, action) => {
      state.numberOfCakes -= 1;
    },
    restockCake: (state, action) => {
      state.numberOfCakes += 1;
    },
  },
});

export const { buyCake, restockCake } = cartSlice.actions;

// console.log("buyCake", buyCake());

const cakeSliceReducer = cartSlice.reducer;

export default cakeSliceReducer;

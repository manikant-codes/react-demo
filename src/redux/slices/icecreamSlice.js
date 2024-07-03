import { createSlice } from "@reduxjs/toolkit";

const icecreamSlice = createSlice({
  name: "icecream",
  initialState: {
    numberOfIcecreams: 10,
  },
  reducers: {
    buyIcecream: (state, action) => {
      state.numberOfIcecreams -= 1;
    },
    restockIcecream: (state, action) => {
      state.numberOfIcecreams += 1;
    },
  },
});

export const { buyIcecream, restockIcecream } = icecreamSlice.actions;

const icecreamSliceReducer = icecreamSlice.reducer;

export default icecreamSliceReducer;

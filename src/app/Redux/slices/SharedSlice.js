import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
  cart: [],
};
const sharedSlice = createSlice({
  name: "shared",
  initialState,
  reducers: {
    setTours(state, action) {
      //   console.log(action.payload);

      state.tours = action.payload;
    },
    setToCart(state, action) {
      if (!Array.isArray(state.cart)) {
        state.cart = [];
      }
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        // Item exists: update it
        state.cart[index] = {
          ...state.cart[index],
          ...action.payload,
        };
      } else {
        // Item doesn't exist: add it
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action) {
      const indexToRemove = action.payload;
      if (indexToRemove >= 0 && indexToRemove < state.cart.length) {
        state.cart.splice(indexToRemove, 1);
      }
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const {
  // openDeleteModel,
  setTours,
  setToCart,
  clearCart,
  removeFromCart
} = sharedSlice.actions;
export default sharedSlice.reducer;

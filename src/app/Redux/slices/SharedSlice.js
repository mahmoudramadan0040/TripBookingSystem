import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
const initialState = {
  tours: [],
  cart: [],
  sortBy: "", // 'low' | 'high' | 'new' | 'popular'
  searchTerm: "",
  selectedGovernorate: "", // optional filtering by category
  selectedTypeTour: "",
  selectedPrice: [0, 1000],
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

    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedGovernorate(state, action) {
      state.selectedGovernorate = action.payload;
    },
    setSelectedTypeTour(state, action) {
      state.selectedTypeTour = action.payload;
    },
    setSelectedPrice(state, action) {
      state.selectedPrice = action.payload;
    },
  },
});
export const {
  // openDeleteModel,
  setTours,
  setToCart,
  clearCart,
  setSortBy,
  setSearchTerm,
  setSelectedGovernorate,
  setSelectedTypeTour,
  setSelectedPrice,
} = sharedSlice.actions;
export default sharedSlice.reducer;

// Selectors
const selectTours = (state) => state.shared.tours?.data;
const selectSearchTerm = (state) => state.shared.searchTerm;
const selectedGovernorate = (state) => state.shared.selectedGovernorate;
const selectedTypeTour = (state) => state.shared.selectedTypeTour;
const selectedPrice = (state) => state.shared.selectedPrice;
const selectSortBy = (state) => state.shared.sortBy;

// Filtered and searched tours selector (memoized)
export const selectFilteredTours = createSelector(
  [
    selectTours,
    selectSearchTerm,
    selectedGovernorate,
    selectedTypeTour,
    selectedPrice,
  ],
  (
    tours = [],
    searchTerm,
    selectedGovernorate,
    selectedTypeTour,
    selectedPrice
  ) => {
    let filtered = Array.isArray(tours) ? tours : [];

    if (selectedGovernorate) {
      console.log(selectedGovernorate);
      filtered = filtered.filter(
        (tour) => tour.Governorate === selectedGovernorate
      );
    }
    if (selectedTypeTour) {
      if (selectedTypeTour == "half-day") {
        filtered = filtered.filter((tour) => Number(tour.Duration) < 6);
      } else if (selectedTypeTour == "full-day") {
        filtered = filtered.filter((tour) => Number(tour.Duration) >= 6);
      } else if (selectedTypeTour == "other") {
        filtered;
      } else {
        filtered;
      }
    }
    if (selectedPrice) {
        console.log(selectedPrice)
       const [minPrice, maxPrice] = selectedPrice;
       filtered = filtered.filter((tour) => {
         const price = Number(tour.price);
         return price >= minPrice && price <= maxPrice;
       });
    }

    if (searchTerm) {
      filtered = filtered.filter((tour) =>
        tour.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }
);
// Selector for filtered + sorted tours
export const selectFilteredSortedTours = createSelector(
  [selectFilteredTours, selectSortBy],
  (filteredTours, sortBy) => {
    return [...filteredTours].sort((a, b) => {
      switch (sortBy) {
        case "low":
          return Number(a.price) - Number(b.price);
        case "high":
          return Number(b.price) - Number(a.price);
        case "new":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "popular":
        default:
          return 0; // no sorting, original order
      }
    });
  }
);

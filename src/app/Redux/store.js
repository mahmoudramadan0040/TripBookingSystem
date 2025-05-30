// store.js
import { configureStore } from "@reduxjs/toolkit";
import SharedSlice from "./slices/SharedSlice";
import { apiTourSlice } from "./slices/TourSlice";
import { apiTransportSlice } from "./slices/TransportSlice";

export const store = configureStore({
  reducer: {
    // Add the API slice reducer to the Redux store
    // shared: SharedSlice,
    [apiTourSlice.reducerPath]: apiTourSlice.reducer,
    [apiTransportSlice.reducerPath]: apiTransportSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiTourSlice.middleware)
      .concat(apiTransportSlice.middleware),
});

// Export the hook used to access the Redux store
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

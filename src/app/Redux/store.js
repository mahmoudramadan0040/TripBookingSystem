// store.js
import { configureStore } from "@reduxjs/toolkit";
import SharedSlice from "./slices/SharedSlice";
import { apiTourSlice } from "./slices/TourSlice";
import { apiTransportSlice } from "./slices/TransportSlice";
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  // Add the API slice reducer to the Redux store
  shared: SharedSlice,
  [apiTourSlice.reducerPath]: apiTourSlice.reducer,
  [apiTransportSlice.reducerPath]: apiTransportSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false,})
      .concat(apiTourSlice.middleware)
      .concat(apiTransportSlice.middleware),
});

export const persistor = persistStore(store);
// Export the hook used to access the Redux store
export const useAppDispatch = () => useDispatch();
export const useAppSelector = (selector) => useSelector(selector);

// store.js
import { configureStore } from '@reduxjs/toolkit';
import SharedSlice from './slices/SharedSlice';



export const store = configureStore({
    reducer: {
      // Add the API slice reducer to the Redux store
      shared:SharedSlice,
      [apiStudentSlice.reducerPath]: apiStudentSlice.reducer,
    //   [apiDepartmentSlice.reducerPath]:apiDepartmentSlice.reducer,
    //   [apiGradeSlice.reducerPath]:apiGradeSlice.reducer,
    //   [apiSubjectSlice.reducerPath]:apiSubjectSlice.reducer,
    //   [apiReportsSlice.reducerPath]:apiReportsSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
    //   .concat(apiDepartmentSlice.middleware)

      
  });
  
  // Export the hook used to access the Redux store
  export const useAppDispatch = () => useDispatch();
  export const useAppSelector = (selector) => useSelector(selector);
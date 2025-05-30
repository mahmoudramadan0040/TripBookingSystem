import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tours:[]
  };
const sharedSlice = createSlice({
    name:"shared",
    initialState,
    reducers:{
        setTours(state, action) {
            console.log(action.payload);
            
            state.tours = action.payload;
          },
    }
})
export const {
    // openDeleteModel,
    setTours
} = sharedSlice.actions
export default sharedSlice.reducer
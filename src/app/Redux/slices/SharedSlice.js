import { createSlice } from '@reduxjs/toolkit'

const intialState = {

}

const sharedSlice = createSlice({
    name:"shared",
    initialState,
    reducers:{
        // openDeleteModel:(state)=>{
        //     state.DeleteDepartmentModel=true
        // },
        // closeDeleteModel:(state)=>{
        //     state.DeleteDepartmentModel=false
        // }
    }
})
export const {
    // openDeleteModel,

} = sharedSlice.actions
export default sharedSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const sliceCalc = createSlice({
    name: "calculator",
    initialState:{
        value:0,
    },
    reducers:{
        textButton:(state) =>{
            console.log(state);
            
        }
    }
})
export const {textButton} = sliceCalc.actions
export default sliceCalc.reducer
import { createSlice } from "@reduxjs/toolkit";

const sliceCalc = createSlice({
    name: "calculator",
    initialState: {
        value: "0",
    },
    reducers: {
        textButton: (state, action) => {
            const input = action.payload
            console.log(input);
        }
    }
})

export const { textButton } = sliceCalc.actions
export default sliceCalc.reducer
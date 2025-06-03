import { createSlice } from "@reduxjs/toolkit";
// import { evaluate } from "mathjs";

const sliceCalc = createSlice({
    name: "calculator",
    initialState: {
        value: "0",
    },
    reducers: {
        textButton: (state, action) => {
            const input = action.payload
            console.log(input);
            if (input === "AC") {
                state.value = "0";
            } else if (input === "=") {
                try {
                    const result = eval(state.value);
                    state.value = result.toString();
                } catch (e) {
                    state.value = "Error";
                    console.log(e, "erorororor");

                }
            } else {
                if (state.value === "0" || state.value === "Error") {
                    state.value = input;
                } else {
                    state.value += input;
                }
            }
        }
    }
})

export const { textButton } = sliceCalc.actions
export default sliceCalc.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "0",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    textButton: (state, action) => {
      const input = action.payload;

      switch (input) {
        case "AC":
          state.value = "0";
          break;
        case "=":
          try {
            const lastChar = state.value.slice(-1);
            if ("+-*/".includes(lastChar)) {
              state.value = "Error";
            } else {
              state.value = eval(state.value).toString();
            }
          } catch {
            state.value = "Error";
          }
          break;
        default:
          if (input === "." && state.value.endsWith(".")) {
            break;
          }
          if (state.value === "0" && input === "0") {
            break;
          }
          if (state.value === "0" || state.value === "Error") {
            state.value = input;
          } else {
            state.value += input;
          }
      }
    },
  },
});

export const { textButton } = calculatorSlice.actions;
export default calculatorSlice.reducer;

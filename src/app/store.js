import { configureStore } from '@reduxjs/toolkit';
import calcReducer from './../redux/calcFunctions/sliceCalc';

const store = configureStore({
    reducer: {
        calculator: calcReducer
    }
})

export default store;
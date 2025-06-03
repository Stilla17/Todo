import { configureStore } from '@reduxjs/toolkit';
import reducerCalc from './../redux/calcFunctions/sliceCalc';
import Calculator from '../Pages/Calculator';

const store = configureStore({
    reducer:{
        Calculator:reducerCalc
    }
})
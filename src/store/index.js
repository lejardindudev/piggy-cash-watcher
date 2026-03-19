import {configureStore} from "@reduxjs/toolkit";
import {expenseSlice} from "./expense-slice/expenseSlice.js";
import {authSlice} from "./authSlice/authSlice.js";
const store = configureStore({
    reducer: {
        EXPENSE: expenseSlice.reducer,
        AUTH : authSlice.reducer
    },
});

export default store;
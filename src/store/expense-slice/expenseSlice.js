import {createSlice} from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        totalExpense: 0,
        expenses: []
    },
    reducers: {
        addExpense: (currentSlice,action) => {
            //Comportement de l'action de slice
            currentSlice.expenses.push({
                title:action.payload.title,
                amount:action.payload.amount,
            });
        },
        updateTotalExpense : (currentSlice,action) => {            
            currentSlice.totalExpense += action.payload.amount; 
        }
        /* autres fonctions*/ 
    }

});
//destructuration => toutes les fonctions créées passent dans les accolades du const
const {addExpense,updateTotalExpense} = expenseSlice.actions;

export {
    addExpense,
    updateTotalExpense,
}
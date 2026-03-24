import {createSlice} from "@reduxjs/toolkit";

export const expenseSlice = createSlice({
    name: "expense",
    initialState: {
        totalExpense: 800,
        countExpense:3,
        expenses: [
      {
        title: 'Ordinateur',
        amount: 500,
        id: 0
      },
      {
        title: 'Chair',
        amount: 200,
        id: 1
      },
      {
        title: 'Desk',
        amount: 100,
        id: 2
      }
    ]
    },
    reducers: {
        addExpense: (currentSlice,action) => { 
            //Comportement de l'action de slice
            
            currentSlice.expenses.push({
                title:action.payload.title,
                amount:action.payload.amount,
                id:currentSlice.countExpense
            });
            currentSlice.countExpense++;
        },
        addExpenseAmountToTotal : (currentSlice,action) => {
            currentSlice.totalExpense += action.payload.amount;
        },
        deleteExpense:(currentSlice,action) => {
            console.log("Expense "+ action.payload.id +" trying to delete");
            // console.log(currentSlice.expenses)
            const expenseIndex = currentSlice.expenses.findIndex( (expense) => {
                return expense.id === action.payload.id;
            });
            currentSlice.expenses.splice(expenseIndex,1);
        },
         substractExpenseAmountToTotal : (currentSlice,action) => {
            console.log("From slice",action.payload.amount)
            currentSlice.totalExpense -= action.payload.amount;
        },
        
        
        modifyExpense : (currentSlice,action) => {

        },
        updateTotalExpense : (currentSlice,action) => {            
             
        },
        /* autres fonctions*/ 
    }

});
//destructuration => toutes les fonctions créées passent dans les accolades du const
const {addExpense,updateTotalExpense,deleteExpense, addExpenseAmountToTotal,modifyExpense,substractExpenseAmountToTotal} = expenseSlice.actions;

export {
    addExpense,
    updateTotalExpense,
    deleteExpense,
    addExpenseAmountToTotal,
    modifyExpense,
    substractExpenseAmountToTotal,
}
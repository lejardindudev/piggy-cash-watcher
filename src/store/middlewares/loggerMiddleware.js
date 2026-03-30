import {createListenerMiddleware,isAnyOf} from "@reduxjs/toolkit";
import { addExpense,updateTotalIncome,deleteExpense,modifyExpense,incrementActionCounter } from "../expense-slice/expenseSlice";
export const loggerMiddleware = createListenerMiddleware();

loggerMiddleware.startListening({
    // predicate:(action)=>{
    //     return action.type === "expense/addExpense" || action.type === "expense/updateTotalIncome";
    // },
    matcher:isAnyOf(addExpense,updateTotalIncome,deleteExpense,modifyExpense),
    effect : async (action,listenerApi) => {
        listenerApi.dispatch(incrementActionCounter());
        console.log("##Logs "+listenerApi.getState().EXPENSE.actionCounter+" : "+action.type.replace("expense/",""))
        console.log(action.payload);
        console.log("Current store : ",listenerApi.getState().EXPENSE);

    }
})


// import { useState } from 'react';
// import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import {deleteExpense,substractExpenseAmountToTotal} from "../../store/expense-slice/expenseSlice"

import './ExpenseListItem.css';

export default function ExpenseListItem({title,amount,id,restoreFocus,showHideForm}) {
  const dispatch = useDispatch();
  const handleDeletionItem = () => {
    const amountNumber=Number(amount);
    dispatch(deleteExpense({id}));
    dispatch(substractExpenseAmountToTotal({amount}));
    restoreFocus();
    
    
  }
const handleUpdateItem = (title,amount,id) => {
  console.log(title,amount,id);
  showHideForm(true,title,amount,id);
}

  return (
    <p className="ExpenseList-item ExpenseListItem">
      <span className="ExpenseListItem-title">{title}</span>
      <span className="ExpenseListItem-amount">{amount} €</span>
      <span className="ExpenseListItem-edit" onClick={()=>{handleUpdateItem(title,amount,id)}}><i className="fa-solid fa-pen-to-square"></i></span>
      <span className="ExpenseListItem-delete" onClick={()=>{handleDeletionItem(id)}}><i className="fa-solid fa-trash"></i></span>
    </p>
  );

}
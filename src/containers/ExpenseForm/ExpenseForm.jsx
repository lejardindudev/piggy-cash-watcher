// import { useState } from 'react';
// import { useEffect } from 'react';
import {useDispatch} from "react-redux"
import {addExpense,updateTotalExpense} from "../../store/expense-slice/expenseSlice"

// Assets et ressources
import './ExpenseForm.css';
import InputBox from "../../components/InputBox" ;


export default function ExpenseForm() {
  //hook redux qui retourne la réelle fonction dispatch du store
  const dispatch = useDispatch();

  function submit (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title=formData.get("title");
    const amount=Number(formData.get("amount"));
    if (Number.isNaN(amount)){
      alert("Bad format for amount field ");
      return;
    }
    dispatch(addExpense({title,amount}));
    dispatch(updateTotalExpense({amount}))
  }
  return (
    <form onSubmit={submit} action="" className="Content-expense-form ExpenseForm">
      <InputBox label="Title" idName="title"/>
      <InputBox label="Amount" idName="amount"/>
      <InputBox type="submit"/>
    </form>
  );

}
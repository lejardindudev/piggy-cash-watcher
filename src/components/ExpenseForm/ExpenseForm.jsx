//## HOOKS ###########
// import { useEffect } from 'react';
// import { useState } from 'react';
import {forwardRef} from 'react';



//#### UTILS ###########
import {addExpense,updateTotalExpense,modifyExpense,addExpenseAmountToTotal} from "../../store/expense-slice/expenseSlice"

// ## ASSETS - RESSOURCES #############
import './ExpenseForm.css';

//#### COMPONENTS ###########
import InputBox from "../InputBox" ;

const ExpenseForm = forwardRef(( {idUpdateRef,amountUpdateRef,inputUpdateRef,isVisible,formType,restoreFocus,onSubmitHandler,parentClass,updater,showHideForm} , ref) => {
// export default function ExpenseForm() {

  const updateClass = formType === "update" ? " updater" : "";
  const isOpen = isVisible ? " open" : "" ;
  const customClass = parentClass ? parentClass + " ExpenseForm"  + updateClass + isOpen: "ExpenseForm"+ updateClass + isOpen; 

  return (

    <form onSubmit={onSubmitHandler} action="" className={customClass}>
      <div className="popinWrapper">
        {/* Close button conditionnal for update form only */}
      {formType === "update" 
        ? <><span onClick = {()=> { showHideForm(false);}} className="ExpenseForm-closeUpdate"> <i className="fa-solid fa-xmark"></i></span> <input type="hidden" name="id" ref={idUpdateRef} /> </>
        : ""}
      
      {formType === "add" 
        ? <InputBox ref={ref} label="Title" idName="title-add" formType={formType}/>
        : <InputBox inputRef={inputUpdateRef} label="Title" idName="title-update" formType={formType}/>
      }
      
      {formType === "add" 
      ? <InputBox label="Amount" idName="amount-add" formType={formType}/>
      : <InputBox inputRef={amountUpdateRef} label="Amount" idName="amount-update" formType={formType}/>
          }
      {/* <InputBox label="Amount" idName="amount"/> */}
      <InputBox type="submit" formType={formType}/>
      </div>
    </form>
  );

});

export default ExpenseForm;
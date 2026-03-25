//## HOOKS ###########
// import { useEffect } from 'react';
import {forwardRef,useState} from 'react';



//#### UTILS ###########
// import {addExpense,updateTotalExpense,modifyExpense,addExpenseAmountToTotal} from "../../store/expense-slice/expenseSlice"

// ## ASSETS - RESSOURCES #############
import './ExpenseForm.css';

//#### COMPONENTS ###########
import InputBox from "../InputBox" ;

const ExpenseForm = forwardRef(( {idUpdateRef,amountUpdateRef,inputUpdateRef,isVisible,formType,restoreFocus,onSubmitHandler,parentClass,updater,showHideForm} , ref) => {

  // Refs
  
  // States
  const [closed,setClosed] = useState(true);

  // Classes personnalisées
  const isClosed = closed ? " closed" : ""
  const updateClass = formType === "update" ? " updater" : "";
  const isOpen = isVisible ? " open" : "" ;
  const hasParentClass = parentClass ? parentClass + " ExpenseForm" : " ExpenseForm"
  const customClass = hasParentClass + updateClass + isOpen + isClosed; 

  // Fonctions
  const handleClose = () => {
    setClosed(!closed);
  }

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
      {formType === "add" && <div onClick={()=>{handleClose()}} className="ExpenseForm-showHide"><i className="fa-solid fa-angle-down ExpenseForm-showHide-icon"></i></div>
        }
    </form>
  );

});

export default ExpenseForm;
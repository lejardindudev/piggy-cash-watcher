//## HOOKS ##########
import { useRef } from 'react';
import { useDispatch,useSelector } from 'react-redux';

//## UTILS  ###########
import {updateCurrentCash,updateTotalIncome} from "../../store/expense-slice/expenseSlice"

//## ASSETS - RESSOURCES #############
import './Income.css';

//## COMPONENTS  ###########
import useState from 'react';

export default function Income({restoreFocus}) {
  // Lecture écriture du store
  const dispatch = useDispatch();
  const totalIncome = useSelector( (store ) => store.EXPENSE.totalIncome);
  
  // Mise en place de la ref
  const incomeRef = useRef(null);
  
  // Gestion du input onChange
  const onChangeHandler = (e) => {
    const currentKey = Number(e.nativeEvent.data);
    if(Number.isNaN(currentKey)){
      alert("Income amount can't be a string but a number !!");
    }
    incomeRef.current.value = incomeRef.current.value.replace(/[^0-9]/g, "");
    const income = incomeRef.current.value;
    dispatch(updateTotalIncome({income}));
    dispatch(updateCurrentCash());

  }
  // Gestion du submit
  const handleSubmission= (e) => {
    e.preventDefault();
    restoreFocus();
  }



  return (
    <div className="Income sticky">
          <form action=""  className="Income-form" onSubmit={(e)=>handleSubmission(e)}>
            <label htmlFor="incoming" className="Income-label">Revenu</label>
            <input ref={incomeRef} type="text" className="Income-input" id="incoming" onChange={(e)=>onChangeHandler(e)} defaultValue={totalIncome} />
          </form>
    </div>
  );
}
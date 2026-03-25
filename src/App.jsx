// Hooks
import {useSelector,useDispatch} from 'react-redux';
import {useRef,useState,useLayoutEffect} from "react";


//#### UTILS ###########
import {addExpense,updateTotalExpense,modifyExpense,addExpenseAmountToTotal,updateCurrentCash} from "./store/expense-slice/expenseSlice"

// Ressources
import './App.css';
// Components
import Logo from './components/Logo/Logo';
import Income from './containers/Income/Income';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from './components/ExpenseList';
import ExpenseAmount from "./containers/ExpenseAmount"

function App() {
  // Lecture écriture du store
  const dispatch = useDispatch();
  const expenseList = useSelector( (store ) => store.EXPENSE.expenses);
  const expenseAmount = useSelector ((store ) => store.EXPENSE.totalExpense);
  const expenseArray = expenseList;
  
  // Référence pour interagir avec le input des forms
  const inputUpdateRef = useRef(null);
  const amountUpdateRef = useRef(null);
  const idUpdateRef = useRef(null);
  const inputAddRef = useRef(null);
  
  
  // State pour popin updater
  const [openForm,setOpenForm] = useState(false);
  
  const showHideForm = (booleen,title,amount,id) =>{
    setOpenForm(booleen);
    inputUpdateRef.current.value=title;
    amountUpdateRef.current.value=amount;
    idUpdateRef.current.value=id;
    setFocus();
    
  }

  // Fonctions a propager aux composants enfants
  const setFocus = (inputRef=inputAddRef) => {
    // console.log("ref",inputRef)
    inputRef.current.focus();
  }
  useLayoutEffect (()=> {
    setFocus(inputAddRef)

  },[]);

  // Comportement des variantes du composant ExpenseForm a propager
  function addItem (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title=formData.get("title-add");
    const amount=Number(formData.get("amount-add"));
    if(title.trim() === "" || amount === 0){
                alert( "Sorry, some of your entries are empty");
                setFocus()
                return;
            }
    if (Number.isNaN(amount)){
      alert("Bad format for amount field ");
      return;
    }
    if (amount <= 0) {
      alert("Amount should be higher than 0");
      return ;
    }
    dispatch(addExpense({title,amount}));
    dispatch(addExpenseAmountToTotal({amount}))
    dispatch(updateCurrentCash())
    e.currentTarget.reset();
    setFocus(inputAddRef);
  }

  function updateItem (e) {
    e.preventDefault();
    // Tests de validité
    const titleUpdate = inputUpdateRef.current.value;
    const amountUpdate = Number(amountUpdateRef.current.value);
    if(titleUpdate.trim() === "" || amountUpdate === 0){
      alert( "Sorry, some of your entries are empty");
      // restoreFocus();
      return;
    }
    console.log("from form",amountUpdate);
    if (Number.isNaN(amountUpdate)){
      alert("Bad format for amount field ");
      // restoreFocus();
      return;
    }
    if (amountUpdate <= 0) {
      alert("Amount should be higher than 0");
      // setFocus(inputAddRef);
      return ;
    }

    const id= Number(idUpdateRef.current.value);
    const title= inputUpdateRef.current.value;
    const amount= amountUpdateRef.current.value;
    dispatch(modifyExpense({id,title,amount}));
    dispatch(updateTotalExpense());
    dispatch(updateCurrentCash());

    showHideForm(false)
    
  }
//  RENDER -->
  return (
    <>
      <header className="Header">
        <div className="layout">
          <Logo />
          <Income restoreFocus={setFocus}/>

        </div>
        

      </header>
      <main className="Content layout">
        
        <div className="Content-expense">
          <ExpenseForm  
          ref={inputAddRef}
          formType="add" 
          restoreFocus={setFocus} 
          onSubmitHandler={addItem} 
          parentClass="Content-expense-form" 
        />

          <ExpenseForm  
            inputUpdateRef={inputUpdateRef} 
            amountUpdateRef={amountUpdateRef}
            idUpdateRef={idUpdateRef}
            formType="update" 
            restoreFocus={setFocus} 
            onSubmitHandler={updateItem} 
            isVisible={openForm} 
            parentClass="Content-expense-form"
            showHideForm={showHideForm}
          />


          <ExpenseList 
            items={expenseArray} 
            restoreFocus={setFocus} 
            showHideForm={showHideForm}
            
          />
        </div>
      </main>
      <ExpenseAmount totalAmount={expenseAmount}/>
     
    </>
  )
}

export default App

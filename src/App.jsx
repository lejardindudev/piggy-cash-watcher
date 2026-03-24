// Hooks
import {useSelector,useDispatch} from 'react-redux';
import {useRef,useState} from "react";


//#### UTILS ###########
import {addExpense,updateTotalExpense,modifyExpense,addExpenseAmountToTotal} from "./store/expense-slice/expenseSlice"

// Ressources
import './App.css';
// Components
import Logo from './components/Logo/Logo';
import Income from './components/Income/Income';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from './components/ExpenseList';
import ExpenseAmount from "./components/ExpenseAmount"

function App() {
  // Lecture écriture du store
  const dispatch = useDispatch();
  const expenseList = useSelector( (store ) => store.EXPENSE.expenses);
  const expenseAmount = useSelector ((store ) => store.EXPENSE.totalExpense);
  const expenseArray = expenseList;
  
  // Référence pour interagir avec le input des forms
  const inputUpdateRef = useRef(null);
  const amountUpdateRef = useRef(null);
  const inputAddRef = useRef(null);
  // Vérif
    console.log( "original ref",inputAddRef);
  
    // State pour popin updater
    const [openForm,setOpenForm] = useState(false);
    
    const showHideForm = (booleen,title,amount,id) =>{
      setOpenForm(booleen);
      inputUpdateRef.current.value=title;
      amountUpdateRef.current.value=amount;
      setFocus();
      
    }
   


  // Fonctions a propager aux composants enfants
  const setFocus = (inputRef=inputAddRef) => {
    console.log("ref",inputRef)
    inputRef.current.focus();
  }
//TODO:Virer ce truc
  const updaterFormHandler = () => {
    setUpdater(!updater);
  }

  // Comportement du composant ExpenseForm a propager
  function addItem (e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title=formData.get("title-add");
    const amount=Number(formData.get("amount-add"));
    if(title.trim() === "" || amount === 0){
                alert( "Sorry, some of your entries are empty");
                // restoreFocus();
                return;
            }
    if (Number.isNaN(amount)){
      alert("Bad format for amount field ");
      // restoreFocus();
      return;
    }
    if (amount <= 0) {
      alert("Amount should be higher than 0");
      // setFocus(inputAddRef);
      return ;
    }
    dispatch(addExpense({title,amount}));
    dispatch(addExpenseAmountToTotal({amount}))
    e.currentTarget.reset();
    setFocus(inputAddRef);
  }

  function updateItem (e) {
    e.preventDefault();
    
    resetForm(e);
    
  }
  // console.log("Updater : ",updater)
  return (
    <>
      <header className="Header">
        <Logo />
        <Income />
        

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

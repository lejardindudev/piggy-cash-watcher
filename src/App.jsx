// Hooks
import { useState } from 'react'
import {useSelector} from 'react-redux';
// Ressources
import './App.css';
// Components
import Logo from './components/Logo/Logo';
import Income from './components/Income/Income';
import ExpenseForm from "./containers/ExpenseForm";
import ExpenseList from './components/ExpenseList';
import ExpenseAmount from "./components/ExpenseAmount"

function App() {
  const expenseList = useSelector( (store ) => store.EXPENSE.expenses)
  const expenseArray = expenseList
  return (
    <>
      <header className="Header">
        <Logo />
        <Income />
        

      </header>
      <main className="Content layout">
        
        <div className="Content-expense">
          <ExpenseForm />
          <ExpenseList items={expenseArray}/>
        </div>
      </main>
      <ExpenseAmount />
      {/* <aside className="ExpenseAmount">
        <div className="layout ExpenseAmount-layout">
        <h2 className="ExpenseAmount-title">Expense Total</h2>
        <p className="ExpenseAmount-amount"><strong className="ExpenseAmount-amount-label">Total dépenses</strong><span className="ExpenseAmount-amount-price">0€</span></p>
        <p className="ExpenseAmount-amount"><strong className="ExpenseAmount-amount-label">Argent restant</strong><span className="ExpenseAmount-amount-price">1000€</span></p>
        </div>
      </aside> */}
    </>
  )
}

export default App

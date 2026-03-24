// import { useState } from 'react';
// import { useEffect } from 'react';

import './ExpenseList.css';
import ExpenseListItem from "../../containers/ExpenseListItem"

export default function ExpenseList({showHideForm,items,restoreFocus,updaterVisibility}) {

  return (
     <div className="Content-expense-list ExpenseList">
            <h2 className="ExpenseList-title">Expense List</h2>
            {items.map((item) => {
              return (
              <ExpenseListItem 
                key={item.id} 
                id={item.id} 
                title={item.title} 
                amount ={item.amount} 
                restoreFocus={restoreFocus} 
                showHideForm={showHideForm}
              />)
            })}
            
          </div>
  );

}
// import { useState } from 'react';
// import { useEffect } from 'react';

import './ExpenseList.css';
import ExpenseListItem from "../ExpenseListItem"

export default function ExpenseList({items}) {

  return (
     <div className="Content-expense-list ExpenseList">
            <h2 className="ExpenseList-title">Expense List</h2>
            {items.map((item,i) => {
              return <ExpenseListItem key={item.name+"-"+i} title={item.title} amount ={item.amount} />
            })}
            {/* <ExpenseListItem title="Title" amount ="Amount" /> */}
            
          </div>
  );

}
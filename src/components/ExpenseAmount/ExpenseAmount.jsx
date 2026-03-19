// import { useState } from 'react';
// import { useEffect } from 'react';

import './ExpenseAmount.css';

export default function ExpenseAmount() {

  return (
   <aside className="ExpenseAmount">
        <div className="layout ExpenseAmount-layout">
        <h2 className="ExpenseAmount-title">Expense Total</h2>
        <p className="ExpenseAmount-amount"><strong className="ExpenseAmount-amount-label">Total dépenses</strong><span className="ExpenseAmount-amount-price">0€</span></p>
        <p className="ExpenseAmount-amount"><strong className="ExpenseAmount-amount-label">Argent restant</strong><span className="ExpenseAmount-amount-price">1000€</span></p>
        </div>
      </aside>
  );

}
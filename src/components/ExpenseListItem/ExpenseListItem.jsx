// import { useState } from 'react';
// import { useEffect } from 'react';

import './ExpenseListItem.css';

export default function ExpenseListItem({title,amount}) {

  return (
    <p className="ExpenseList-item ExpenseListItem">
      <span className="ExpenseListItem-title">{title}</span>
      <span className="ExpenseListItem-amount">{amount} €</span>
    </p>
  );

}
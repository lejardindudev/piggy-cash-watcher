// import { useState } from 'react';
// import { useEffect } from 'react';

import './InputBox.css';

export default function InputBox({label,idName,type}) {


  return (
   <div className="ExpenseForm-inputBox InputBox">
      {label && <label htmlFor={idName} className="InputBox-label">{label}</label>}
      <input type={type==="submit" ? "submit" : "text"} name={idName?idName:"submit"}  id={idName} className="InputBox-input" />
    </div>
  );

}
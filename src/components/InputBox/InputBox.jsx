// import { useState } from 'react';
// import { useEffect } from 'react';
import { forwardRef } from "react";

import './InputBox.css';

const InputBox = forwardRef(
  (
    {inputRef,label,idName,type,formType},
    ref  
  ) => {


  return (
   <div className="ExpenseForm-inputBox InputBox">
      {label && <label 
        htmlFor={idName} 
        className="InputBox-label">{label}</label>}
        {/* Input title en fonction du type de form */}
        {formType === "add" 
        ? <input 
            ref = {ref}
            type={type==="submit" ? "submit" : "text"} 
            name={idName?idName:"submit"}  
            id={idName} 
            autoFocus={idName==="title"  && formType === "add"}
            className="InputBox-input"
            defaultValue={type==="submit" ? formType : ""}
          />
        : <input 
            ref = {inputRef}
            type={type==="submit" ? "submit" : "text"} 
            name={idName?idName:"submit"}  
            id={idName} 
            autoFocus={idName==="title"  && formType === "add"}
            className="InputBox-input"
            defaultValue={type==="submit" ? formType : ""}
          />
       
       }
     
    </div>
  );

});

export default InputBox;
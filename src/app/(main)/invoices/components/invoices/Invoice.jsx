"use client";
import { useSelectedContext } from "../../store/SelectedContextProvider";

import React, { useEffect, useRef, useState } from "react";

const states = ["Pending", "Paid", "On Hold"]

function Invoice({ id,client, amount, checked, setAllCheckedOff, delay,status }) {
  const { updateCount, count } = useSelectedContext();
  let [isChecked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  useEffect(() => {
    if(isChecked){
      updateCount(id, 1)
    }
    else if(count > 0){
      updateCount(id, -1)
    }
  }, [isChecked])
  function handleClick() {
    setAllCheckedOff();
    setChecked((prev) => {
      return !prev;
    });
    
  }
  let checkref = useRef();
  return (
    <div
      id="invoices-entry"
      style={{cursor: count>0 ? "pointer" : "default"}}
      className={isChecked ? "invoice-entry-active" : ""}
      onClick={() => {
        if(count> 0){
          handleClick()
        }
      }}
    >
      <input
        ref={checkref}
        checked={isChecked}
        onChange={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        id="invoices-table-checkbox"
        type="checkbox"
      />
      <div className="invoices-column-entry" id="invoices-table-left">
        {id}
      </div>
      <div className="invoices-column-entry" id="invoices-table-left">
        {client}
      </div>
      <div className="invoices-column-entry" id="invoices-table-right">
        ${amount}
      </div>
      <div id="status-button-container" className="invoices-column-entry" >
        <button onClick={(e) => e.stopPropagation()} className={` status-button ${states[status].toLowerCase().replace(" ", "-")}-button`} >{states[status]}</button>
      </div>
    </div>
  );
}

export default Invoice;

"use client";
import { useSelectedContext } from "../../store/SelectedContextProvider";

import React, { useEffect, useRef, useState } from "react";

function Invoice({ id,client, amount, checked, setAllCheckedOff, delay,status }) {
  const { updateCount } = useSelectedContext();
  let [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  useEffect(() => {
    if(isChecked){
      updateCount(id, 1)
    }
    else{
      updateCount(id, -1)
    }
  }, [isChecked])
  function handleClick() {
    setAllCheckedOff();
    setChecked((prev) => !prev);
    
  }
  let checkref = useRef();
  return (
    <div
      id="invoices-entry"
      className={isChecked ? "invoice-entry-active" : ""}
      onClick={() => {
        handleClick();
      }}
    >
      <input
        ref={checkref}
        checked={isChecked}
        onChange={() => {
          handleClick();
        }}
        onClick={() => {
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
      <div className="invoices-column-entry">{status}</div>
    </div>
  );
}

export default Invoice;

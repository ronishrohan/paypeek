"use client";

import React, { useEffect, useRef, useState } from "react";

function Invoice({ id, amount, checked, setAllCheckedOff, delay }) {
  let [isChecked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);
  let checkref = useRef();
  return (
    <div
      id="invoices-entry"
      className={isChecked ? "invoice-entry-active" : ""}
      onClick={() => {setChecked(prev => !prev)}}
    >
      <input
        ref={checkref}
        checked={isChecked}
        onChange={() => {
          setAllCheckedOff();
          setChecked((prev) => !prev);
        }}
        id="invoices-table-checkbox"
        type="checkbox"
      />
      <div className="invoices-column-entry" id="invoices-table-left">
        {id}
      </div>
      <div className="invoices-column-entry" id="invoices-table-left">
        {isChecked.toString()}
      </div>
      <div className="invoices-column-entry" id="invoices-table-right">
        ${amount}
      </div>
      <div className="invoices-column-entry">STATUS</div>
    </div>
  );
}

export default Invoice;

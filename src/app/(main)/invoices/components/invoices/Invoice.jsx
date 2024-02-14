"use client";
import { useSelectedContext } from "../../store/SelectedContextProvider";

import React, { useEffect, useRef, useState } from "react";
const states = ["Pending", "Paid", "On Hold"];
import { motion } from "framer-motion";

function Invoice({
  id,
  client,
  amount,
  checked,
  setAllCheckedOff,
  delay,
  status,
  itemId,
}) {
  const { count, updateSelected, selected } = useSelectedContext();
  let [isChecked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(checked)
  }, [checked])
  useEffect(() => {
    if(selected.length==0){
      setChecked(false);
    }
  }, [selected])
  useEffect(() => {
    if (isChecked) {
      updateSelected(itemId, 1);
    } else if (count > 0) {
      updateSelected(itemId, -1);
    }
  }, [isChecked]);
  function handleClick() {
    setAllCheckedOff();
    setChecked((prev) => {
      return !prev;
    });
  }
  let checkref = useRef();
  return (
    <motion.div
      layout
      id="invoices-entry"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        type: "tween",
        ease: "anticipate",
      }}
      className={isChecked ? "invoice-entry-active" : ""}
      onClick={() => {
        handleClick();
      }}
    >
      <input
        readOnly
        ref={checkref}
        checked={isChecked}
        onClick={(e) => {
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
      <div id="status-button-container" className="invoices-column-entry">
        <button
          onClick={(e) => e.stopPropagation()}
          className={` status-button ${states[status]
            .toLowerCase()
            .replace(" ", "-")}-button`}
        >
          {states[status]}
        </button>
      </div>
    </motion.div>
  );
}

export default Invoice;

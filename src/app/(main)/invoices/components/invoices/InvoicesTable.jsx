"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import InvoicesTableHeader from "./InvoicesTableHeader";
import Invoice from "./Invoice";
import { useSelectedContext } from "../../store/SelectedContextProvider";

const invoices = [1, 2, 3, 4, 5, 6, ,8,7, 9, 10];

function InvoicesTable() {
  const {resetCount} = useSelectedContext();
  const [allChecked, setAllChecked] = useState(false);
  const allCheckedRef = useRef();
  useEffect(() => {
    resetCount()
  }, [])
  function checkAll(value) {
    setAllChecked(value);
  }
  function setAllCheckOff() {
    allCheckedRef.current.checked = false;
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1}}
      transition={{delay: 0.5, ease:"anticipate", type: 'tween', duration: 1}}
      id="invoices-table"
    >
      <InvoicesTableHeader
        checkAll={checkAll}
        ref={allCheckedRef}
      ></InvoicesTableHeader>
      <div id="invoice-entries">
        {invoices.map((invoice, index) => {
          return (
            <Invoice
              key={index + checkAll.toString()}
              delay={index}
              id={invoice}
              setAllCheckedOff={setAllCheckOff}
              checked={allChecked}
              amount={111.22}
            ></Invoice>
          );
        })}
      </div>
    </motion.div>
  );
}

export default InvoicesTable;

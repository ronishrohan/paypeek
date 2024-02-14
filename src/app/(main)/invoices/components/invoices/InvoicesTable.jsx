"use client";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import InvoicesTableHeader from "./InvoicesTableHeader";
import Invoice from "./Invoice";
import { useSelectedContext } from "../../store/SelectedContextProvider";
import { useInvoicesData } from "../../store/InvoicesDataProvider";

function InvoicesTable() {
  const { resetCount, selected, changeSelected } = useSelectedContext();
  const [allChecked, setAllChecked] = useState(false);
  const allCheckedRef = useRef();
  const { data } = useInvoicesData();
  function checkAll(value) {
    setAllChecked(value);
    if(value){
      changeSelected(data.map((invoice) => invoice._id.toString()))
    }
    else{
      changeSelected([])
    }
  }
  function setAllCheckOff() {
    allCheckedRef.current.checked = false;
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.5,
        ease: "anticipate",
        type: "tween",
        duration: 1,
      }}
      id="invoices-table"
    >
      <InvoicesTableHeader
        checkAll={checkAll}
        ref={allCheckedRef}
      ></InvoicesTableHeader>
      <div id="invoice-entries">
        <AnimatePresence>
          <LayoutGroup>
            {data?.map((invoice, index) => {
              return (
                <Invoice
                  key={index + checkAll.toString()}
                  delay={index}
                  client={data[index].client}
                  id={data[index].id}
                  setAllCheckedOff={setAllCheckOff}
                  checked={allChecked}
                  amount={data[index].amount}
                  status={data[index].status}
                  itemId={data[index]._id}
                ></Invoice>
              );
            })}
          </LayoutGroup>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default InvoicesTable;

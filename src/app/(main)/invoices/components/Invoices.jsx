"use client";
import React, { useEffect } from "react";
import InvoicesHeader from "./invoices/InvoicesHeader";
import { motion } from "framer-motion";
import InvoicesTable from "./invoices/InvoicesTable";
import { useInvoicesData } from "../store/InvoicesDataProvider";

function Invoices({ serializedData }) {
  const {updateData} = useInvoicesData();
  useEffect(() => {
    const data = JSON.parse(serializedData)
    updateData(data)
  },[serializedData])
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "anticipate", type: "tween" }}
        id="invoices-container"
        className="invoices-card"
      >
        <InvoicesHeader></InvoicesHeader>
        <InvoicesTable></InvoicesTable>
      </motion.div>
    </>
  );
}

export default Invoices;

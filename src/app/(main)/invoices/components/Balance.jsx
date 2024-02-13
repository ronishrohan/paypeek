"use client"
import { useInvoicesData } from "../store/InvoicesDataProvider";
import React from "react";
import { motion } from "framer-motion";
import Amount from "./cards/Amount";
import ThisWeekInfo from "./cards/ThisWeekInfo";
function Balance() {
  const {balance, thisweek} = useInvoicesData();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7}}
      animate={{ opacity: 1, scale: 1}}
      exit={{opacity: 0}}
      transition={{ duration: 1.1, delay: 0.1, ease: "anticipate", type: "tween" }}
      className="invoices-card"
    >
      <Amount title="Received" amount={balance} ></Amount>
      <ThisWeekInfo amount={thisweek} ></ThisWeekInfo>
    </motion.div>
  );
}

export default Balance;

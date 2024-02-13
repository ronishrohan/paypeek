"use client"
import React from "react";
import { motion } from "framer-motion";
import Amount from "./cards/Amount";
import PendingButtons from "./cards/PendingButtons";
import { useInvoicesData } from "../store/InvoicesDataProvider";
function Pending() {
  const {pending} = useInvoicesData();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 1.4, ease: "anticipate", type: "tween" }}
      className="invoices-card"
    >
      <Amount title="Pending" amount={pending} ></Amount>
      <PendingButtons></PendingButtons>
    </motion.div>
  );
}

export default Pending;

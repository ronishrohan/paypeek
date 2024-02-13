"use client"
import {motion} from "framer-motion";
import Amount from "./cards/Amount";
import { useInvoicesData } from "../store/InvoicesDataProvider";
import React from "react";

function PendingInfo() {
  const {pending} = useInvoicesData();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: "anticipate", type: "tween" }}
      className="invoices-card"
    >
      <Amount title="Pending" amount={pending}></Amount>
    </motion.div>
  );
}

export default PendingInfo;

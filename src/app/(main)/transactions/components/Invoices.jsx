import React from "react";
import { motion } from "framer-motion";

function Invoices() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 1, ease: "anticipate", type: "tween" }}
      id="invoices-container"
      className="invoices-card"
    >
      <div>Transactions</div>
    </motion.div>
  );
}

export default Invoices;

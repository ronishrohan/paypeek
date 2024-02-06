import React from "react";
import { motion } from "framer-motion";
function Balance() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 1.1, delay: 0.2, ease: "anticipate", type: "tween" }}
      className="invoices-card"
    >
      Balance
    </motion.div>
  );
}

export default Balance;

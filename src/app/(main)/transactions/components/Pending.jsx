import React from "react";
import { motion } from "framer-motion";
function Pending() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ duration: 1.4, ease: "anticipate", type: "tween" }}
      className="invoices-card"
    >
      Pending
    </motion.div>
  );
}

export default Pending;

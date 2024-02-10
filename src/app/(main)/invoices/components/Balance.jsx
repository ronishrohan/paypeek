import React from "react";
import { motion } from "framer-motion";
import Amount from "./cards/Amount";
import ThisWeekInfo from "./cards/ThisWeekInfo";
function Balance() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7}}
      animate={{ opacity: 1, scale: 1}}
      exit={{opacity: 0}}
      transition={{ duration: 1.1, delay: 0.3, ease: "anticipate", type: "tween" }}
      className="invoices-card"
    >
      <Amount title="Balance" amount={(956.98).toString()} ></Amount>
      <ThisWeekInfo amount={(95.46).toString()} ></ThisWeekInfo>
    </motion.div>
  );
}

export default Balance;

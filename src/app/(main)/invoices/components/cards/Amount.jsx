"use client";
import React from "react";
import { motion } from "framer-motion";

function Amount({ amount, title }) {
  const split = amount.toString().split(".");
  const left = split[0];
  const right = split[1];
  return (
    <div id="balance-info-container">
      <div id="balance-title">{title}</div>
      <motion.div
        key={amount}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="balance-amount"
      >
        <span>{`\$${left}`}</span>
        <span id="balance-amount-dimmed">{`.${right ? right : 0}`}</span>
      </motion.div>
    </div>
  );
}

export default Amount;

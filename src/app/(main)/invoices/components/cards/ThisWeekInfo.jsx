"use client";
import React from "react";
import { motion } from "framer-motion";
function ThisWeekInfo({ amount }) {
  const date = new Date();
  const date_info = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
  const split = amount.toString().split(".");
  const left = split[0];
  const right = split[1];
  return (
    <div id="week-container">
      <div id="date">{`${date_info.day}/${date_info.month}/${date_info.year}`}</div>
      <div id="week-amount-container">
        <div id="week-title">This week</div>
        <motion.div
          key={amount}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          id="week-amount"
        >
          <span>{`\$${left ? left : 0}`}</span>
          <span id="week-amount-dimmed">{`.${right ? right : 0}`}</span>
        </motion.div>
      </div>
    </div>
  );
}

export default ThisWeekInfo;

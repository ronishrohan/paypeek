"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

function PendingBack() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1.1,
        delay: 0.1,
        ease: "anticipate",
        type: "tween",
      }}
      id="pending-back"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.6,
          ease: "anticipate",
          type: "tween",
        }}
        id="pending-back-button"
      >
        <Link href="/invoices">
          <div>Back</div>
        </Link>
      </motion.button>
    </motion.div>
  );
}

export default PendingBack;

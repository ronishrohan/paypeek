"use client";
import { motion } from "framer-motion";
import { useSelectedContext } from "../../store/SelectedContextProvider";
import Link from "next/link"

import React from "react";

const arrow = (
  <svg viewBox="0 0 49 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 13C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17V13ZM48.4142 16.4142C49.1953 15.6332 49.1953 14.3668 48.4142 13.5858L35.6863 0.857864C34.9052 0.0768156 33.6389 0.0768156 32.8579 0.857864C32.0768 1.63891 32.0768 2.90524 32.8579 3.68629L44.1716 15L32.8579 26.3137C32.0768 27.0948 32.0768 28.3611 32.8579 29.1421C33.6389 29.9232 34.9052 29.9232 35.6863 29.1421L48.4142 16.4142ZM2 17H47V13H2V17Z"
      fill="url(#paint0_linear_34_76)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_34_76"
        x1="82.5"
        y1={0}
        x2={2}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#555555" />
        <stop offset="0.82" stopColor="#686868" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

function PendingButtons({pending}) {
  return (
    <div id="pending-buttons-container">
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1,
          type: "tween",
          ease: "anticipate",
          duration: 0.8,
        }}
        id="pending-button"
      >
        {pending}
      </motion.button>
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          delay: 1.1,
          type: "tween",
          ease: "anticipate",
          duration: 1,
        }}
        id="pending-go"
      >
        <Link href="/invoices/?pending=true" id="pending-go-button" >GO</Link>
        {arrow}
      </motion.button>
    </div>
  );
}

export default PendingButtons;

"use client";
import { motion } from "framer-motion";
import React from "react";

function template({ children }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.6,
          duration: 1,
          type: "tween",
          ease: "anticipate",
        }}
      >test</motion.div>
      {children}
    </>
  );
}

export default template;

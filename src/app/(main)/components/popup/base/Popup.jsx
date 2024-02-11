"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInvoicePopup } from "../InvoicePopupWrapper";
function Popup({ children }) {
  const { handleClose } = useInvoicePopup();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="popup-backdrop"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          scale: 0.95,
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        }}
        transition={{ type: "tween", ease: "anticipate", duration: 0.6 }}
        id="popup-card"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default Popup;

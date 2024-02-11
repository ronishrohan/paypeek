"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useSelectedContext } from "../../store/SelectedContextProvider";
import { icons } from "@/app/utils/icons";
import { useInvoicePopup } from "@/app/(main)/components/popup/InvoicePopupWrapper";

const variants = {
  open: {
    opacity: 1,
  },
  close: {
    opacity: 0,

    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 0.1,
    },
  },
};
function InvoicesHeader() {
  const { handleOpen } = useInvoicePopup();
  const { count } = useSelectedContext();
  return (
    <div id="invoice-header">
      <div>Invoices</div>
      <AnimatePresence mode="wait">
        {count > 0 ? (
          <motion.div
            variants={variants}
            initial="close"
            animate="open"
            exit="close"
            transition={{
              type: "tween",
              ease: "anticipate",
              duration: 0.5,
            }}
            id="header-dustbin"
            key="test"
          >
            {icons.remove}
          </motion.div>
        ) : (
          <motion.button
            key="test2"
            variants={variants}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit="close"
            transition={{
              type: "tween",
              ease: "anticipate",
              duration: 0.4,
            }}
            id="header-new-invoice"
            onClick={handleOpen}
          >
            + New Invoice
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InvoicesHeader;

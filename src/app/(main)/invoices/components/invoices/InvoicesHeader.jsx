"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { useSelectedContext } from "../../store/SelectedContextProvider";
import { icons } from "@/app/utils/icons";
import { useInvoicePopup } from "@/app/(main)/components/popup/InvoicePopupWrapper";
import DeleteInvoices from "../cards/DeleteInvoices";

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
          <DeleteInvoices variants={variants} ></DeleteInvoices>
        ) : (
          <motion.button
            key="invioce-open"
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

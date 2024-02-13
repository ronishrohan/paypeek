"use client";
import React, { useEffect } from "react";
import InvoicesHeader from "./invoices/InvoicesHeader";
import { motion } from "framer-motion";
import InvoicesTable from "./invoices/InvoicesTable";
import { useInvoicesData } from "../store/InvoicesDataProvider";
import { useInvoicePopup } from "../../components/popup/InvoicePopupWrapper";
import { icons } from "@/app/utils/icons";

function Invoices({ serializedData, children }) {
  const {handleOpen} = useInvoicePopup();
  const { updateData } = useInvoicesData();
  useEffect(() => {
    const data = JSON.parse(serializedData);
    updateData(data);
  }, [serializedData]);
  return (
    <>
      {children}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "anticipate", type: "tween" }}
        id="invoices-container"
        className="invoices-card"
      >
        <InvoicesHeader></InvoicesHeader>
        {serializedData != "[]" ? (
          <InvoicesTable></InvoicesTable>
        ) : (
          <div id="empty-invoices">
            <div id="empty-invoices-icon" >{icons.ghost}</div>
            <div id="empty-invoices-text">
              you havent created any invoices yet,
              <span onClick={handleOpen} id="empty-create-text">create one now</span>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}

export default Invoices;

"use client";
import React, { useState } from "react";
import PopupInvoice from "./PopupInvoice";
import { AnimatePresence } from "framer-motion";
import { useContext, createContext } from "react"

const InvoicePopup = createContext();

function InvoicePopupWrapper() {
  let {open} = useInvoicePopup();

  
  return (
    <AnimatePresence>
      {open && <PopupInvoice></PopupInvoice>}
    </AnimatePresence>
  );
}

export function InvoicePopupProvider({ children }) {
  const [open, setOpen] = useState(false)
  function handleClose() {
    setOpen(false);
  }
  function handleOpen(){
    setOpen(true);
  }
  return <InvoicePopup.Provider value={{open, handleClose, handleOpen}} >{children}</InvoicePopup.Provider>;
}

export function useInvoicePopup() {
  const context = useContext(InvoicePopup);
  return context;
}

export default InvoicePopupWrapper;

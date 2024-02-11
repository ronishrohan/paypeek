"use client";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const InvoiceData = createContext();

export function InvoicesDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [balance, setBalance] = useState(1.2);
  function updateData(invoices) {
    setData(invoices);
  }
  useEffect(() => {
    let sum = 0;
    if(data){
      data.map(invoice => {
        if(invoice.status == 1){
          sum += invoice.amount;
        }
      });
      setBalance(sum);
    }
  }, [data])
  return (
    <InvoiceData.Provider value={{data,balance, updateData}}>
      {children}
    </InvoiceData.Provider>
  );
}

export function useInvoicesData() {
  const context = useContext(InvoiceData);
  return context;
}

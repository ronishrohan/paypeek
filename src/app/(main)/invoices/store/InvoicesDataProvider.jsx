"use client";
import { getWeekOfMonth } from "date-fns";
import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";

const InvoiceData = createContext();

export function InvoicesDataProvider({ children }) {
  const [data, setData] = useState(null);
  const [balance, setBalance] = useState(0.0);
  const [thisweek, setThisweek] = useState(0.0);
  const [pending, setPending] = useState(0.0)
  const [pendingCount, setPendingCount] = useState(0);
  function updateData(invoices) {
    setData(invoices);
  }
  useEffect(() => {
    let calcBalance = 0;
    let calcThisweek = 0;
    let calcPending = 0;
    let calcPendingCount = 0;
    if(data){
      data.map(invoice => {
        if(invoice.status == 1){
          calcBalance += invoice.amount;
          if(getWeekOfMonth(new Date()) == getWeekOfMonth(invoice.date)){
            calcThisweek += invoice.amount;
          }
        }
        if(invoice.status == 0){
          calcPending += invoice.amount;
          calcPendingCount += 1;

        }
      });
      setBalance(calcBalance);
      setThisweek(calcThisweek);
      setPending(calcPending);
      setPendingCount(calcPendingCount);
    }
  }, [data])
  return (
    <InvoiceData.Provider value={{data,balance,thisweek,pending,pendingCount, updateData}}>
      {children}
    </InvoiceData.Provider>
  );
}

export function useInvoicesData() {
  const context = useContext(InvoiceData);
  return context;
}

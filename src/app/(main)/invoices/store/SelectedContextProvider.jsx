"use client"
import { sendError } from "next/dist/server/api-utils";
import { createContext, useContext, useEffect, useState } from "react";

import React from "react";

const SelectedContext = createContext(null);

export function SelectedContextProvider({ children }) {
  const [count, setCount] = useState(0);
  function updateCount(item,inc){
    setCount(prev => prev+inc)
  }
  function resetCount(){
    setCount(0)
  }
  useEffect(() => {
    console.log(count)
  }, [count])
  return <SelectedContext.Provider value={{updateCount, resetCount, count}} >{children}</SelectedContext.Provider>;
}

export function useSelectedContext(){
    const context = useContext(SelectedContext);
    return context;
}

"use client"
import { sendError } from "next/dist/server/api-utils";
import { createContext, useContext, useEffect, useInsertionEffect, useState } from "react";

import React from "react";

const SelectedContext = createContext(null);

export function SelectedContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState([]);

  function updateSelected(itemId, mode){
    if(mode == 1){
      setSelected([...selected, itemId])
    }
    else if(mode == -1){
      setSelected(selected.filter(id => id!==itemId));
    }
  }
  function resetSelected(){
    setSelected([])
  }
  useEffect(() => {
    setCount(selected.length)
  }, [selected])
  
  
  
  return <SelectedContext.Provider value={{updateSelected,resetSelected, count, selected}} >{children}</SelectedContext.Provider>;
}

export function useSelectedContext(){
    const context = useContext(SelectedContext);
    return context;
}

import React from "react";
import { SelectedContextProvider } from "../store/SelectedContextProvider";


function Providers({ children }) {
  return (
    <SelectedContextProvider>
      {children}
    </SelectedContextProvider>
  );
}

export default Providers;

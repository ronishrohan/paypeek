import React from "react";
import { SelectedContextProvider } from "../store/SelectedContextProvider";
import { InvoicesDataProvider } from "../store/InvoicesDataProvider";

function Providers({ children }) {
  return (
    <SelectedContextProvider>
      <InvoicesDataProvider>{children}</InvoicesDataProvider>
    </SelectedContextProvider>
  );
}

export default Providers;

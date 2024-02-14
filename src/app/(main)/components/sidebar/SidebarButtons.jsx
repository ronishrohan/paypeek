"use client";
import React from "react";
import SidebarLink from "./SidebarLink";
import SidebarButton from "./SidebarButton";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useInvoicePopup } from "../popup/InvoicePopupWrapper";
import { useInvoicesData } from "../../invoices/store/InvoicesDataProvider";
function SidebarButtons() {
  const {pendingCount} = useInvoicesData();
  const {handleOpen} = useInvoicePopup();
  const pathname = usePathname().substring(1);
  return (
    <div id="sidebar-buttons-container">
      <SidebarLink icon="invoices" title="Invoices">
        {pendingCount>0 && <div id="invoices-pending"><span>{pendingCount}</span></div>}
      </SidebarLink>
      <SidebarLink icon="transactions" title="Transactions"></SidebarLink>
      <SidebarButton
        icon="github"
        title="Github"
        click={() => {
          window.open("https://github.com/ronishrohan");
        }}
      ></SidebarButton>
      <AnimatePresence>
        {pathname === "invoices" || pathname === "transactions" ? (
          <SidebarButton
            icon="new"
            title={`New ${pathname == "invoices" ? "Invoice" : "Transaction"}`}
            id="bottom"
            click={handleOpen}
          ></SidebarButton>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default SidebarButtons;

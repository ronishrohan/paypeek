"use client"
import React from "react";
import SidebarLink from "./SidebarLink";
import SidebarButton from "./SidebarButton";

function SidebarButtons() {
    
  return (
    <div id="sidebar-buttons-container">
      <SidebarLink icon="invoices" title="Invoices">
        <div id="invoices-pending">8</div>
      </SidebarLink>
      <SidebarLink icon="transactions" title="Transactions"></SidebarLink>
      <SidebarButton
        icon="github"
        title="Github"
        click={() => {
          window.open("https://github.com/ronishrohan");
        }}
      ></SidebarButton>
      <SidebarButton icon="new" title="New Invoice" id="bottom"></SidebarButton>
    </div>
  );
}

export default SidebarButtons;

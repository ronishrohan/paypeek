"use client"
import React from "react";
import Profile from "../Profile";
import Logo from "../Logo";
import SidebarButton from "./SidebarButton";
import "./sidebar.scss"

function Sidebar() {
  return <div id="side-bar">
    <div id="side-bar-container" >
        <Logo></Logo>
        <div id="sidebar-buttons-container" >
          <SidebarButton icon="invoices" title="Invoices"><div id="invoices-pending" >8</div></SidebarButton>
          <SidebarButton icon="transactions" title="Transactions"  ></SidebarButton>
          <SidebarButton icon="github" title="Github" click={() => {
            window.open("https://github.com/ronishrohan")
          }} ></SidebarButton>
          <SidebarButton icon="new" title="New Invoice" id="bottom" ></SidebarButton>
          
        </div>
        <Profile></Profile>
    </div>
  </div>;
}

export default Sidebar;

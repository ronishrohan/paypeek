"use client"
import React from "react";
import Profile from "../Profile";
import Logo from "../Logo";
import SidebarButton from "./SidebarLink";
import SidebarButtons from "./SidebarButtons";
import "./sidebar.scss"

function Sidebar() {
  return <div id="side-bar">
    <div id="side-bar-container" >
        <Logo></Logo>
        <SidebarButtons></SidebarButtons>
        <Profile></Profile>
    </div>
  </div>;
}

export default Sidebar;

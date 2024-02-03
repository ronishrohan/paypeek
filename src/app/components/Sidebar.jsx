import React from "react";
import Profile from "./Profile";
import Logo from "./Logo";

function Sidebar() {
  return <div id="side-bar">
    <div id="side-bar-container" >
        <Logo></Logo>
        <Profile></Profile>
    </div>
  </div>;
}

export default Sidebar;

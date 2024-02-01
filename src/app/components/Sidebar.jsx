import React from "react";
import Profile from "./Profile";
import "./styles.css"

function Sidebar() {
  return <div id="side-bar">
    <div id="side-bar-container" >
        <Profile></Profile>
    </div>
  </div>;
}

export default Sidebar;

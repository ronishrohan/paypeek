"use client";
import React from "react";
import Profile from "./Profile";
import Logo from "./Logo";
import SidebarButton from "./SidebarLink";
import SidebarButtons from "./SidebarButtons";
import "./sidebar.scss";
import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity:1,
        x: 0
      }}
      transition={{
        duration:1.2,
        ease: "anticipate"
      }}
      id="side-bar"
    >
      <div id="side-bar-container">
        <Logo></Logo>
        <SidebarButtons></SidebarButtons>
        <Profile></Profile>
      </div>
    </motion.div>
  );
}

export default Sidebar;

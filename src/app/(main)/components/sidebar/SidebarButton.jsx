"use client";
import React from "react";
import { icons } from "@/app/utils/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

function SidebarButton({ icon, title, children, click, ...rest }) {
  const pathname = usePathname().substring(1);

  return (
    <motion.button
      initial = {{opacity:0, y: 30}}
      animate = {{opacity:1, y: 0}}
      exit = {{opacity: 0, y: 40}}
      transition={{
        duration: 0.85,
        type: "tween",
        ease: "anticipate"
      }}
      onClick={click}
      className={`sidebar-button`}
      id={`${icon === pathname ? "active" : "inactive"}`}
      {...rest}
    >
      <div id="sidebar-button-icon">{icons[icon]}</div>
      <div id="sidebar-button-text">{title}</div>
      {children}
    </motion.button>
  );
}

export default SidebarButton;

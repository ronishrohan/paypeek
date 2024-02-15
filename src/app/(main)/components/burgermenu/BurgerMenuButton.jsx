"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import React from "react";
import { usePathname } from "next/navigation";

function BurgerMenuButton({ children, link }) {
  const pathname = usePathname().substring(1);
  console.log(pathname);
  return (
    <a
      id="burger-menu-link"
      className={children.toLowerCase() === pathname ? "link-active" : ""}
      href={link}
    >
      {children}
      <AnimatePresence>
        {children.toLowerCase() === pathname && (
          <motion.div
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            exit={{opacity: 0, width: "0%"}}
            id="link-underline"
          ></motion.div>
        )}
      </AnimatePresence>
    </a>
  );
}

export default BurgerMenuButton;

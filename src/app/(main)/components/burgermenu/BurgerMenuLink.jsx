"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import React from "react";
import { usePathname } from "next/navigation";

function BurgerMenuLink({ children }) {
  const pathname = usePathname().substring(1);
  console.log(pathname);
  return (
    <Link
      id="burger-menu-link"
      className={children.toLowerCase() === pathname ? "link-active" : ""}
      href={`/${children.toLowerCase()}`}
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
    </Link>
  );
}

export default BurgerMenuLink;

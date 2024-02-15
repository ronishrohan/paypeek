"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { icons } from "@/app/utils/icons";

function BurgerMenuLink({ children }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname().substring(1);
  console.log(pathname);
  useEffect(() => {
    setLoading(false)
  }, [pathname])
  return (
    <Link
      onClick={() => setLoading(true)}
      id="burger-menu-link"
      className={children.toLowerCase() === pathname ? "link-active" : ""}
      href={`/${children.toLowerCase()}`}
    >
      {loading ? <span className="spinning">{icons.loading}</span> : <span>{children}</span>}
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

"use client";
import React, { useEffect, useState } from "react";
import { icons } from "@/app/utils/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function SidebarLink({ icon, title, children, click, ...rest }) {
  const pathname = usePathname().substring(1);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    setLoading(false);
    setTimer(0);
  }, [pathname]);
  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    }
  }, [loading]);
  useEffect(() => {
    console.log(timer);
  }, [timer]);
  return (
    <Link
      href={`/${icon}`}
      onClick={() => {
        if (icon != pathname) {
          setLoading(true);
        }
      }}
      className={`sidebar-button sidebar-link`}
      id={`${icon === pathname ? "active" : "inactive"}`}
      {...rest}
    >
      <AnimatePresence>
        <div id="sidebar-button-icon">
          {loading && timer > 100 ? (
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{opacity: 0}}
              transition={{type:"tween"}}
              id="sidebar-loading-icon"
            >
              {icons["loading"]}
            </motion.span>
          ) : (
            icons[icon]
          )}
        </div>
      </AnimatePresence>
      <div id="sidebar-button-text">{title}</div>

      {children}
    </Link>
  );
}

export default SidebarLink;

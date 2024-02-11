"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { icons } from "@/app/utils/icons";
import { signIn } from "next-auth/react";

function Button({ children }) {
  let [loading, setLoading] = useState(false);


  function handleLogin(){
    signIn(children.toLowerCase(), { callbackUrl: "/home" });
  }
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.6,
        duration: 1,
        type: "tween",
        ease: "anticipate",
      }}
      onClick={() => {
        setLoading(true);
        handleLogin();
      }}
      id="login-button"
    >
      {loading ? (
        <span id="sidebar-loading-icon">{icons.loading}</span>
      ) : (
        <>
          <div>
            <span id="login-google">{children}</span>
          </div>
          <div id="login-icon">{icons[children.toLowerCase()]}</div>
        </>
      )}
    </motion.button>
  );
}

export default Button;

"use client";
import { motion } from "framer-motion";
import React from "react";
import { icons } from "@/app/utils/icons";
function LoginPage() {
  return (
    <div id="login-page-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "anticipate", type: "tween", duration: 1.2 }}
        id="login-card"
      >
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1,type: "tween", ease: "anticipate" }}
          id="login-button"
        >
          <div>
            <span>login with </span>
            <span id="login-google">google</span>
          </div>
          <div id="login-icon">{icons.link}</div>
        </motion.button>
      </motion.div>
    </div>
  );
}

export default LoginPage;

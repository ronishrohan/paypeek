"use client";
import { motion } from "framer-motion";
import React from "react";
import LoginButton from "./components/LoginButton";
function LoginPage() {
  return (
    <div id="login-page-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "anticipate", type: "tween", duration: 1.2, delay: 0.3 }}
        id="login-card"
      >
        <div>login with</div>
       <LoginButton></LoginButton>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 1,
            type: "tween",
            ease: "anticipate",
          }}
          id="login-message"
        >
          
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoginPage;

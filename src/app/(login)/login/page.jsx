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
          because thats all we have for now :(
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoginPage;

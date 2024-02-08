"use client";
import { motion } from "framer-motion";
import React from "react";
import { icons } from "@/app/utils/icons";
import {signIn} from "next-auth/react"
function LoginButton() {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 1,
          type: "tween",
          ease: "anticipate",
        }}
        onClick={() => signIn("google", {callbackUrl: "/home"})}
        id="login-button"
      >
        <div>
          <span>login with </span>
          <span id="login-google">google</span>
        </div>
        <div id="login-icon">{icons.link}</div>
      </motion.button>
    </>
  );
}

export default LoginButton;

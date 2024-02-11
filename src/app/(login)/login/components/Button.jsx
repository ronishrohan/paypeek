"use client"
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { icons } from "@/app/utils/icons";
import {signIn} from "next-auth/react"

function Button({children}) {
  return (
    <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y : 0 }}
        transition={{
          delay: 0.2 + (Math.random()),
          duration: 1,
          type: "tween",
          ease: "anticipate",
        }}
        onClick={() => signIn(children.toLowerCase(), {callbackUrl: "/home"})}
        id="login-button"
      >
        <div>
          <span id="login-google">{children}</span>
        </div>
        <div id="login-icon">{icons[children.toLowerCase()]}</div>
      </motion.button>
  )
}

export default Button
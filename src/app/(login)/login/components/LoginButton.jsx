"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { icons } from "@/app/utils/icons";
import { signIn } from "next-auth/react";
import Button from "./Button";
function LoginButton() {
  return (
    <AnimatePresence>
      <div id="login-buttons-container">
        <Button>Google</Button>
        <Button>Github</Button>
        <Button>Discord</Button>
        <Button>Reddit</Button>
      </div>
    </AnimatePresence>
  );
}

export default LoginButton;

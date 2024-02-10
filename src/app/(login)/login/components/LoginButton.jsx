"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { icons } from "@/app/utils/icons";
import {signIn} from "next-auth/react"
import Button from "./Button";
function LoginButton() {
  return (
    <AnimatePresence>
      <Button>google</Button>
      <Button>github</Button>
    </AnimatePresence>
  );
}

export default LoginButton;

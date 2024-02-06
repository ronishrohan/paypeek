"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
let font = ["Roboto", "Arial"]
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2,delay: 0.1, ease: "anticipate", type: "tween" }}
      id="home-container"
    >
      <motion.div id="home-title">
        Welcome to <span id="home-red">pay</span>
        <span id="home-thick">peek</span>
      </motion.div>
      <div id="home-content">
        go to <Link href="/invoices">invoices</Link> or{" "}
        <Link href="/transactions">transactions</Link> to start your journey
      </div>
    </motion.div>
  );
}

export default Home;

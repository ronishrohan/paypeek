"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Template({ children }) {
    const [timer, setTimer] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setTimer(true)
        }, (300));
    })
  return (
    <>
      {timer && children}
    </>
  );
}

export default Template;

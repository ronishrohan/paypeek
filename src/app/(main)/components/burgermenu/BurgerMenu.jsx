"use client";
import React, { useState } from "react";
import { icons } from "@/app/utils/icons";
import { AnimatePresence, motion } from "framer-motion";
import BurgerMenuContainer from "./BurgerMenuContainer";

function BurgerMenu() {
  const [opened, setOpened] = useState(false);
  function handleClose() {
    setOpened(false);
  }
  return (
    <>
      <motion.button
        initial={{opacity: 0, scale: 0.7}}
        animate={{opacity: 1, scale :1}}
        transition={{
          delay: 1,
          duration: 0.6,
          type: "tween",
          ease: "anticipate"
        }}
        id="burger-menu-button"
        onClick={() => setOpened((prev) => !prev)}
      >
        <AnimatePresence mode="popLayout">
          {opened ? (
            <motion.span
              key="open"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              {icons.close}
            </motion.span>
          ) : (
            <motion.span
              key="close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 1 }}
            >
              {icons.burgermenu}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {opened && (
          <BurgerMenuContainer close={handleClose}></BurgerMenuContainer>
        )}
      </AnimatePresence>
    </>
  );
}

export default BurgerMenu;

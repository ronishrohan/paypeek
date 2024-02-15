import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BurgerMenuLink from "./BurgerMenuLink";
import BurgerMenuButton from "./BurgerMenuButton";
import BurgerMenuProfile from "./BurgerMenuProfile";
function BurgerMenuContainer({ close }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="burger-menu-backdrop"
        onClick={close}
      ></motion.div>
      <motion.div
        initial={{ opacity: 1, x: "100%", borderRadius: "50%" }}
        animate={{ opacity: 1, x: 0, borderRadius: "0%" }}
        exit={{
          opacity: 1,
          x: "100%",
          borderRadius: "0%",
          transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut",
          },
        }}
        transition={{
          duration: 0.8,
          type: "tween",
          ease: "anticipate",
        }}
        id="burger-menu-container"
      >
        <div id="burger-menu-links">
            <BurgerMenuLink>Home</BurgerMenuLink>
          <BurgerMenuLink>Invoices</BurgerMenuLink>
          <BurgerMenuLink>Transactions</BurgerMenuLink>
          <BurgerMenuButton link="https://github.com/ronishrohan">
            Github
          </BurgerMenuButton>
        </div>
        <div id="burger-menu-profile">
          <BurgerMenuProfile></BurgerMenuProfile>
        </div>
      </motion.div>
    </>
  );
}

export default BurgerMenuContainer;

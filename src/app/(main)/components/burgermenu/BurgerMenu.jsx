"use client"
import React, { useState } from "react";
import { icons } from "@/app/utils/icons";
import {AnimatePresence, motion} from "framer-motion"
import BurgerMenuContainer from "./BurgerMenuContainer";

function BurgerMenu() {
  const [opened, setOpened] = useState(false)
  function handleClose(){
    setOpened(false)
  }
  return (
    <>
      <button id="burger-menu-button" onClick={() => setOpened(prev => !prev)} >{opened ? icons.close : icons.burgermenu}</button>
      <AnimatePresence>
        {opened && <BurgerMenuContainer close={handleClose} ></BurgerMenuContainer>}
      </AnimatePresence>
    </>
  );
}

export default BurgerMenu;
 
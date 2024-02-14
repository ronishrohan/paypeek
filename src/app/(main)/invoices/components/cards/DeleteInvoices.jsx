"use client"
import {motion} from "framer-motion";
import React from "react";
import { icons } from "@/app/utils/icons";
import { useTransition } from "react";
import { deleteInvoices } from "@/app/(main)/utils/deleteInvoices";
import { useSelectedContext } from "../../store/SelectedContextProvider";

function DeleteInvoices({variants}) {
    const {selected, resetSelected} = useSelectedContext();
    const [pending, startTransition] = useTransition();
    function handleClick(){
        startTransition(async ( ) => {
            await deleteInvoices(selected);
            resetSelected();
        })
    }
  return (
    <motion.button
    onClick={handleClick}
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      }}
      id="header-dustbin"
      key="invoice-new"
      className={pending? "pending" : ""}
    >
      {pending ? <span className="spinning" >{icons.loading}</span> : icons.remove}
    </motion.button>
  );
}

export default DeleteInvoices;

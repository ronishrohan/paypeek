"use client";
import React from "react";
import { updateInvoice } from "@/app/(main)/utils/updateInvoice";
const states = ["Pending", "Paid", "On Hold"];
import { useTransition } from "react";
import { icons } from "@/app/utils/icons";
import { motion, AnimatePresence } from "framer-motion";

function ChangeStatus({ status, id }) {
  const [pending, startTransition] = useTransition();
  return (
    <button
      disabled={pending}
      onClick={(e) => {
        e.stopPropagation();
        startTransition(async () => {
          await updateInvoice(id);
        });
      }}
      className={` status-button ${states[status]
        .toLowerCase()
        .replace(" ", "-")}-button`}
    >
      <AnimatePresence>
        {pending ? (
          <span className="spinning">{icons.loading}</span>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.3
            }}
          >
            {states[status]}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ChangeStatus;

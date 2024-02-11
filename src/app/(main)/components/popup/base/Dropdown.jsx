"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const states = ["Pending", "Paid", "On Hold"];

function Dropdown() {
  let [state, setState] = useState(0);
  function updateState() {
    setState((prev) => {
      if (prev === 2) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }
  return (
    <button
    type="button"
      onClick={() => updateState()}
      id="dropdown-button"
      className={states[state].toLowerCase().replace(" ", "-")}
    >
      {states[state]}
    </button>
  );
}

export default Dropdown;

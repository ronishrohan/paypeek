"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = Array.apply(null, { length: 10 });

function Home() {
  let [pos, setPos] = useState([0, 0]);
  let [scale, setScale] = useState(0);
  function handleMouseMove(e) {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - (rect.right + rect.left) / 2;
    let y = e.clientY - (rect.top + rect.bottom) / 2;
    setPos((prev) => {
      setScale(Math.abs(x - prev[0]));
      return [x, y];
    });
  }
  useEffect(() => {
    // console.log(pos)
  }, [pos]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        ease: "anticipate",
        duration: 1.6
      }}
      id="home-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos([0, 0])}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ x: pos[0], y: pos[1], scale: 1 }}
        transition={{
          scale: {
            delay: 1.2
          },
          type: "spring",
          stiffness: 900,
          damping: 30
        }}
        id="home-title"
      >
        Hello :)
      </motion.div>
    </motion.div>
  );
}

export default Home;

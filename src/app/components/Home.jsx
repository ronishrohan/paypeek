import React from "react";
import { motion } from "framer-motion";
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{duration: 1.2, ease: "anticipate", type: "tween"}}
      id="home-container"
    >
      <div id="home-title">Hello</div>
      <div></div>
    </motion.div>
  );
}

export default Home;

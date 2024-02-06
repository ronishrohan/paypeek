"use client"
import React from 'react'
import {motion} from "framer-motion"
function loading() {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}  id='loading-screen' >loading</motion.div>
  )
}

export default loading
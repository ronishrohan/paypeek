"use client"
import React from 'react'
import {AnimatePresence} from "framer-motion";
import { SessionProvider } from 'next-auth/react'
function Providers({children}) {
  return (
    <SessionProvider><AnimatePresence>{children}</AnimatePresence></SessionProvider>
  )
}

export default Providers
import React from 'react'
import Providers from './components/Providers'

export const metadata = {
  title: "Invoices",
  description: "Your Invoices"
}

async function RootLayout({children}) {
  
  return (
    <Providers>{children}</Providers>
  )
}

export default RootLayout
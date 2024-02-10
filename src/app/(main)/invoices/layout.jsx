import React from 'react'
import { SelectedContextProvider } from './store/SelectedContextProvider'

export const metadata = {
  title: "Invoices",
  description: "Your Invoices"
}

function RootLayout({children}) {
  return (
    <SelectedContextProvider>{children}</SelectedContextProvider>
  )
}

export default RootLayout
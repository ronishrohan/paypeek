import React from 'react'
import { InvoicePopupProvider } from './popup/InvoicePopupWrapper'

function Providers({children}) {
  return (
    <InvoicePopupProvider>{children}</InvoicePopupProvider>
  )
}

export default Providers
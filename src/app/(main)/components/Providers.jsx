import React from 'react'
import { InvoicePopupProvider } from './popup/InvoicePopupWrapper'
import { InvoicesDataProvider } from '../invoices/store/InvoicesDataProvider'

function Providers({children}) {
  return (
    <InvoicePopupProvider><InvoicesDataProvider>{children}</InvoicesDataProvider></InvoicePopupProvider>
  )
}

export default Providers
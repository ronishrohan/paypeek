import React from 'react'

function InvoicesTableHeader() {
  return (
    <div id='invoices-table-header' >
        <input id='invoices-table-checkbox' type="checkbox" />
        <div className='invoices-column' id='invoices-table-left'  >INVOICE</div>
        <div className='invoices-column' id='invoices-table-left' >CLIENT</div>
        <div className='invoices-column' id='invoices-table-right' >AMOUNT</div>
        <div className='invoices-column' >STATUS</div>
    </div>
  )
}

export default InvoicesTableHeader
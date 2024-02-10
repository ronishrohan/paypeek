import React from 'react'
import InvoicesTableHeader from './InvoicesTableHeader'
import Invoice from './Invoice'

const invoices = [1,2,3,4]

function InvoicesTable() {
  return (
    <div id='invoices-table'>
        <InvoicesTableHeader></InvoicesTableHeader>
        <div id='invoice-entries' >
            {invoices.map((invoice, index) => {
                return <Invoice key={index} id={invoice} ></Invoice>
            })}
        </div>
    </div>
  )
}

export default InvoicesTable
import React from 'react'
import Balance from './Balance'
import Invoices from './Invoices'
import Pending from './Pending'

function GridContainer() {
  return (
    <div id='invoices-grid-container' >
        <div id='top-grid' >
            <Balance></Balance>
            <Pending></Pending>
        </div>
        <Invoices></Invoices>
    </div>
  )
}

export default GridContainer
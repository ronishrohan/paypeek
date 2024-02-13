import React from 'react'
import { getInvoices } from '../lib/getInvoices'
async function Test() {
    const data = await getInvoices()
    console.log(data)
  return (
    <div>
        {data.map((_, index) => <div key={index} >test</div>)}
    </div>
  )
}

export default Test
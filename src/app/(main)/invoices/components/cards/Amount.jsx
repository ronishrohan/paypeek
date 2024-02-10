import React from 'react'

function Amount({amount, title}) {
  const split = amount.split('.');
  const left = split[0];
  const right = split[1];
  return (
    <div id='balance-info-container' >
      <div id='balance-title' >{title}</div>
      <div id='balance-amount' ><span>{`\$${left}`}</span><span id='balance-amount-dimmed' >{`.${right}`}</span></div>
    </div>
  )
}

export default Amount
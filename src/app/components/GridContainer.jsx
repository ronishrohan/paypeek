import React from 'react'
import Sidebar from './Sidebar'

function GridContainer({children}) {
  return (
    <div id='grid-container' >
        <Sidebar></Sidebar>
        <div id='content'>
            {children}
        </div>
    </div>
  )
}

export default GridContainer
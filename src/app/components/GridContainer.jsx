import React from 'react'
import Sidebar from './sidebar/Sidebar'
import "@/app/styles/styles.scss"

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
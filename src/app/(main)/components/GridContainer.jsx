import React from 'react'
import Sidebar from './sidebar/Sidebar'
import "@/app/styles/styles.scss"
import BurgerMenu from './burgermenu/BurgerMenu'

function GridContainer({children}) {
  return (
    <div id='grid-container' >
      <BurgerMenu></BurgerMenu>
        <Sidebar></Sidebar>
        <div id='content'>
            {children}
        </div>
    </div>
  )
}

export default GridContainer
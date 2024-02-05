"use client";
import React from 'react'
import { icons } from '@/app/utils/icons'
function SidebarButton({icon, title,children, click}) {
  return (
    <button id='sidebar-button' onClick={click} >
        <div id='sidebar-button-icon' >
            {icons[icon]}
        </div>
        <div id='sidebar-button-text' >{title}</div>
        {children}
    </button>
  )
}

export default SidebarButton
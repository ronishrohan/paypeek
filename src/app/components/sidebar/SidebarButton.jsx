"use client";
import React from 'react'
import { icons } from '@/app/utils/icons'
function SidebarButton({icon, title,children, click, ...rest}) {
  return (
    <button className='sidebar-button' onClick={click} {...rest} >
        <div id='sidebar-button-icon' >
            {icons[icon]}
        </div>
        <div id='sidebar-button-text' >{title}</div>
        {children}
    </button>
  )
}

export default SidebarButton
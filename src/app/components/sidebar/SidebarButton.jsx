"use client";
import React from 'react'
import { icons } from '@/app/utils/icons'
import { usePathname } from "next/navigation";
import Link from "next/link"

function SidebarButton({icon, title,children, click, ...rest}) {
  const pathname = usePathname().substring(1)


  return (
    <button onClick={click} className={`sidebar-button`} id={`${icon===pathname ? "active" : "inactive"}`}  {...rest} >
        <div id='sidebar-button-icon' >
            {icons[icon]}
        </div>
        <div id='sidebar-button-text' >{title}</div>
        {children}
    </button>
  )
}

export default SidebarButton
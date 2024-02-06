"use client";
import React from 'react'
import { icons } from '@/app/utils/icons'
import { usePathname } from "next/navigation";
import Link from "next/link"

function SidebarLink({icon, title,children, click, ...rest}) {
  const pathname = usePathname().substring(1)


  return (
    <Link  href={`/${icon}`}  className={`sidebar-button sidebar-link`} id={`${icon===pathname ? "active" : "inactive"}`}  {...rest} >
        <div id='sidebar-button-icon' >
            {icons[icon]}
        </div>
        <div id='sidebar-button-text' >{title}</div>
        {children}
    </Link>
  )
}

export default SidebarLink
"use client"
import React from 'react'
import Logout from './Logout'
import { useSession } from 'next-auth/react'

function Profile() {
  const session = useSession();
  console.log(session)
  
  return (
    <div id='profile-container' >
        <div id='profile-picture' >
          <img src={session.data?.user?.image} alt="" />
        </div>
        <div id='profile-details' >
          <div id='profile-name' title="you've got a nice name :)" >
            {session.data?.user?.name}
          </div>
          <div id='profile-title' >
            {session.data?.user?.email}
          </div>
        </div>
        <Logout></Logout>
    </div>
  )
}

export default Profile
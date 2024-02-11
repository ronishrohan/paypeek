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
          <img src={session.data?.user?.image ? session.data?.user?.image : "https://cdn.discordapp.com/attachments/976406861014257724/1201953270478934096/image.png?ex=65d4ebb6&is=65c276b6&hm=2d304f459b6fea0c6fd3f19ea7d0fabf97c964428b4bb854d6a7953c0023d13e&"} alt="" />
        </div>
        <div id='profile-details' >
          <div id='profile-name' title="you've got a nice name :)" >
            {session.data?.user?.name}
          </div>
          <div id='profile-title' >
            {session.data?.user?.email ? session.data?.user?.email : "User"}
          </div>
        </div>
        <Logout></Logout>
    </div>
  )
}

export default Profile
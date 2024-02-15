import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { icons } from '@/app/utils/icons';

function BurgerMenuProfile() {
    const session = useSession();
  return <>
    <div id='profile-image-containaer' >
        <img src={session.data?.user?.image} alt="" />
    </div>
    <div id='burger-profile-details' >
        <div id='burger-profile-name' >{session.data?.user?.name}</div>
        <div id='burger-profile-email' >{session.data?.user?.email}</div>
    </div>
    <div id='burger-logout-button' >
        <button onClick={signOut} >{icons.logout}</button>
    </div>
  </>
}

export default BurgerMenuProfile
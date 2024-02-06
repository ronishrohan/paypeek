import React from 'react'
import Logout from './Logout'

function Profile() {
  return (
    <div id='profile-container' >
        <div id='profile-picture' >
          <img src="https://qph.cf2.quoracdn.net/main-thumb-914101296-200-aiyazzwpaqfgkkdsuirhjcnwfenlyfph.jpeg" alt="" />
        </div>
        <div id='profile-details' >
          <div id='profile-name' title="you've got a nice name :)" >
            Ronish Rohan
          </div>
          <div id='profile-title' >
            Freelancer
          </div>
        </div>
        <Logout></Logout>
    </div>
  )
}

export default Profile
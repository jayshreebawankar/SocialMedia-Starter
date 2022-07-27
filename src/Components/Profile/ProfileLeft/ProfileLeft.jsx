import React from 'react';
import FollowersCard from '../../Home/ProfileSide/FollowersCard/FollowersCard';
import InfoCard from './InfoCard/InfoCard';
import LogoSearch from '../../Home/ProfileSide/LogoSearch/LogoSearch';
import '../../Home/ProfileSide/ProfileSide.css'

const ProfileLeft = () => {
  return (
    <div className='profile-side'>
      <LogoSearch/>
      <InfoCard/> 
      <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
import './ProfileSide.css';
import LogoSearch from './LogoSearch/LogoSearch';
import ProfileCard from './ProfileCard/ProfileCard';
import FollowersCard from './FollowersCard/FollowersCard.jsx';

const ProfileSide = () => {
  return (
    <div className='profile-side'>
        <LogoSearch/>
        <ProfileCard/> 
        <FollowersCard/>
    </div>   
  )
}

export default ProfileSide
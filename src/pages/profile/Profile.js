import './Profile.css';
import ProfileLeft from '../../Components/Profile/ProfileLeft/ProfileLeft.jsx'
import ProfileCard from '../../Components/Home/ProfileSide/ProfileCard/ProfileCard';
import PostSide from '../../Components/Home/PostSide/PostSide';
import RightSide from '../../Components/Home/RightSide/RightSide';

const Profile = () => {
  return (
    <div className='Profile'>
        <ProfileLeft/>

        <div className='profile-center'>
          <ProfileCard/>
          <PostSide/>
        </div>

        <RightSide/>
    </div>
  )
}

export default Profile
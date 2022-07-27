import React from 'react';
import ProfileSide from '../../Components/Home/ProfileSide/ProfileSide';
import PostSide from '../../Components/Home/PostSide/PostSide';
import RightSide from '../../Components/Home/RightSide/RightSide.jsx';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home;
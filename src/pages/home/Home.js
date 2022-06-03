import React from 'react';
import ProfileSide from '../../Components/ProfileSide/ProfileSide';
import PostSide from '../../Components/PostSide/PostSide';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <ProfileSide/>
        <PostSide/>
        <div className='right-side'> Rightside</div>
    </div>
  )
}

export default Home;
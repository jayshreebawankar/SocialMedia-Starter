import React from 'react';
import './RightSide.css';
import Home from '../../../img/home.png';
import Comment from '../../../img/comment.png';
import Notify from '../../../img/noti.png';
import {UilSetting} from '@iconscout/react-unicons';
import TrendCard from '../RightSide/TrendCard/TrednCard';
import ShareModal from './ShareModal/ShareModal.js'
import { useState } from 'react';

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className='RightSide'>
        <div className='navIcons'> 
             <img src={Home} alt='home image'></img>
             <UilSetting/>
             <img src={Notify} alt='notification image'></img>
             <img src={Comment} alt='Comment image'></img>
        </div>

        <TrendCard/>

        <button className='button share-button' onClick={()=>{setModalOpened(true)}}>
            Share
        </button>

        <ShareModal 
              modalOpened={modalOpened}
              setModalOpened= {setModalOpened}
        />

    </div>
  )
}

export default RightSide
import React from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import ProfileModal from './ProfileModal/ProfileModal.jsx';
import { useState } from 'react';

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    
    return (
    <div className='InfoCard'>
        <div className='InfoHead'>
            <h4>Your Info </h4>
            <div>
                <UilPen width='2rem' height="1.2rem" onClick={()=>setModalOpened(true)}/>

                <ProfileModal 
                    modalOpened={modalOpened}
                    setModalOpened={setModalOpened}/>
            </div>
        </div>

        <div className='info'>
            <span><b>Status </b></span>
            <span>Single</span>
        </div>

        <div className='info'>
            <span><b>Lives In </b></span>
            <span>Nagpur</span>
        </div>

        <div className='info'>
            <span><b>Works As a </b></span>
            <span>Software Developer</span>
        </div>

        <button className='button logout-button'>
            Log Out
        </button>
    </div>
  )
}

export default InfoCard
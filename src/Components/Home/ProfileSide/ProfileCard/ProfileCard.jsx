import CoverImg from '../../../../img/cover.jpg';
import ProfileImg from '../../../../img/profileImg.jpg';       
import './ProfileCard.css';    

const  ProfileCard = () => {

  var ProfilePage = true;

  return (
    <div className='ProfileCard'>
        <div className='ProfileImage'>
            <img src={CoverImg} alt='CoverImage'/>
            <img src={ProfileImg} alt='ProfileImg'/>        
        </div>

        <div className='profileName'>
            <span> Jayshree Bawankar </span>
            <span> MERN Stack Developer </span>
        </div>

        <hr/>

        <div className='follow-status'>
           
            <div className='follow'> 
              <span>102</span>
              <span>Following</span>
            </div>
           
            <span className='vl'></span>
           
            <div className='follow'>
              <span>9342</span>
              <span>Followers</span>
            </div>   

            {ProfilePage && (
              <>
                <span className='vl'>
                </span>

                <div className='follow'>
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}    
        
        </div>
        <hr/>

        {/* {ProfilePage ?'':<span>My Profile</span>} */}
        <span>My Profile</span>

    </div>
  )
}

export default ProfileCard;
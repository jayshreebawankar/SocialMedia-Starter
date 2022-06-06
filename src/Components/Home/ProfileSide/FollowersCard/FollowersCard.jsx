import './FollowersCard.css';
import {Followers} from '../../../../Data/FollowersData'

const FollowersCard = () => {
  return (
    <div className='FollowersCard'>
        <h3>
            Who is following you...
        </h3>

        {Followers.map((followers, id)=>{
            return(
                <div className='followers'>
                    <div>
                        <img src={followers.img} alt='followersImg'/>
                        <div className='followersName'>
                            <span className='name'>{followers.name}</span>
                            <span>@{followers.username}</span>
                        </div>
                    </div>
                    <button className='button followButton'>
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
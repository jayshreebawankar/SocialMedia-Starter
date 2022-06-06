import './NewPost.css';
import Heart from '../../../../../img/like.png';   
import Comment from '../../../../../img/comment.png';
import Share from '../../../../../img/share.png';
import NotLike from '../../../../../img/notlike.png';


const NewPost = ({data}) => {
  return (
    <div className='NewPost'>
        <img src={data.img} alt='posted image'/>

        <div className='postReact'>
            <img src={data.liked ? Heart : NotLike} alt='liked img'/>
            <img src={Comment} alt="comment"/>
            <img src={Share} alt="share "/>
        </div>

        <span style={{color: 'var(--gray)', fontSize:'13px'}}>{data.likes} likes</span>

        <div>
            <span><b>{data.name}</b></span><br/>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}

export default NewPost
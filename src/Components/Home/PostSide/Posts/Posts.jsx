import './Posts.css';
import {postData} from '../../../../Data/PostData';
import NewPost from '../Posts/NewPost/NewPost.jsx'

const Posts = () => {
  return (
    <div className='Posts'>
        {
            postData.map((post, id)=>{
                return <NewPost data={post} id={id}/>
            })   
        }
    </div>
  )
}
export default Posts
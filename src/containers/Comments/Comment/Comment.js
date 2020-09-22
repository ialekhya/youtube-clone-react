import React from 'react'
import Rating from '../../../components/Rating/Rating'
import {Button} from 'semantic-ui-react'
import './Comment.css'
function Comment() {
    return (
        <div className='comment'>
        <img className='user-image' src='http://via.placeholder.com/48x48'/>
         <div>
          <div className='user-name'>User name</div>
          <span>Comment text</span>
          <div className='comment-actions'>
            <Rating likeCount={10} dislikeCount={1}/> 
            <Button size='mini' compact>REPLY</Button>
          </div>
        </div>
      </div>
    )
}

export default Comment

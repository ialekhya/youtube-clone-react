import React from 'react'
import './Rating.css'
import {Progress} from "semantic-ui-react";

function Rating(props) {
    let progress = null;
    console.log(props.likeCount,props.dislikeCount)
    if (props.likeCount && props.dislikeCount) 
    {
        const percent = 100 * (props.likeCount / (props.likeCount + props.dislikeCount));
        progress = <Progress className='progress' percent={percent} size='tiny'/>;
    }
    return (
        <div className="rating">
            <div className="thumbs-up">
               <i class="far fa-thumbs-up"></i>
                 <span>{props.likeCount}</span>
            </div>
            <div className="thumbs-down">
                 <i class="far fa-thumbs-down"></i>
                 <span>{props.dislikeCount}</span>  
            </div>
            {progress}    
        </div>
    )
}

export default Rating
       
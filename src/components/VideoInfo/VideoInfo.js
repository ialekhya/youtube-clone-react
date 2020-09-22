import React from 'react'
import {useEffect, useState} from 'react';
import {Image,Button} from 'semantic-ui-react'
import './VideoInfo.css'
export function VideoInfo (props) {
    console.log("Helloq")   
    const [collapsed, setcollapsed] = useState(true);

     const onToggleCollapseButtonClick = () =>{
       setcollapsed(!collapsed)
       console.log(collapsed)
     }

     const getConfig=() => {
        let descriptionTextClass = 'collapsed';
        let buttonTitle = 'Show More';
        if (!collapsed) {
          descriptionTextClass = 'expanded';
          buttonTitle = 'Show Less';
        }
        return {
          descriptionTextClass,
          buttonTitle
        };
     }
    
    const {descriptionTextClass, buttonTitle} = getConfig(); 
    return (
    <div className='video-info-box'>
       <Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
       <div className="video-info">
           <div className='channel-name'>Channel Name</div>
           <div className='video-publication-date'>Thu 24, 2017</div>
       </div>
       <Button color='youtube' className="subscribe">91.5K Subscribe</Button>
       <div className="video-description">
         <div className={descriptionTextClass}>
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
          <p>Paragraph 4</p>
          <p>Paragraph 5</p>
         </div>
          <Button compact onClick={onToggleCollapseButtonClick}>{buttonTitle}</Button>
       </div>
    </div>
    )
}

export default VideoInfo

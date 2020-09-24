import React from 'react'
import {useEffect, useState} from 'react';
import {Image,Button} from 'semantic-ui-react'
import Linkify from 'react-linkify';
import './VideoInfo.css'
export function VideoInfo (props) {
    console.log("Helloq")   
    const [collapsed, setcollapsed] = useState(true);

     const onToggleCollapseButtonClick = () =>{
       setcollapsed(!collapsed)
       console.log(collapsed)
     }
    const getDescriptionParagraphs=() => {
      const videoDescription = props.video.snippet ? props.video.snippet.description : null;
      if (!videoDescription) {
        return null;
      }
      return videoDescription.split('\n').map((paragraph, index) => <p key={index}><Linkify>{paragraph}</Linkify></p>);
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
    const descriptionParagraphs = getDescriptionParagraphs();
    const {descriptionTextClass, buttonTitle} = getConfig(); 
    return (
    <div className='video-info-box'>
       <Image className='channel-image' src='http://via.placeholder.com/48x48' circular/>
       <div className="video-info">
           <div className='channel-name'>Channel Name</div>
    <div className='video-publication-date'>{props.video.snippet.publishedAt}</div>
       </div>
       <Button color='youtube' className="subscribe">91.5K Subscribe</Button>
       <div className="video-description">
         <div className={descriptionTextClass}>
            {descriptionParagraphs}   
         </div>
          <Button compact onClick={onToggleCollapseButtonClick}>{buttonTitle}</Button>
       </div>
    </div>
    )
}

export default VideoInfo

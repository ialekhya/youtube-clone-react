import React from 'react'
import {useEffect, useState} from 'react';
import {Image,Button} from 'semantic-ui-react'
import Linkify from 'react-linkify';
import './VideoInfo.css'
export function VideoInfo (props) {
  
  const [collapsed, setcollapsed] = useState(true);
  if (!props.video || !props.channel) {
    return <div/>;
  }
  const {channel} = props; 
  const channelThumbnail = channel.snippet.thumbnails.medium.url;
  const channelTitle = channel.snippet.title;

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
       <Image className='channel-image' src={channelThumbnail} circular/>
       <div className="video-info">
           <div className='channel-name'>{channelTitle}</div>
    <div className='video-publication-date'>{props.video.snippet.publishedAt}</div>
       </div>
    <Button color='youtube' className="subscribe">{props.channel.statistics.subscriberCount}</Button>
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

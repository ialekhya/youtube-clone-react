import React from 'react'
import './VideoPreview.css'
import {Link} from 'react-router-dom';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');
function getFormattedViewAndTime(video) {
  const publicationDate = new Date(video.snippet.publishedAt);
  return `${video.statistics.viewCount} views • ${timeAgo.format(publicationDate)}`;
}

function VideoPreview(props) {

 const {video} = props;
 console.log(video)
 if(!video){
   return <div/>
 }

   const horizantal =  props.horizantal ? 'horizantal' : null ;
 
   const viewAndTimeString = getFormattedViewAndTime(video);

    return (
      <Link to={{pathname: props.pathname, search: props.search}}>
      <div className={['video-preview', horizantal].join(' ')}>
        <div className='image-container'>
          <img src={video.snippet.thumbnails.medium.url}/>
          <div className='time-label'>
             <span>{video.contentDetails.duration}</span>
          </div>
        </div>
        <div className='video-info'>
           <div className='semi-bold show-max-two-lines'>{video.snippet.title}</div>
           <div className='video-preview-metadata-container'>
                 <div className='channel-title'>{video.snippet.channelTitle}</div>
                 <div><span>{viewAndTimeString}</span></div>
           </div>
        </div>
    </div>
    </Link>
    )
}

export default VideoPreview

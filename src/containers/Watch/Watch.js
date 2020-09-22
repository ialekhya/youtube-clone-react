import React from 'react'
import './Watch.css'
import Video from '../../components/Video/Video'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import NextUpVideo from '../../components/RelatedVideos/NextUpVideo/NextUpVideo'
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import VideoInfo from '../../components/VideoInfo/VideoInfo'
import { Comments } from '../Comments/Comments/Comments'
function Watch() {
    return (
      <div className="watch-grid">
          <Video className='video' id='-7fuHEEmEjs' />
          <VideoMetadata className='metadata' viewCount={1000}/>
          <VideoInfo className='video-info-box'/>
          {/* <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div> */}
          {/* <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div> */}
          <Comments className='comments'></Comments>
          <RelatedVideos className='relatedVideos'/>
      </div>
  
    )
}

export default Watch

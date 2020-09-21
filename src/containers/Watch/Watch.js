import React from 'react'
import './Watch.css'
import Video from '../../components/Video/Video'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import NextUpVideo from '../../components/RelatedVideos/NextUpVideo/NextUpVideo'
function Watch() {
    return (
      <div className="watch">
        {/* <Video id='-7fuHEEmEjs'/> */}
        {/* <VideoPreview horizantal={true}/>
        <VideoPreview /> */}
        <RelatedVideos/>

      </div>
  
    )
}

export default Watch

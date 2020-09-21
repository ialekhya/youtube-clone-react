import React from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import './VideoGrid.css'
function VideoGrid(props) {
    return (
    <React.Fragment>
      <h3 className="heading">{props.title}</h3>
      <div className='video-grid'>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
      </div>
      <hr></hr>
    </React.Fragment>
    )
}

export default VideoGrid

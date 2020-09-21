import React from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import NextUpVideo from './NextUpVideo/NextUpVideo'
import './RelatedVideos.css'
function RelatedVideos() {
    return (
        <div className='related-videos'>
            <NextUpVideo/>
            <VideoPreview horizantal={true}/>
            <VideoPreview horizantal={true}/>
            <VideoPreview horizantal={true}/>
       </div>
    )
}

export default RelatedVideos

// reusing VideoPreview component ..Beauty of react
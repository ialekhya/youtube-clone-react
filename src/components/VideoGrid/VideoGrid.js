import React from 'react'
import VideoPreview from '../VideoPreview/VideoPreview'
import './VideoGrid.css'
function VideoGrid(props) {
  if (!props.videos || !props.videos.length) {
    return <div/>;
  }
  const gridItems = props.videos.map(video => {
    return (<VideoPreview video={video}
                          key={video.id}
                          pathname='/watch'
                          search={`?v=${video.id}`}/>);
  });
  return (
    <React.Fragment>
      <h3 className="heading">{props.title}</h3>
      <div className='video-grid'>
        {/* <VideoPreview/> */}
        {gridItems}
      </div>
      <hr></hr>
    </React.Fragment>
    )
}

export default VideoGrid

import React from 'react'
import {Checkbox} from "semantic-ui-react";
import VideoPreview from '../../VideoPreview/VideoPreview'
import './NextUpVideo.css'
function NextUpVideo(props) {
    return (
    <React.Fragment>
      <div className='next-up-container'>
          <h4>Up next</h4>
          <div className='up-next-toggle'>
            <span>Autoplay</span>
            <Checkbox toggle defaultChecked/>
          </div>
      </div>
      <VideoPreview horizantal={true}/>
      <hr></hr>
    </React.Fragment>
    )
}

export default NextUpVideo

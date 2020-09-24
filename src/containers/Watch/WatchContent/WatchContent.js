import React from 'react';
import Video from '../../../components/Video/Video'
import VideoPreview from '../../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos'
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata';
import VideoInfo from '../../../components/VideoInfo/VideoInfo'
import { Comments } from '../../Comments/Comments/Comments'
import './WatchContent.css';
import {getVideoById} from '../../../store/reducers/video';
import { connect } from 'react-redux';

class WatchContent extends React.Component {
  render() {
    if (!this.props.videoId) {
      return <div/>
    }
    return (
        <div className="watch-grid">
        <Video className='video' id={this.props.videoId} />
        <VideoMetadata video={this.props.video}/>
        <VideoInfo  className='video-info-box' video={this.props.video}/>
        {/* <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div> */}
        {/* <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div> */}
        <Comments amountComments={112499}></Comments>
        <RelatedVideos className='relatedVideos'/>
    </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    video: getVideoById(state, props.videoId)
  }
}

export default connect(mapStateToProps, null)(WatchContent);
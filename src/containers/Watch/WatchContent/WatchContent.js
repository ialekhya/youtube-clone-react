import React from 'react';
import Video from '../../../components/Video/Video'
import VideoPreview from '../../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../../components/RelatedVideos/RelatedVideos'
import VideoMetadata from '../../../components/VideoMetadata/VideoMetadata';
import VideoInfo from '../../../components/VideoInfo/VideoInfo'
import { Comments } from '../../Comments/Comments/Comments'
import './WatchContent.css';
import { connect } from 'react-redux';
import {getRelatedVideos, getVideoById} from '../../../store/reducers/video';

import {getChannel} from '../../../store/reducers/channel';
class WatchContent extends React.Component {
  render() {
    console.log("in watchcontent ",this.props)
    if (!this.props.videoId) {
      return <div/>
    }
    return (
        <div className="watch-grid">
        <Video className='video' id={this.props.videoId} />
        <VideoMetadata video={this.props.video}/>
        {console.log("watch content ",this.props.channel)}
        <VideoInfo className='video-info-box' video={this.props.video} channel={this.props.channel}/>
        {/* <div className='video-info-box' style={{width: '100%', height: '100px', background: '#BD10E0'}}>Video Info box</div> */}
        {/* <div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div> */}
        <Comments amountComments={112499}></Comments>
        {
        console.log("watchcontent call "),
        console.log(this.props.relatedVideos)
        }
        <RelatedVideos className='relatedVideos' videos={this.props.relatedVideos}/>
    </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    relatedVideos: getRelatedVideos(state, props.videoId),
    video: getVideoById(state, props.videoId),
    channel: getChannel(state, props.channelId),
  }
}

export default connect(mapStateToProps, null)(WatchContent);
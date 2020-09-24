import React from 'react'
import './Watch.css'
import Video from '../../components/Video/Video'
import VideoPreview from '../../components/VideoPreview/VideoPreview'
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import NextUpVideo from '../../components/RelatedVideos/NextUpVideo/NextUpVideo'
import VideoMetadata from '../../components/VideoMetadata/VideoMetadata';
import VideoInfo from '../../components/VideoInfo/VideoInfo'
import { Comments } from '../Comments/Comments/Comments'
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import WatchContent from './WatchContent/WatchContent';

class Watch  extends React.Component {
    getVideoId() {
    const searchParams = new URLSearchParams(this.props.location.search);
    return searchParams.get('v');
    }
    componentDidMount() {
      if (this.props.youtubeLibraryLoaded) {
        this.fetchWatchContent();
      }
    }
  
    componentDidUpdate(prevProps) {
      if(this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
        this.fetchWatchContent();
      }
    }
  
    fetchWatchContent() {
      const videoId = this.getVideoId();
      if(!videoId) {
        this.props.history.push('/');
      }
      this.props.fetchWatchDetails(videoId, this.props.channelId);
    } 
    render(){
    const videoId = this.getVideoId();  
    return (
      <WatchContent  videoId={videoId}/>
    )}
}
function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({fetchWatchDetails}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));

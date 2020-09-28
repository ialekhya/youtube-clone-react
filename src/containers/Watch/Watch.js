import React from 'react';
import {bindActionCreators} from 'redux';
import * as watchActions from '../../store/actions/watch';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import WatchContent from './WatchContent/WatchContent';
import {getSearchParam} from '../../services/url';
import {getChannelId} from '../../store/reducers/video';

class Watch extends React.Component {
  render() {
    const videoId = this.getVideoId();
    console.log("video id",videoId)
    return (
      <WatchContent videoId={videoId} channelId={this.props.channelId}/>
    );
  }

  componentDidMount() {
    console.log(" componentDidMount watch")
    if (this.props.youtubeLibraryLoaded) {
      console.log("call fetchWatchContent mount")
      this.fetchWatchContent();
    }
  }

  componentDidUpdate(prevProps) {
    
    console.log(" componentDidUpdate watch")
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      console.log("call fetchWatchContent update")
      this.fetchWatchContent();
    }
  }

  getVideoId() {
    return getSearchParam(this.props.location, 'v');
  }

  fetchWatchContent() {
    const videoId = this.getVideoId();
    console.log("fetchWatchContent ",videoId )
    if (!videoId) {
      console.log("pushedbakc")
      this.props.history.push('/');
    }
    console.log("fetchWatchDetails call ",this.props.channelId)
    this.props.fetchWatchDetails(videoId, this.props.channelId);
  }
}

function mapStateToProps(state, props) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    channelId: getChannelId(state, props.location, 'v')
  };
}

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({fetchWatchDetails}, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Watch));
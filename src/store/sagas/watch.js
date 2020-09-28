import {fork, take,all, put, call} from 'redux-saga/effects';
import * as watchActions from '../actions/watch';
import {REQUEST} from '../actions';
import {buildVideoDetailRequest,buildRelatedVideosRequest,buildChannelRequest} from '../api/youtube-api';
import {SEARCH_LIST_RESPONSE, VIDEO_LIST_RESPONSE} from '../api/youtube-api-response-types'
export function* watchWatchDetails() {
  while (true) {
    console.log("watch 1")
    const {videoId,channelId} = yield take(watchActions.WATCH_DETAILS[REQUEST]);
    console.log("watch 2")
    yield fork(fetchWatchDetails, videoId,channelId);
  }
}
export function* fetchWatchDetails(videoId,channelId) {
  console.log("worker saga-fetchWatchDetails")
  let requests = [
    buildVideoDetailRequest.bind(null, videoId),
    buildRelatedVideosRequest.bind(null, videoId),
  ];
  if (channelId) {
    requests.push(buildChannelRequest.bind(null, channelId));
  }
  try {
    const responses = yield all(requests.map(fn => call(fn)));
    yield put(watchActions.details.success(responses,videoId));
    // yield call (fetchVideoDetails, responses);
    yield call (fetchVideoDetails, responses, channelId === null);
  } catch (error) {
    yield put(watchActions.details.failure(error));
  }
}
  function* fetchVideoDetails(responses, shouldFetchChannelInfo) {
    const searchListResponse = responses.find(response => response.result.kind === SEARCH_LIST_RESPONSE);
    const relatedVideoIds =  searchListResponse.result.items.map(relatedVideo => relatedVideo.id.videoId);
  
    const requests = relatedVideoIds.map(relatedVideoId => {
      return buildVideoDetailRequest.bind(null, relatedVideoId);
    });
    if (shouldFetchChannelInfo) {
      // we have to extract the video's channel id from the video details response
      // so we can load additional channel information.
      // this is only needed, when a user directly accesses .../watch?v=1234
      // because then we only know the video id
      const videoDetailResponse = responses.find(response => response.result.kind === VIDEO_LIST_RESPONSE);
      const videos = videoDetailResponse.result.items;
      if (videos && videos.length) {
        requests.push(buildChannelRequest.bind(null, videos[0].snippet.channelId));
      }
    }
    try {
      const responses = yield all(requests.map(fn => call(fn)));
      yield put(watchActions.videoDetails.success(responses));
    } catch (error) {
      yield put(watchActions.videoDetails.failure(error));
    }
  }

//   You probably noticed that we have some duplicate logic. We have parsing logic in our WATCH_DETAILS_SUCCESS reducer and in function above.

// In both places, we are filtering out the search response and get the video ids of the related videos. This is one of the huge drawbacks of consecutive requests. Sometimes they require parsing the response of the previous request. This is sort of an anti-pattern but cannot be avoided in this case unless we update our API.
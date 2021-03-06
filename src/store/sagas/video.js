import {fork, take, takeEvery, call, all, put } from 'redux-saga/effects';
import * as api from '../api/youtube-api';
import * as videoActions from '../actions/video';
import {REQUEST} from '../actions';
import {fetchEntity,ignoreErrors} from './index';

// watcher saga
export function* watchMostPopularVideos() {
  while (true) {
    console.log("watcher saga video 1")
    const {amount, loadDescription, nextPageToken} = yield take(videoActions.MOST_POPULAR[REQUEST]);
    console.log("watcher saga video 2" )
    yield fork(fetchMostPopularVideos, amount, loadDescription, nextPageToken);
  }
}
// worker saga
export function* fetchMostPopularVideos(amount, loadDescription, nextPageToken) {
  console.log("3",amount, loadDescription, nextPageToken )
  const request = api.buildMostPopularVideosRequest.bind(null, amount, loadDescription, nextPageToken);
  yield fetchEntity(request, videoActions.mostPopular);
}


export function* watchVideoCategories() {
  yield takeEvery(videoActions.VIDEO_CATEGORIES[REQUEST], fetchVideoCategories);
}

export const fetchVideoCategories = fetchEntity.bind(null, api.buildVideoCategoriesRequest, videoActions.categories);

export function* watchMostPopularVideosByCategory() {
  while(true) {
    const {categories} = yield take(videoActions.MOST_POPULAR_BY_CATEGORY[REQUEST]);
    yield fork(fetchMostPopularVideosByCategory, categories);
  }
}

export function* fetchMostPopularVideosByCategory(categories) {
  const requests = categories.map(category => {
  const wrapper = ignoreErrors(api.buildMostPopularVideosRequest, 12, false, null, category);
    return call(wrapper);
  });
  try {
    // console.log(requests)
    const response = yield all(requests);
    yield put(videoActions.mostPopularByCategory.success(response, categories));
  } catch (error) {
    yield put(videoActions.mostPopularByCategory.failure(error));
  }
}
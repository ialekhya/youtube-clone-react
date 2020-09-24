import apiReducer from './api';
import videosReducer from './video'
import {combineReducers} from 'redux';

export default combineReducers({
  api : apiReducer,
  videos: videosReducer
});
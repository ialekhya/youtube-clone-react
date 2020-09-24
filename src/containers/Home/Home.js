import React from 'react'
import SideBar from '../SideBar/SideBar'
import './Home.css'
import HomeContent from './HomeContent/HomeContent'
import {connect} from "react-redux";
import * as videoActions from "../../store/actions/video";
import {bindActionCreators} from 'redux';
import {getYoutubeLibraryLoaded} from '../../store/reducers/api';
import {getVideoCategoryIds} from '../../store/reducers/video';
import {useEffect, useState} from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0,
    };
  }
    componentDidMount() {
        if (this.props.youtubeLibraryLoaded) {
          console.log("1")
          this.fetchCategoriesAndMostPopularVideos();
        }
    }
    
    componentDidUpdate(prevProps) {
      if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
        this.fetchCategoriesAndMostPopularVideos();
      } else if (this.props.videoCategories !== prevProps.videoCategories) {
        this.fetchVideosByCategory();
      }
    }
    fetchCategoriesAndMostPopularVideos() {
      this.props.fetchMostPopularVideos();
      this.props.fetchVideoCategories();
    }
    
    fetchVideosByCategory() {
      const categoryStartIndex = this.state.categoryIndex;
      const categories = this.props.videoCategories.slice(categoryStartIndex, categoryStartIndex + 3);
      this.props.fetchMostPopularVideosByCategory(categories);
      this.setState(prevState => {
        return {
          categoryIndex: prevState.categoryIndex + 3,
        };
      });
    }
    
    render(){
      
    return (
        <React.Fragment>
            <SideBar/>
            <HomeContent/> 
        </React.Fragment>
     
    )}
}
function mapStateToProps(state) {
    return {
      youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
      videoCategories: getVideoCategoryIds(state),
    };
  }

function mapDispatchToProps(dispatch) {
    const fetchMostPopularVideos = videoActions.mostPopular.request;
    const fetchVideoCategories = videoActions.categories.request;
    const fetchMostPopularVideosByCategory = videoActions.mostPopularByCategory.request;
    return bindActionCreators({fetchMostPopularVideos, fetchVideoCategories, fetchMostPopularVideosByCategory}, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);

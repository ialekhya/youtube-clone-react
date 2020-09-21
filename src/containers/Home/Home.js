import React from 'react'
import VideoGrid from '../../components/VideoGrid/VideoGrid'
import SideBar from '../SideBar/SideBar'
import './Home.css'
function Home() {
    return (
        <React.Fragment>
            <SideBar></SideBar>
            <div className="home">
            <div className="responsive-video-grid-container">
                  <VideoGrid title="Trending"/>
                 <VideoGrid title="Subscriptions"/>
            </div>
        </div>
        </React.Fragment>
     
    )
}

export default Home

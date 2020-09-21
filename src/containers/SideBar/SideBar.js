import React from 'react'
import SideBarItem from './SideBarItem'
import './SideBar.css'
import SideBarHeading from './SideBarHeading'
import Subsciptions from './Subscriptions/Subscriptions'
import SideBarFooter from './SideBarFooter'
function SideBar() {
    return (
        <div className="sidebar">
        <ul className="SideBarList">
            <SideBarItem label="Liked" icon="fas fa-home"></SideBarItem>
            <SideBarItem label="trending" icon="fas fa-fire"></SideBarItem>
            <SideBarItem label="History" icon="fas fa-history"></SideBarItem>
            <SideBarItem label="Subscriptions" icon="fab fa-youtube-square"></SideBarItem>
            <hr></hr>
            <SideBarHeading  title='More from Youtube'></SideBarHeading>
            <SideBarItem label="watch later" icon="fas fa-clock"></SideBarItem>
            <SideBarItem label="Liked Videos" icon="far fa-thumbs-up"></SideBarItem>
            <SideBarItem label="Library" icon="fas fa-book-open"></SideBarItem>
            <hr></hr>
            <SideBarHeading  title='Subsciptions'></SideBarHeading>
            <Subsciptions></Subsciptions>
            <hr></hr>
            <SideBarHeading  title='Send Feedback'></SideBarHeading>
            <SideBarFooter/>
        </ul>
        </div>
    )
}

export default SideBar

import React from 'react'
import './SideBar.css'
function SideBarHeading(props) {
    const heading = props.title ? props.title.toUpperCase() : '';
    return (
        <h5 className='side-bar-header'> {heading} </h5>
    )
}

export default SideBarHeading

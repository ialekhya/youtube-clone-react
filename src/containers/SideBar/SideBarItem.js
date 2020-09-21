import React from 'react'
import './SideBaritem.css'
function SideBarItem(props) {
    return (
        <li className="sidebar-item">
            <i class={props.icon}></i>
            <span>
             {props.label}
             </span>
        </li>
    )
}
export default SideBarItem

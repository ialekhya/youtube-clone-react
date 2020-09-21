import React from 'react'
import './Subscription.css'
function Subscription(props) {
    
    let rightElement = null;
    const {broadcasting, amountNewVideos} = props;
    if (broadcasting) {
      rightElement = <i class="fas fa-signal"></i> ;
    } else if (amountNewVideos) {
      rightElement = <span className='new-videos-count'>{amountNewVideos}</span>;
    }
   
    return (
      <li className="subscription">
        <div className="subscription-title-wrapper">
          <img src='http://via.placeholder.com/28x28'/>
          <span>{props.label}</span>
        </div>
        <div className="subscriprion-update">
          {rightElement}
        </div>
      </li>
    )
}

export default Subscription

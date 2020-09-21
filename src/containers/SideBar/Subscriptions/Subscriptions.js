import React from 'react'
import Subscription from './Subscription/Subscription'
function Subscriptions() {
    return (
      <React.Fragment>
        <Subscription label='MusicChannel' broadcasting={true}/>
        <Subscription label='Coursea' amountNewVideos={10}/>
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Stanford iOS' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/>
        <Subscription label='MusicChannel' broadcasting={true}/>
        <Subscription label='Coursea' amountNewVideos={10}/>
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Stanford iOS' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/>
        <Subscription label='MusicChannel' broadcasting={true}/>
        <Subscription label='Coursea' amountNewVideos={10}/>
        <Subscription label='TEDx Talks' amountNewVideos={23}/>
        <Subscription label='Stanford iOS' amountNewVideos={4}/>
        <Subscription label='Udacity' amountNewVideos={114}/>
      </React.Fragment>
    )
}

export default Subscriptions

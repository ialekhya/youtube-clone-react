import React from 'react'
import './Video.css'

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

function Video(props) {
    if (!props.id) {
        return null;
      }
    const embedUrl = `${BASE_EMBED_URL}${props.id}`;
    console.log(embedUrl)
    return (
    <div className='video-container'>
      <div className="video"> 
        <iframe className="video-player" src={embedUrl} frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen>
        </iframe>
       </div>
     </div>    
    )
}

export default Video

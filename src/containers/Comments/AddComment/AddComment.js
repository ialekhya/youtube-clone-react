import React from 'react'
import './AddComment.css'
function AddComment() {
    return (
    <div className='add-comment'>
      <img className='user-image' src='http://via.placeholder.com/48x48' />
      <form className="comment-form">
        <textarea placeholder='Add a public comment' />
      </form>
    </div>
    )
}

export default AddComment

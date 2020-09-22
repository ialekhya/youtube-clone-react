import React from 'react';
import Comment  from '../Comment/Comment';
import AddComment from '../AddComment/AddComment';
import CommentsHeader from '../CommentsHeader/CommentsHeader';

export class Comments extends React.Component {
  render() {
    return(
      <div>
        <CommentsHeader amountComments={this.props.amountComments}/>
        <AddComment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    );
  }
}
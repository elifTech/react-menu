import React from 'react';
import Comment from './Comment'

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data
    }
  }

  render() {
    console.log(this.state.comments);
    var commentNodes = this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    })

    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;

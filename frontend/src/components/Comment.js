import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div>
        <textarea
          name='comment'
          id='comment'
          cols='30'
          rows='10'
          placeholder='Type a comment...'></textarea>
        <button className='btn btn-danger btn-lg'>Post Comment</button>
      </div>
    );
  }
}
export default Comment;

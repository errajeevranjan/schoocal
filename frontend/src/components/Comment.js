import React, { Component } from "react";
import axios from "axios";
class Comment extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      upvotes: 0,
      downvotes: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    //to overide the default form behaviour
    e.preventDefault();
    console.log("u submited ", this.state.comment, this.state.username);

    const newComment = {
      username: this.state.username,
      comment: this.state.comment,
      upvotes: this.state.upvotes,
      downvotes: this.state.downvotes,
    };

    axios
      .post("/api/comments", newComment)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));
    window.location.reload();
  }

  render() {
    return (
      <div className='container '>
        <form onSubmit={this.onSubmit}>
          <div className='form-group '>
            <input
              type='text'
              className='form-control'
              name='username'
              value={this.state.username}
              onChange={this.onChange}
              placeholder='Enter your name here...'
            />
          </div>
          <div className='form-group'>
            <textarea
              className='form-control'
              rows='3'
              name='comment'
              value={this.state.comment}
              onChange={this.onChange}
              placeholder='Type a Comment...'></textarea>
          </div>
          <button type='submit' className='btn btn-danger mb-2 float-right '>
            Post Comment
          </button>
        </form>
      </div>
    );
  }
}
export default Comment;

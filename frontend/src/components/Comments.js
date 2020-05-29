import React, { Component } from "react";
import axios from "axios";
class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      upvoteId: "",
      downvoteId: "",
    };
  }

  /* getting all the comments */
  componentDidMount() {
    let request = axios.get(`/api/comments/`);

    request
      .then((response) => {
        console.log("response here =>", response.data);
        this.setState({
          comments: response.data,
        });
      })
      .catch();
    console.log("req", request);
  }

  // handling upvotes
  handleUpvotes(id) {
    console.log("u pressed upvote ", id);
    axios
      .put(`api/comments/upvotes/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));
    window.location.reload();
  }

  // handling downvotes
  handleDownvotes(id) {
    console.log("u pressed downvote ", this.state.downvoteId);
    axios
      .put(`api/comments/downvotes/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => this.setState({ errors: err.response.data }));
    window.location.reload();
  }

  render() {
    return (
      <div className='container mt-5 pt-5'>
        <ol>
          {this.state.comments.map((data, index) => (
            <li key={index}>
              <h6>{data.username}</h6>
              <div className='b'>{data.comment}</div>

              <button
                onClick={(id) => this.handleUpvotes(data._id)}
                type='button'
                className='btn'>
                <i className='fas fa-thumbs-up'></i>
                <small>{data.upvotes} upvotes</small>
              </button>

              <button
                onClick={(id) => this.handleDownvotes(data._id)}
                type='button'
                className='btn'>
                <i className='fas fa-thumbs-down'></i>
                <small>{data.downvotes} downvotes</small>
              </button>
              <hr />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}
export default Comments;

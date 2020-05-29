import React, { Component } from "react";
import Comment from "./components/Comment";
import Comments from "./components/Comments";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='container mt-5'>
        <Comment />
        <Comments />
      </div>
    );
  }
}

export default App;

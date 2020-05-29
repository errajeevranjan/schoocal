import React from "react";
import logo from "./logo.svg";
import Comment from "./components/Comment";
import Comments from "./components/Comments";

import "./App.css";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Comment />
        <Comments />
      </div>
    );
  }
}

export default App;

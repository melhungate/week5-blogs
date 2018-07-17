import React, { Component } from "react";
import axios from "axios";
import Post from './components/Post';
import CreatePost from './components/CreatePost';

class Blog extends Component {

  state = {
    posts: []
  }

refresh = () => {
  // get all block posts from the backend 
  axios.get("/posts").then(res => {
    const data = res.data;
    // if blog posts come back
    if (data.payload) {
      // store them in state
      this.setState({ posts: data.payload });
    }
  });
};

  componentDidMount() {
    this.refresh();
  }

  render() {
      return (
        <div className="posts">
          {this.state.posts.map(post => <Post {...post} />)}
          <CreatePost refresh={this.refresh} />
        </div>
      );
  }
}

export default Blog;

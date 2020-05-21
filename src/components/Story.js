import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Story extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    const { post, onSelect } = this.props;
    onSelect(post.id);
    this.setState({
      clicked: true,
    });
  };
  render() {
    const { post } = this.props;
    return (
      <div className="tlPost" onClick={this.handleClick}>
        {this.state.clicked ? <Redirect to={`/viewPost/${post.id}`} /> : null}
        <h2>{post.game}</h2>
        <p>{post.summary}</p>
        <video src="videos/gamer123.mp4" autoPlay controls></video>
        <p>
          {post.likes} <i>Likes</i>
        </p>
        <p>
          {post.comments.length}
          <span className="comments">Comments</span>
        </p>
        <ul>
          <li>Like</li>
          <li>Comment</li>
          <li>Share</li>
        </ul>
      </div>
    );
  }
}

export default Story;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Story extends Component {
  state = {
    clicked: false,
    display: "none",
  };
  handleClick = () => {
    const { post, onSelect } = this.props;
    onSelect(post.id);
    this.setState({
      clicked: true,
      display: "none",
    });
  };

  inputClick = () => {
    this.setState({
      display: "block",
    });
  };
  render() {
    const { post } = this.props;
    return (
      <div className="tlPost">
        {this.state.clicked ? <Redirect to={`/viewPost/${post.id}`} /> : null}
        <h2>{post.game}</h2>
        <p>{post.summary}</p>
        <video
          src={post.video}
          onClick={this.handleClick}
          autoPlay
          controls
        ></video>
        <p>
          {post.likes} <i>Likes</i>
        </p>
        <p>
          {post.comments.length}
          <span className="comments">Comments</span>
        </p>
        <ul>
          <li>Like</li>
          <li onClick={this.inputClick}>Comment</li>
          <li>Share</li>
        </ul>
        <div style={{ display: this.state.display }}>
          <input type="textfield"></input>
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
}

export default Story;

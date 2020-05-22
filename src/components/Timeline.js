import React, { Component } from "react";
import Story from "./Story";
import { Link } from "react-router-dom";

class Timeline extends Component {
  //const props = this.props;
  state = {
    query: "",
    searchedPost: [...this.props.Posts],
    display: "none",
  };
  renderPosts = () => {
    const display = this.state.searchedPost.map((post) => {
      return <Story post={post} key={post.id} onSelect={this.props.onSelect} />;
    });

    return display;
  };

  handleChange = (e) => {
    const query = e.target.value;
    const newList = this.props.Posts.filter((post) => {
      if (post.game.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
    this.setState({
      query: query,
      searchedPost: newList,
    });
  };

  clickHandler = () => {
    this.setState({
      display: "block",
    });
  };
  render() {
    return (
      <div className="layout">
        <div className="timeLine">
          <ul>
            <li>Trending</li>
            <li>Most Popular</li>
            <li onClick={this.clickHandler}>Search</li>
          </ul>
          <div className="addPost">
            <div style={myStyles.searchBar}>
              <div style={{ display: this.state.display }}>
                <input
                  type="text"
                  placeholder="🔍"
                  onChange={this.handleChange}
                ></input>
              </div>
            </div>
            <h2>
              <Link to="/submit">Add Post</Link>
            </h2>
          </div>
          <div className="postList">{this.renderPosts()}</div>
        </div>
      </div>
    );
  }
}

const myStyles = {
  searchBar: {
    margin: "10px",
  },
  input: {
    padding: "20px",
  },
};

export default Timeline;

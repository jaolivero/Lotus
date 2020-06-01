import React, { Component } from "react";
import Story from "./Story";
import { connect } from "react-redux";
import { increment } from "../actions/actions";
import { Link } from "react-router-dom";

class Timeline extends Component {
  //const props = this.props;
  state = {
    query: "",
    searchedPost: [...this.props.postsList.list],
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
    const newList = this.props.Posts.list.filter((post) => {
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

  handleClick = () => {
    this.props.increment(this.props.count);
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
          <div>
            <button onClick={this.handleChange}>Add</button>
            <p>{this.props.count}</p>
          </div>
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

const mapStoreToProps = (store) => {
  return {
    count: store.posts.count,
    postsList: store.posts,
  };
};

export default connect(mapStoreToProps, {
  increment: increment,
})(Timeline);

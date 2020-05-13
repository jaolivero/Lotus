import React from "react";
import Story from "./Story";
import { Link } from "react-router-dom";

const Timeline = (props) => {
  const renderPosts = () => {
    const display = props.Posts.map((post) => {
      return <Story post={post} key={post.title} />;
    });

    return display;
  };

  return (
    <div className="layout">
      <div className="timeLine">
        <ul>
          <li>Trending</li>
          <li>Most Popular</li>
          <li>Search</li>
        </ul>
        <div>
          <h2>
            <Link to="/submit">Add Post</Link>
          </h2>
        </div>
        <div className="postList">{renderPosts()}</div>
      </div>
    </div>
  );
};

export default Timeline;

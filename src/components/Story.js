import React from "react";

const Story = ({ post }) => {
  return (
    <div className="tlPost">
      <h2>{post.game}</h2>
      <p>{post.summary}</p>
      <video src="videos/gamer123.mp4" autoplay controls></video>
      <p>
        {post.likes} <i>Likes</i>
      </p>
      <p>
        {post.comments.length}
        <span class="comments" onclick="showComments">
          Comments
        </span>
      </p>
      <ul>
        <li>Like</li>
        <li onClick="addComment">Comment</li>
        <li>Share</li>
      </ul>
    </div>
  );
};

export default Story;

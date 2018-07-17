import React from "react";

const Post = ({ title, description }) => (
  <div className="post">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Post;
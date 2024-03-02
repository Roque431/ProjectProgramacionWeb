import React from 'react';

function Post({ image, username, caption, likes, comments }) {
  return (
    <div className="post-container">
      <img src={image} alt={caption} className="post-image" />
      <div className="post-details">
        <p>
          <strong>{username}</strong> {caption}
        </p>
        <p>
          <strong>Likes:</strong> {likes} <strong>Comments:</strong> {comments}
        </p>
      </div>
    </div>
  );
}

export default Post;
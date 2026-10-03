import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Use the same URL you tested in Postman
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts); // the array is inside the "posts" key
      })
      .catch((err) => console.error("Could not load posts:", err));
  }, []);

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption || "post image"} />
            {post.caption && <p>{post.caption}</p>}
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  );
};

export default Feed;

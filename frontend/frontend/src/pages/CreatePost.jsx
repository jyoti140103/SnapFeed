import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/feed");
      })
      .catch((err) => {
        console.error(err);
        alert("Error creating post. Please try again.");
      });
  };

  return (
    <section className="create-post-section">
      <h2>Create a New Post</h2>

      <form onSubmit={handleSubmit}>
        <input type="file" name="image" accept="image/*" required />
        <input type="text" name="caption" placeholder="Write a caption..." required />
        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
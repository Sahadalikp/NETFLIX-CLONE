
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function BlogItem({ post, getPosts }) {

  const handleDelete = async () => {

    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this blog?"
    // );

    // if (!confirmDelete) return;

    await axios.delete(
      `http://localhost:3000/posts/${post.id}`
    );

    getPosts();
  };

  return (
    <div className="blog-card">

      <h2>{post.title}</h2>

      <p>{post.content}</p>

      <div className="blog-buttons">

        <Link to={`/view/${post.id}`}>
          <button className="view-btn">
            View
          </button>
        </Link>

        <Link to={`/edit/${post.id}`}>
          <button className="edit-btn">
            Edit
          </button>
        </Link>

        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default BlogItem;

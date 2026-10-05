
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function BlogView() {

  const { id } = useParams();

  const [post, setPost] = useState(null);

  const getPost = async () => {

    const response = await axios.get(
      `http://localhost:3000/posts/${id}`
    );

    setPost(response.data);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  if (!post) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="blog-view">

      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <div className="blog-buttons">

        <Link to={`/edit/${post.id}`}>
          <button className="edit-btn">
            Edit
          </button>
        </Link>

        <Link to="/">
          <button>
            Back
          </button>
        </Link>

      </div>

    </div>
  );
}

export default BlogView;


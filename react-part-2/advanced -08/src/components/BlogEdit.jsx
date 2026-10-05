import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function BlogEdit() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const getPost = async () => {

    const response = await axios.get(
      `http://localhost:3000/posts/${id}`
    );

    setTitle(response.data.title);
    setContent(response.data.content);
  };

  useEffect(() => {
    getPost();
  }, [id]);

  const handleUpdate = async (e) => {

    e.preventDefault();

    const updatedPost = {
      title: title,
      content: content
    };

    await axios.put(
      `http://localhost:3000/posts/${id}`,
      updatedPost
    );

   

    navigate("/");
  };

  return (
    <form
      className="blog-form"
      onSubmit={handleUpdate}
    >

      <h2>Edit Blog</h2>

      <input
        type="text"
        placeholder="Blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">
        Update Blog
      </button>

    </form>
  );
}

export default BlogEdit;

import React, { useState } from "react";
import axios from "axios";


function BlogForm() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title: title,
      content: content
    };

    await axios.post(
      "http://localhost:3000/posts",
      newPost
    );

    setTitle("");
    setContent("");

    // alert("Blog Added");
  };

  return (
    <form className="blog-form" >

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

      <button type="submit" onSubmit={handleSubmit}>
        Add Blog
      </button>

    </form>
  );
}

export default BlogForm;
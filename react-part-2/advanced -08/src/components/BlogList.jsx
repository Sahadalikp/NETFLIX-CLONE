import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogItem from "./BlogItem";

function BlogList() {

  const [posts, setPosts] = useState([]);

  const getPosts = async () => {

    const response = await axios.get(
      "http://localhost:3000/posts"
    );

    setPosts(response.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="blog-list">

      {posts.map((post) => (

        <BlogItem
          key={post.id}
          post={post}
          getPosts={getPosts}
        />

      ))}

    </div>
  );
}

export default BlogList;
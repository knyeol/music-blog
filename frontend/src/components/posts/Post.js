import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function Post() {
  const [post, setPost] = useState();

  function getPostData() {
    const path = window.location.pathname;
    if (!path.includes("/posts/")) return;
    fetch(process.env.REACT_APP_URL + path)
      .then(response => response.json())
      .then(data => setPost(data));
  }

  useEffect(() => getPostData(), []);

  return post ? (
    <div className="container">
      <h2>{post.title}</h2>
      <div className="img-container">
        <img
          src={process.env.REACT_APP_URL + post.image.formats.medium.url}
          alt={post.image.name}
        />
      </div>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  ) : null;
}

export default Post;

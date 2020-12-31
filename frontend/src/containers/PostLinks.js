import { FiArrowRightCircle } from "react-icons/fi";

function PostLinks({ posts }) {
  const colors = {
    technique: "#E4D9FF",
    theory: "#FFF2E6",
    gear: "#CBD7FF",
    tips: "#FFFAB3",
    practice: "#BFF0FF"
  };

  return (
    <div className="posts-container">
      {posts
        ? posts.map(post => {
            const color = colors[post.tag];
            return (
              <div
                className="blog-card"
                key={post.id}
                style={{ background: color }}
              >
                <p>{post.tag[0].toUpperCase() + post.tag.slice(1)}</p>
                <h3 className="blog-card-title">{post.title}</h3>
                <div className="blog-card-link">
                  <a className="blog-card-a" href={`/posts/${post.slug}`}>
                    <FiArrowRightCircle />
                  </a>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default PostLinks;

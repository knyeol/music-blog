import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../apollo";
import { useState, useEffect } from "react";
import PostLinks from "../../containers/PostLinks";
import FetchButton from "./FetchButton";
import Filter from "./Filter";
import Search from "./Search";
import "../../styles/Posts.css";

function Posts() {
  const initVariables = { limit: 6 };
  const [posts, setPosts] = useState();
  const [vars, setVars] = useState(initVariables);
  const { loading, error, variables, data, fetchMore } = useQuery(GET_POSTS, {
    variables: vars
  });

  function updatePosts() {
    fetchMore({ variables }).then(data =>
      setPosts(posts =>
        posts ? [...posts, ...data.data.posts] : [...data.data.posts]
      )
    );
  }

  useEffect(() => data && updatePosts(), [data]);

  return posts ? (
    <div className="container posts">
      <h3>Blog</h3>
      <Filter
        setVariables={setVars}
        limit={initVariables.limit}
        setPosts={setPosts}
        variables={variables}
      />
      <Search
        setVariables={setVars}
        posts={posts}
        setPosts={setPosts}
        limit={initVariables.limit}
      />
      <PostLinks posts={posts} />
      <FetchButton variables={variables} setVariables={setVars} posts={posts} />
    </div>
  ) : null;
}

export default Posts;

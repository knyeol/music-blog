import { useState, useEffect } from "react";

function FetchButton({ variables, setVariables, posts }) {
  const [postCount, setPostCount] = useState();
  const [disableButton, setDisableButton] = useState();

  function getPostCount() {
    const url = "/posts/count";
    fetch(process.env.REACT_APP_URL + url)
      .then(response => response.json())
      .then(data => setPostCount(data));
  }

  function onClick() {
    setVariables(variables => {
      return { ...variables, start: posts.length };
    });
  }

  useEffect(() => {
    const varKey = Object.keys(variables);
    const disabled = varKey == "tag" || varKey == "title";
    posts.length === postCount || disabled
      ? setDisableButton(true)
      : setDisableButton(false);
  }, [posts]);
  useEffect(() => getPostCount(), []);

  return (
    <button
      className={disableButton ? "fetch-button disabled" : "fetch-button"}
      onClick={onClick}
    >
      <h3>{"More Posts"}</h3>
    </button>
  );
}

export default FetchButton;

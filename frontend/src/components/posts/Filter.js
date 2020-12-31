import { useState, useEffect } from "react";

function Filter({ setVariables, limit, setPosts, variables }) {
  const [tags, setTags] = useState();
  const [selection, setSelection] = useState();

  function getTags() {
    const url = "/content-manager/content-types";
    fetch(process.env.REACT_APP_URL + url)
      .then(response => response.json())
      .then(data => setTags(data.data[1].attributes.tag.enum));
  }

  function filterPosts() {
    setPosts([]);
    if (selection === "all") return setVariables({ limit });
    setVariables({ tag: selection });
  }

  useEffect(() => {
    const varKey = Object.keys(variables);
    if (varKey == "title") setSelection("all");
  }, [variables]);
  useEffect(() => selection && filterPosts(), [selection]);
  useEffect(() => getTags(), []);

  return (
    <div className="filter">
      <small>Show only</small>
      {tags ? (
        <select
          className="filter-select"
          onChange={e => setSelection(e.target.value)}
          value={selection}
        >
          {tags.map((tag, i) =>
            i ? (
              <option key={tag} value={tag}>
                {tag[0].toUpperCase() + tag.slice(1)}
              </option>
            ) : (
              <option key="all" value="all">
                All
              </option>
            )
          )}
        </select>
      ) : null}
    </div>
  );
}

export default Filter;

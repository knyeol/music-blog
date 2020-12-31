import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function Search({ posts, setVariables, setPosts, limit }) {
  const [term, setTerm] = useState("");
  const [lastTerm, setLastTerm] = useState();

  function onSubmit(e) {
    e.preventDefault();
    setPosts([]);
    setVariables({ title: term.trim(), limit: !term ? limit : 0 });
    setTerm(oldTerm => {
      setLastTerm(oldTerm.trim());
      return "";
    });
  }

  return (
    <>
      <form className="search" onSubmit={e => onSubmit(e)}>
        <input
          className="search-input"
          type="text"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button className="search-button">
          <FiSearch /> Search
        </button>
      </form>
      {lastTerm && (
        <div>
          <p>
            {posts.length} {posts.length > 1 ? "results" : "result"} for "
            {lastTerm}"
          </p>
        </div>
      )}
    </>
  );
}

export default Search;

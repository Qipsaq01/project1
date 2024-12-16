import { useState } from "react";
import "./MovieSearch.css";

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery("");
  };

  return (
    <form  className="input-box" onSubmit={HandleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Movie search"
      />
      <button className="btn-click" type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;

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
        placeholder="Поиск фильмов"
      />
      <button type="submit">Поиск</button>
    </form>
  );
};

export default MovieSearch;

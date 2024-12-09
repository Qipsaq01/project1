import { useState } from "react";
import "./App.css";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [search, setSearch] = useState([]);

  const ApiKey = "b1485cf3";
  const HandleSearch = async (query) => {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${ApiKey}`
    );
    const data = await response.json();
    if (data.Search) {
      setSearch(data.Search);
    } else {
      setSearch([]);
    }
  };

  return (
    <div className="movi">
      <div className="search">
        <MovieSearch onSearch={HandleSearch} />
      </div>
      <div className="list">
        <MovieList search={search} />
      </div>
      
    </div>
  );
}

export default App;

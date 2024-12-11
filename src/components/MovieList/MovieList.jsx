import { useState } from "react";
import "./MovieList.css";
import MovieInfo from "../MovieInfo/MovieInfo";

const MovieList = ({ search }) => {
  const [select, setSelect] = useState(null);
  const ApiKey = "b1485cf3";

  const HandleSelect = async (movie) => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=${ApiKey}`
    );
    const data = await response.json();
    setSelect(data); 
  };

  return (
    <div className="list-card">
      {select ? (
        <MovieInfo select={select} onBack={() => setSelect(null)} />
      ) : (
        search.map((movie) => (
          <div
            className="card"
            key={movie.imdbID}
            onClick={() => HandleSelect(movie)}
          >
            <div className="ava">
              <img src={movie.Poster} />
            </div>
            <div className="card-text">
              <h3>{movie.Title}</h3>
              <p>{movie.Type}</p>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default MovieList;

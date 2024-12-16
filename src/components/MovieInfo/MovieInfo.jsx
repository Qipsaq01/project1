import "./MovieInfo.css";

const MovieInfo = ({ select, onBack }) => {
  if (!select || Object.keys(select).length === 0) return null;
  return (
    <div className="info-card">
      <div className="info-one">
        <button onClick={onBack} className="back-button">
          Back
        </button>
        <img src={select.Poster} alt={select.Title} />
        <button className="look-btn">
          <img className="logo" src="././public/click.webp" alt="play" />{" "}
          <p>Watch</p>
        </button>
      </div>

      <div className="info-two">
        <h2>{select.Title}</h2>
        <p className="text">Year: {select.Year}</p>
        <p className="text">Genre: {select.Genre}</p>
        <p className="text">Coutry: {select.Country}</p>
        <p className="text">Language: {select.Language}</p>
        <p className="text">Rated: {select.Rated}</p>
        <p className="text">Ratings : {select.imdbRating}</p>
        <p className="text">Released: {select.Released}</p>
        <p className="text">Runtime : {select.Runtime}</p>
        <p className="text">Type: {select.Type}</p>
        <p className="text">Writer: {select.Writer}</p>
        <p className="text">totalSeasons: {select.totalSeasons}</p>
        <p className="text">Director: {select.Director}</p>
        <p className="text">Plot: {select.Plot}</p>
      </div>
    </div>
  );
};
export default MovieInfo;

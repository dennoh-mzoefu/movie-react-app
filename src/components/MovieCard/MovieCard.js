import React from "react";
import "./MovieCard.css";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
function MovieCard() {
  const movieDatas = useSelector((state) => state.MovieReducer);
  return (
    <div className="movie__card">
      {console.log(movieDatas)}
      {movieDatas.movieData?.map((movieData) => (
        <div className="container">
          {console.log(movieData.name)}
          <img src={movieData.image} />
          <div className="description">
            <p className="movie__name">{movieData.name}</p>
            <p className="movie__price">Kshs {movieData.price}</p>
            <p className="movie__rating">{movieData.rating}</p>
            {/* <DeleteOutlineIcon /> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;

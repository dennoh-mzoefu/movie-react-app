import React, { useState } from "react";
import "./MovieCard.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { DELETEMOVIE } from "../../Actions";
import { useSelector } from "react-redux";
function MovieCard() {
  const [id, setId] = useState(null);
  const movieDatas = useSelector((state) => state.MovieReducer);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(DELETEMOVIE(id));
    // console.log(movieDatas);
  };
  return (
    <div className="movie__card">
      {/* {console.log(movieDatas)} */}
      {movieDatas.movieData?.map((movie) => (
        <div className="container">
          <img src={movie.image} />
          <div className="description">
            <p className="movie__name">{movie.name}</p>
            {/* <p className="movie__price">Kshs {movie.price}</p> */}

            {/* {movie.rating.map((a) => {
              <p className="movie__rating"⭐>🌟</p>;
            })} */}
            <div className="movie__rating">
              {Array(movie.rating)
                .fill()
                .map((_, i) => (
                  <p key={i} style={{ display: "inline" }}>
                    ★
                  </p>
                ))}
            </div>
            <div className="tooltip">
              <DeleteOutlineIcon
                onClick={() => {
                  handleDelete();
                  setId(movie.id);
                }}
              />
              <span className="tooltiptext">Double click</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;

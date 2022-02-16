import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADDMOVIE } from "../../Actions";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { useHistory } from "react-router-dom";
import "./AddMovie.css";
import MovieIcon from "@mui/icons-material/Movie";

const AddMovie = () => {
  const movieDatas = useSelector((state) => state.MovieReducer);
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const addMovies = movies.filter((movie) => {
      if (movie.name.toLowerCase() == query.toLowerCase()) {
        return movie;
      }
    });
    const item = {
      name: addMovies[0].name,
      price: addMovies[0].price,
      image: addMovies[0].image,
      id: addMovies[0].id,
      rating: addMovies[0].rating,
    };
    dispatch(ADDMOVIE(item));
    console.log(ADDMOVIE(item));
    history.push("/");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("  http://localhost:8000/movie");
        const json = await response.json();
        // console.log(json);

        // filter movies that have been added already
        movieDatas.movieData.map((item) => {
          json.splice(
            json.findIndex((a) => a.id === item.id),
            1
          );
        });
        setMovies(json);
        // console.log(json);
      } catch (error) {
        // console.log("error");
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div class="form__group field">
        <form onSubmit={handleSubmit}>
          <input
            type="input"
            class="form__field"
            // placeholder="Enter Movie  Title"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            // name="Enter movie name"
            id="name"
            required
          />
          <label for="name" class="form__label">
            <SearchIcon />
            &nbsp;&nbsp; movie name
          </label>
          <button className="button" type="submit">
            <p> Add</p> <MovieIcon />
          </button>
        </form>
      </div>
      <div className="add__movies">
        {movies &&
          movies
            .filter((movie) => {
              if (query === "") {
                return movie;
              } else if (
                movie.name.toLowerCase().includes(query.toLowerCase())
              ) {
                return movie;
              }
            })
            .map((movie, index) => (
              <div className="upperCont">
                <p>{movie.name}</p>
                <div
                  className="box"
                  key={index}
                  onClick={() => setQuery(movie.name)}
                >
                  <img src={movie.image} alt={movie.name} />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AddMovie;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADDMOVIE } from "../../Actions";
import { useHistory } from "react-router-dom";
import "./AddMovie.css";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  //   let addMovies;
  const handleSubmit = (e) => {
    e.preventDefault();

    const addMovies = movies.filter((movie) => {
      if (movie.name.toLowerCase() == query.toLowerCase()) {
        // console.log(query);
        // console.log(movie.name);
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
        setMovies(json);
      } catch (error) {
        // console.log("error");
      }
    };
    // console.log(tasks);
    fetchData();
  }, []);
  return (
    <div className="add__movies">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Post Title"
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
        <button type="submit">Add Movie</button>
      </form>
      {movies &&
        movies
          .filter((movie) => {
            if (query === "") {
              return movie;
            } else if (movie.name.toLowerCase().includes(query.toLowerCase())) {
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
  );
};

export default AddMovie;

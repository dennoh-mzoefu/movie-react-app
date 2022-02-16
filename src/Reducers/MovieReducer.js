const initialState = {
  movieData: [
    {
      name: "Witcher",
      price: 20,
      rating: 4,
      image: "/MoviePics/witcher.jpg",
      id: 1,
    },
    {
      name: "Blacklist",
      price: 20,
      rating: 5,
      image: "/MoviePics/blacklist.jpg",
      id: 2,
    },
  ],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDMOVIE":
      const { name, price, image, id, rating } = action.payload;

      return {
        movieData: [...state.movieData, { name, price, image, id, rating }],
      };
    case "DELETEMOVIE":
      const Id = action.payload;
      return {
        ...state,
        movieData: [...state.movieData?.filter((movie) => movie.id !== Id)],
      };
    default:
      return state;
  }
};

export default MovieReducer;

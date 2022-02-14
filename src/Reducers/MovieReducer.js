const initialState = {
  movieData: [
    {
      name: "Witcher",
      price: 20,
      rating: 3,
      image: "/MoviePics/witcher.jpg",
      id: 1,
    },
    {
      name: "Blacklist",
      price: 20,
      rating: 3,
      image: "/MoviePics/blacklist.jpg",
      id: 1,
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
    default:
      return state;
  }
};

export default MovieReducer;

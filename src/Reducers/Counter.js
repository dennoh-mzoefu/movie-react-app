const CounterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADDMOVIE":
      return state + 1;
    default:
      return state;
  }
};

export default CounterReducer;

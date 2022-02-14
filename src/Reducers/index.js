import { combineReducers } from "redux";
import CounterReducer from "./Counter";
import MovieReducer from "./MovieReducer";

export const allReducers = combineReducers({
  MovieReducer: MovieReducer,
  CounterReducer: CounterReducer,
});

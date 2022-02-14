import { createStore } from "redux";
import { allReducers } from "../Reducers";
// import MovieReducer from '../Reducers/MovieReducer';
export default createStore(allReducers);

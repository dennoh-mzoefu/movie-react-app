import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/Navbar/Navbar";
import Home from "./Home";

import AddMovie from "./components/AddMovie/AddMovie";
// import MovieReducer from "./Reducers/MovieReducer";
function App() {
  // const [data, setData] = useState("second");

  return (
    <div className="App">
      <BrowserRouter basename="tutorial">
        <div className="App">
          <NavBar />
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/AddMovie" component={AddMovie} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

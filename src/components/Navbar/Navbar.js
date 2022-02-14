import { Link } from "react-router-dom";
import React from "react";
// import AddTaskIcon from "@mui/icons-material/AddTask";
import "./Navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <Link to="./">
        <h2>Movie App</h2>
      </Link>
      <div className="leftNav">
        <Link to="./AddMovie">
          <h2>Add Movie</h2>
        </Link>
        <div className="material">{/* <AddTaskIcon /> */}</div>
      </div>
    </div>
  );
}

export default NavBar;

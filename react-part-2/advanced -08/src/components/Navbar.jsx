import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Blog</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
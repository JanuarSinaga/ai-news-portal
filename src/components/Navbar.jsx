import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">AI News Portal</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Kategori</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

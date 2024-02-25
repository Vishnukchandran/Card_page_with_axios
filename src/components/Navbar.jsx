import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="container-fluid disabled"
      style={{ backgroundColor: "#009688" }}
    >
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#009688", color: "#000000" }}
      >
        <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/cards" style={{ marginRight: "auto",color: "#ffffff", textDecoration: "none" }}>
          Cards Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

<div class="container">
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
    </div>
  </nav>
</div>;

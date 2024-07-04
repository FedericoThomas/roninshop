import React from "react";
import Cart from "../../pages/home/Cart/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Ronin</h1>
      </Link>

      <Link to="/category/Hoodies">Hoodies</Link>
      <Link to="/category/Remeras">Remeras</Link>
      <Link to="/category/Musculosas">Musculosas</Link>

      <Cart />
    </div>
  );
};

export default Navbar;

import React from "react";
import Cart from "../../pages/home/Cart/CartWidget";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Ronin</h1>

      <a href="">Hoodies</a>
      <a href="">Remeras</a>
      <a href="">Musculosas</a>

      <Cart />
    </div>
  );
};

export default Navbar;

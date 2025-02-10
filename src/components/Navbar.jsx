import React, { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";
import "../styles/Navbar.css";

function Navbar({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
          <h1 className="brand">FABRIX</h1>
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Deals</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="nav-right">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search" />
            <Search className="search-icon" size={20} />
          </div>
          <button className="cart-button">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#">Sweaters</a>
          <a href="#">Coats & Jackets</a>
          <a href="#">Shirts</a>
          <a href="#">Pants</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

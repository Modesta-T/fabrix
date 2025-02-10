import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import "../styles/Navbar.css";

function Navbar({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  // Check authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAdmin(!!user); // If user is logged in, set admin state to true
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = async () => {
    await signOut(auth);
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="brand">FABRIX</h1>
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link to="/deals" onClick={() => setIsMenuOpen(false)}>
              Deals
            </Link>
            {isAdmin ? (
              <>
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  Admin Dashboard
                </Link>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/admin-login" onClick={() => setIsMenuOpen(false)}>
                Admin Login
              </Link>
            )}
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
    </nav>
  );
}

export default Navbar;

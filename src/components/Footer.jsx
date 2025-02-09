import React from "react";
import "../styles/Footer.css";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Search Terms</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Why Buy From Us</h3>
            <ul>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Secure Shopping</a></li>
              <li><a href="#">Affiliates</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>My Account</h3>
            <ul>
              <li><a href="#">Sign In</a></li>
              <li><a href="#">View Cart</a></li>
              <li><a href="#">My Wishlist</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Moi Avenue<br />Star mall shop A46</li>
              <li>Phone: 254 720 000 654</li>
              <li>Email: info@fabrix.com</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 FABRIX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

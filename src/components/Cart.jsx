import React from "react";
import "../styles/Cart.css";

function Cart({ cartItems, removeFromCart }) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>${item.price} (x{item.quantity})</p>
              </div>
              {/* ✅ Remove by `id` instead of index */}
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

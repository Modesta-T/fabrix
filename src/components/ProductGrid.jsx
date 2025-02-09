import React from "react";
import "../styles/ProductGrid.css";

function ProductGrid({ products, addToCart }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
          <div className="product-details">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;

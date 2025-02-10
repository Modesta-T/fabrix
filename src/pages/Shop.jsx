import React, { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid";
// import "../styles/Shop.css";


const Shop = ({ addToCart }) => {
  // Initialize state variables to store products, loading state, and any error messages
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch products from API when Shop component mounts.
  useEffect(() => {
    // Define a function to fetch products that will be called when the component mounts
    const fetchProducts = async () => {
      try {
        // Make a GET request to the API to fetch all products
        const response = await fetch("https://fakestoreapi.com/products");
        // If the response is not OK (200), throw an error
        if (!response.ok) throw new Error("Failed to fetch products");

        // Parse the response as JSON
        const data = await response.json();
        // Set the products state to the fetched products
        setProducts(data);
      } catch (err) {
        // If an error occurred, set the error state to the error message
        setError("Error loading products. Please try again.");
      } finally {
        // Set the loading state to false, regardless of whether we succeeded or failed
        setLoading(false);
      }
    };

    // Call the fetchProducts function when the component mounts
    fetchProducts();
  }, []);

  // Render the Shop component
  return (
    <div className="shop">
      <h2>Shop All Products</h2>
      {/* If we're still loading products, display a message saying so */}
      {loading && <p>Loading products...</p>}
      {/* If there was an error loading products, display an error message */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* If we're not loading and there was no error, render the ProductGrid component */}
      {!loading && !error && (
        <ProductGrid products={products} addToCart={addToCart} />
      )}
      {!loading && !error && <ProductGrid products={products} addToCart={addToCart} />}
    </div>
  );
};


export default Shop;

import React, { useState, useEffect } from "react";
import ProductGrid from "../components/ProductGrid";
// import "../styles/Deals.css";

const Deals = ({ addToCart }) => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products?sort=desc");
        if (!response.ok) throw new Error("Failed to fetch deals");

        const data = await response.json();
        setDeals(data.slice(0, 6)); // Get top 6 deals
      } catch (err) {
        setError("Error loading deals. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return (
    <div className="deals">
      <h2>Exclusive Deals</h2>
      {loading && <p>Loading deals...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <ProductGrid products={deals} addToCart={addToCart} />}
    </div>
  );
};

export default Deals;

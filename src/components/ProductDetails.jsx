import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-page">
      <img src={product.image} alt={product.title} className="product-image-large" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;

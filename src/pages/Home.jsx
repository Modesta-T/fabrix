import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import ProductGrid from "../components/ProductGrid";
import PromoBanners from "../components/PromotionalBanner";
import Testimonials from "../components/Testimonials";
// import "../styles/Home.css";

const Home = ({ newProducts, addToCart }) => {
  return (
    <div className="home">
      <HeroCarousel />
      <section className="products-section">
        <h2>New Arrivals</h2>
        <ProductGrid products={newProducts} addToCart={addToCart} />
      </section>
      <PromoBanners />
      <Testimonials />
    </div>
  );
};

export default Home;

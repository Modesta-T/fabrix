import React from "react";
import "../styles/PromotionalBanner.css";

function PromoBanners() {
  const banners = [
    {
      title: "COATS & JACKETS",
      image: "https://i.pinimg.com/236x/8f/f3/0d/8ff30d1c3a4f3268535475665a9545c7.jpg",
      link: "#",
    },
    {
      title: "SPORTS",
      image: "https://i.pinimg.com/736x/a6/d5/9f/a6d59f5e32c4a10aa118b4c8e19c8d21.jpg",
      link: "#",
    },
    {
      title: "SUITS & BLAZERS",
      image: "https://i.pinimg.com/474x/7e/40/ae/7e40aea68f5fce0c6e745f301b714dd4.jpg",
      link: "#",
    },
  ];

  return (
    <div className="promo-banners">
      {banners.map((banner, index) => (
        <a key={index} href={banner.link} className="promo-banner">
          <img
            src={banner.image || "/placeholder.svg"}
            alt={banner.title}
            className="promo-banner-image"
          />
          <div className="promo-banner-overlay">
            <h3 className="promo-banner-title">{banner.title}</h3>
          </div>
        </a>
      ))}
    </div>
  );
}

export default PromoBanners;

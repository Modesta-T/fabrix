import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/HeroCarousel.css";

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
  {
    image: "https://i.pinimg.com/736x/d0/8e/db/d08edbef3148afd070f7646a4e0e2e75.jpg",
    title: "CREATE YOUR INDIVIDUALITY",
    description: "Express yourself through our premium collection",
  },
  {
    image: "https://i.pinimg.com/736x/92/6f/c9/926fc9f923b3e65a8fad6aeaa9e6da15.jpg",
    title: "NEW ARRIVALS",
    description: "Check out our latest fashion items",
  },
  {
    image: "https://i.pinimg.com/736x/38/4e/7f/384e7f01da735190686abc796e470457.jpg",
    title: "BIG CLEARANCE",
    description: "Get up to 50% off on selected items",
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="carousel-image" />
          <div className="carousel-overlay">
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="carousel-button left"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="carousel-button right"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default HeroCarousel;

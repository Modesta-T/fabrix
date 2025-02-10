import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/HeroCarousel.css";


function HeroCarousel() {
  // Keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the slides we want to display
  const slides = [
    {
      // The image to display for the first slide
      image: "https://i.pinimg.com/736x/d0/8e/db/d08edbef3148afd070f7646a4e0e2e75.jpg",
      // The title for the first slide
      title: "CREATE YOUR INDIVIDUALITY",
      // The description for the first slide
      description: "Express yourself through our premium collection",
    },
    {
      // The image to display for the second slide
      image: "https://i.pinimg.com/736x/92/6f/c9/926fc9f923b3e65a8fad6aeaa9e6da15.jpg",
      // The title for the second slide
      title: "NEW ARRIVALS",
      // The description for the second slide
      description: "Check out our latest fashion items",
    },
    {
      // The image to display for the third slide
      image: "https://i.pinimg.com/736x/38/4e/7f/384e7f01da735190686abc796e470457.jpg",
      // The title for the third slide
      title: "BIG CLEARANCE",
      // The description for the third slide
      description: "Get up to 50% off on selected items",
    },
  ];
}

  // Set up an interval to automatically switch the slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      // Move to the next slide
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    // Clean up the interval when we're done
    return () => clearInterval(timer);
  }, []);

  // Render the carousel
  return (
    <div className="carousel">
      // Map over the slides and render each one
      {slides.map((slide, index) => (
        <div
          // The key is used to help React keep track of the slides
          key={index}
          // Determine whether this slide should be active
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
        >
          // Display the image for this slide
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="carousel-image" />
          // Display the title and description for this slide
          <div className="carousel-overlay">
            <div className="carousel-text">
              // Render the title for this slide
              <h2>{slide.title}</h2>
              // Render the description for this slide
              <p>{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
      // Render a left arrow button
      <button
        // When the left arrow button is clicked, move to the previous slide
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="carousel-button left"
      >
        // Render the left arrow icon
        <ChevronLeft />
      </button>
      // Render a right arrow button
      <button
        // When the right arrow button is clicked, move to the next slide
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="carousel-button right"
      >
        // Render the right arrow icon
        <ChevronRight />
      </button>
    </div>
  );


export default HeroCarousel;

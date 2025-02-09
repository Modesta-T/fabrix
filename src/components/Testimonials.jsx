import React from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const reviews = [
    { name: "Peter", rating: 5, review: "Great quality and fast delivery!" },
    { name: "Sydney", rating: 4, review: "Nice product, but shipping was slow." },
    { name: "Wes", rating: 5, review: "Absolutely love my new jacket!" },
  ];

  return (
    <section className="testimonials">
      <h2>Customer Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <p className="review-text">"{review.review}"</p>
            <p className="review-author">- {review.name} ⭐{review.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

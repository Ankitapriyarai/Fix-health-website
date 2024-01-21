

import React, { useState } from 'react';
import '../App.css';  

interface Review {
  id: number;
  content: string;
}

const Testimonials: React.FC = () => {
  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([
    { id: 1, content: 'Excellent service! Highly recommended.' },
    { id: 2, content: 'Very professional staff. Great experience.' },
  ]);
  const [newReview, setNewReview] = useState('');

  const handleTestimonialsClick = () => {
    setIsTestimonialsVisible(!isTestimonialsVisible);
  };

  const handleReviewSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (newReview.trim() === '') {
      alert('Please enter a review before submitting.');
      return;
    }

    
    const newReviews = [...reviews, { id: reviews.length + 1, content: newReview }];
    setReviews(newReviews);

    setNewReview('');
  };

  const handleExitClick = () => {
    setIsTestimonialsVisible(false);
  };

  return (
    <section className="testimonials">
      <h2 onClick={handleTestimonialsClick} style={{ cursor: 'pointer' }}>
        What Our Patients Say
      </h2>
      {isTestimonialsVisible && (
        <div className="testimonial">
          <button className="exit-button" onClick={handleExitClick}>
            Exit
          </button>
          <p>Leave a Review:</p>
          <form onSubmit={handleReviewSubmit}>
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Write your review here..."
            />
            <button type="submit">Submit</button>
          </form>
          <p>Existing Reviews:</p>
          {reviews.map((review) => (
            <p key={review.id}>{review.content}</p>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;

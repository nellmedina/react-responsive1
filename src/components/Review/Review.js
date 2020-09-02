import React, { useState } from 'react';
import './Review.scss';

const Review = ({ review }) => {
  const [expandedReview, setExpandedReview] = useState(false);

  const toggleReview = () => () => {
    setExpandedReview(!expandedReview);
  };

  return (
    <>
      {!expandedReview && (
        <>
          <div className="review-component">
            <p>
              <strong>By: {review.author}</strong>
              {review.content}
            </p>
          </div>
          <span className="mobile-device" onClick={toggleReview()}>
            Show more...
          </span>
        </>
      )}
      {expandedReview && (
        <>
          <p className="review-expanded">
            <strong>By: {review.author}</strong>
            {review.content}
          </p>
          <span className="mobile-review" onClick={toggleReview}>
            Show less...
          </span>
        </>
      )}
    </>
  );
};

export default Review;

import React from 'react';
import './Card.scss';

const Card = ({ goToMovieDetails, movieId, style, children }) => {
  return (
    <div
      className="card-component"
      style={style || null}
      onClick={() => goToMovieDetails(movieId)}
    >
      {children}
    </div>
  );
};

export default Card;

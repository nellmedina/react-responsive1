import React from 'react';
import { BASE_POSTER_PATH } from '../../constants/Constants';
import './MovieList.scss';

const Movie = ({ title, poster, overview, released }) => {
  return (
    <>
      <div className="movie-details-mobile">
        <h1 className="movie-title">{title}</h1>
      </div>
      <div className="movie-component">
        {poster && (
          <img
            src={`${BASE_POSTER_PATH}w300/${poster}`}
            alt="movie poster"
            className="movie-poster"
          />
        )}
        <div className="movie-details">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-overview">
            <strong>Synopsis:</strong> {overview}
          </p>
          <p className="movie-released">
            <strong>Release Date:</strong> {released}
          </p>
        </div>
      </div>
    </>
  );
};

export default Movie;

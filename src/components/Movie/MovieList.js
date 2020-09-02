import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Movie from './Movie';
import Card from '../Card/Card';
import './MovieList.scss';

const MovieList = ({ error, loading, movies }) => {
  const initState = { id: null, movieDetails: false };
  const [state, setState] = useState(initState);

  const selectedMovieHandler = (movieId) => {
    if (movieId !== null) {
      setState({ id: movieId, movieDetails: true });
    }
  };

  const renderRedirect = () => {
    if (state.movieDetails) {
      return (
        <Redirect
          to={{ pathname: `/movie/${state.id}`, state: `nowplaying` }}
        />
      );
    }
  };
  let movieInfo = null;
  if (!loading && !error && movies.length > 0) {
    movieInfo = movies.map((movie) => {
      return (
        <Card
          key={movie.id}
          movieId={movie.id}
          goToMovieDetails={selectedMovieHandler}
        >
          <Movie
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
            released={movie.release_date}
          />
        </Card>
      );
    });
  }

  if (error) {
    movieInfo = (
      <h3>
        Woops, something went wrong trying to fetch movies in theaters now.
      </h3>
    );
  }

  if (loading) {
    movieInfo = <h3>Loading movie data now...</h3>;
  }

  return (
    <>
      <div className="movie-list">
        {renderRedirect()}
        {movieInfo}
      </div>
    </>
  );
};

export default MovieList;

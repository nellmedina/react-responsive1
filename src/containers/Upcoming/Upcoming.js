import React, { useEffect, useState } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Upcoming.scss';
import MovieList from '../../components/Movie/MovieList';

const Upcoming = () => {
  const initState = {
    movies: [],
    loading: true,
    error: false,
  };

  const [state, setState] = useState(initState);

  const setMovies = async () => {
    try {
      const movies = await movieAPI.getUpcoming();
      setState({ movies, loading: false });
    } catch (err) {
      setState({ loading: false, error: true });
    }
  };

  useEffect(() => {
    setMovies();
  }, []);

  const { loading, error, movies } = state;

  return (
    <>
      <h1>Upcoming Movies</h1>
      <MovieList loading={loading} error={error} movies={movies} />
    </>
  );
};

export default Upcoming;

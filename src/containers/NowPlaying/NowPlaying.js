import React, { useState, useEffect } from 'react';
import * as movieAPI from '../../services/movieAPI';
import MovieList from '../../components/Movie/MovieList';
import './NowPlaying.scss';

const NowPlaying = () => {
  const initState = {
    movies: [],
    loading: true,
    error: false,
  };

  const [state, setState] = useState(initState);

  const getNowPlaying = async () => {
    try {
      const movies = await movieAPI.getNowPlaying();
      setState({ movies, loading: false });
    } catch (err) {
      setState({ loading: false, error: true });
    }
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <>
      <h1>Movies In Theaters Now</h1>
      <MovieList
        loading={state.loading}
        error={state.error}
        movies={state.movies}
      />
    </>
  );
};

export default NowPlaying;

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';
import MovieList from '../../components/Movie/MovieList';

const GenresList = () => {
  const initState = {
    movies: [],
    loading: true,
    error: false,
  };

  const [state, setState] = useState(initState);

  const { genreId, genreName } = useParams();
  const history = useHistory();
  const { movies, loading, error } = state;

  const setMovies = async (genreId) => {
    try {
      const movies = await movieAPI.getMoviesByGenre(genreId);
      setState({ ...initState, movies, loading: false, error: false });
    } catch (err) {
      setState({ loading: false, error: true });
    }
  };

  useEffect(() => {
    setMovies(genreId);
  }, []);

  let movieGenreInfo;
  if (error) {
    movieGenreInfo = (
      <h3>Woops, something went wrong trying to fetch movies of this genre.</h3>
    );
  }

  if (loading) {
    movieGenreInfo = <h3>Loading movies of this genre now...</h3>;
  }

  if (movies.length > 0 && !loading) {
    movieGenreInfo = (
      <MovieList loading={loading} error={error} movies={movies} />
    );
  }

  return (
    <>
      <div
        className="genre-search-title"
        onClick={() => history.push('/genres')}
      >
        <i className="fa fa-chevron-left" aria-hidden="true" />
        <p>Back to Genres</p>
      </div>
      <div className="genre-search-mobile-title">
        <i
          className="fa fa-chevron-left mobile"
          aria-hidden="true"
          onClick={() => history.push('/genres')}
        />
        <h1>{genreName} Movies</h1>
      </div>
      {movieGenreInfo}
    </>
  );
};

export default GenresList;

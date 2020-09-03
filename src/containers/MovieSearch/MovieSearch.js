import React, { useState } from 'react';
import * as movieAPI from '../../services/movieAPI';
import MovieList from '../../components/Movie/MovieList';
import './MovieSearch.scss';

const MovieSearch = () => {
  const initState = {
    value: '',
    movies: null,
    error: false,
    loading: false,
  };

  const [state, setState] = useState(initState);

  const handleChange = (event) => {
    event.preventDefault();
    setState({ value: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setState({ loading: true });
      const movies = await movieAPI.searchMovies(state.value);
      setState({ ...state, movies, loading: false });
    } catch (err) {
      setState({ error: true, loading: false });
    }
  };

  const { movies, error, loading, value } = state;
  let movieInfo = null;

  if (movies) {
    if (movies.length === 0) {
      movieInfo = <h3>No movies match your search terms. Please try again</h3>;
    } else if (movies.length > 0) {
      movieInfo = (
        <>
          <h2>Movie Results for: {value}</h2>
          <MovieList loading={loading} error={error} movies={movies} />
        </>
      );
    }
  }

  if (error) {
    movieInfo = (
      <h3>
        Woops, something went wrong trying to find movies with titles like your
        search.
      </h3>
    );
  }

  if (loading) {
    movieInfo = <h3>Searching movies now...</h3>;
  }

  return (
    <>
      <h1>Movie Search</h1>
      <form className="search-form-wrapper" onSubmit={handleSubmit}>
        <label className="search-label">
          Search Movie Titles Here:
          <input
            className="search-input"
            type="text"
            value={value || ''}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Search" />
      </form>

      {movieInfo ? movieInfo : null}
    </>
  );
};

export default MovieSearch;

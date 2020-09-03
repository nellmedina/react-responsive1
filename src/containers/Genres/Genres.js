import React, { useState, useEffect } from 'react';
import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';
import { Redirect } from 'react-router-dom';
import Genre from '../../components/Genre/Genre';

const Genres = () => {
  const initState = {
    genres: [],
    selectedGenre: 0,
    loading: true,
    error: false,
    selectedGenreName: '',
  };

  const [state, setState] = useState(initState);

  const setGenres = async () => {
    try {
      const genres = await movieAPI.getAllGenres();
      setState({ ...state, genres, loading: false });
    } catch (err) {
      setState({ loading: false, error: true });
    }
  };

  useEffect(() => {
    setGenres();
  }, []);

  const selectedGenreHandler = (genreId, genreName) => {
    setState({
      ...state,
      selectedGenre: genreId,
      selectedGenreName: genreName,
    });
  };

  const { selectedGenre, selectedGenreName, error, loading, genres } = state;

  const renderRedirect = () => {
    if (selectedGenre !== 0 && selectedGenreName !== '') {
      return <Redirect to={`/genres/${selectedGenreName}/${selectedGenre}`} />;
    }
  };

  let genreInfo = null;
  let info = null;

  if (!loading && !error && genres.length) {
    genreInfo = genres.map((genre) => {
      return (
        <Genre
          key={genre.id}
          id={genre.id}
          name={genre.name}
          goToGenreList={selectedGenreHandler}
        />
      );
    });
  }

  if (error) {
    info = 'Woops, something went wrong trying to fetch genres.';
  }

  if (loading) {
    info = 'Loading genre data now...';
  }

  return (
    <div className="genres-page">
      <h1>Choose a Genre</h1>
      {(error || loading) && <h3>{info}</h3>}
      <div className="genre-list">
        {renderRedirect()}
        {genreInfo}
      </div>
    </div>
  );
};

export default Genres;

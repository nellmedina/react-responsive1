import React from 'react';
import './Genre.scss';

const Genre = ({ id, name, goToGenreList }) => {
  return (
    <div
      key={id}
      className="genre-component"
      onClick={() => goToGenreList(id, name)}
    >
      <h3 className="genre-name">{name}</h3>
    </div>
  );
};

export default Genre;

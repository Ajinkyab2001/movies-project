import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {

  const handleDeleteMovie = (key) => {
    
    const updatedMovies = movies.filter((movie) => movie.key !== key);
    setMovies(updatedMovies);
  };
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={handleDeleteMovie} 
        />
      ))}
    </ul>
  );
};

export default MovieList;

import React from 'react';
// Components are imported from the same folder as the current file by default 
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => { // Destructuring the props object
  return (
    <div className="movie" key={imdbID}>  
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} /> 
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function MovieCard({ movie }) {
  // Ensure movie object exists before trying to access its properties
  if (!movie) {
    return null; // Or a placeholder if preferred
  }

  return (
    <div className="movie-card bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden">
      {/* Link to the individual movie page using the movie's ID */}
      <Link to={`/movie/${movie.id}`} className="block p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 truncate">
          {movie.title}
        </h3>
        {/* You can add more movie details here if available, e.g., year, genre */}
        {movie.year && <p className="text-gray-600 text-sm">Year: {movie.year}</p>}
        {movie.genres && movie.genres.length > 0 && (
          <p className="text-gray-600 text-sm">Genres: {movie.genres.join(', ')}</p>
        )}
      </Link>
    </div>
  );
}

export default MovieCard;

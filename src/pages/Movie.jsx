import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get URL parameters

function Movie() {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch specific movie data based on the ID from the json-server
    fetch(`http://localhost:3000/movies/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]); // Re-run effect if the 'id' parameter changes

  if (loading) {
    return <div className="text-center text-gray-600 text-lg mt-8">Loading movie details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-lg mt-8">Error: {error.message}</div>;
  }

  if (!movie) {
    return <div className="text-center text-gray-600 text-lg mt-8">Movie not found.</div>;
  }

  return (
    <div className="movie-page p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-md my-8">
      <header className="text-center mb-6">
        {/* The movie title goes here */}
        <h1 className="text-3xl font-bold text-gray-800">{movie.title}</h1>
      </header>
      <main>
        {/* Movie info here! */}
        <p className="text-gray-700 mb-2">
          <span className="font-semibold">Runtime:</span> {movie.runtime} minutes
        </p>
        <div className="mb-4">
          <span className="font-semibold text-gray-700">Genres: </span>
          {/* Display each genre in its own span tag */}
          {movie.genres && movie.genres.map((genre) => (
            <span
              key={genre}
              className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
            >
              {genre}
            </span>
          ))}
        </div>
        {/* Add more movie details if available in your data */}
        {movie.director && (
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Director:</span> {movie.director}
          </p>
        )}
        {movie.actors && movie.actors.length > 0 && (
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Actors:</span> {movie.actors.join(', ')}
          </p>
        )}
        {movie.plot && (
          <p className="text-gray-700 mt-4">
            <span className="font-semibold">Plot:</span> {movie.plot}
          </p>
        )}
      </main>
    </div>
  );
}

export default Movie;


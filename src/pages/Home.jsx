import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard"; // Import MovieCard

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch movies data from the json-server
    fetch("http://localhost:3000/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return <div className="text-center text-gray-600 text-lg mt-8">Loading movies...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-lg mt-8">Error: {error.message}</div>;
  }

  return (
    <div className="home-page p-4">
      <header className="text-center mb-6">
        {/* The H1 for "Home Page" goes here */}
        <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
      </header>
      <main>
        {/* Info goes here! */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Render a list of movies using MovieCard components */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;


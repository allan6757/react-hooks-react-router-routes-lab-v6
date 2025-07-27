import React, { useState, useEffect } from "react";

function Actors() {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch actors data from the json-server
    fetch("http://localhost:3000/actors")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setActors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once

  if (loading) {
    return <div className="text-center text-gray-600 text-lg mt-8">Loading actors...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 text-lg mt-8">Error: {error.message}</div>;
  }

  return (
    <div className="actors-page p-4">
      <header className="text-center mb-6">
        {/* Display the page title */}
        <h1 className="text-4xl font-bold text-gray-800">Actors Page</h1>
      </header>
      <main>
        {/* Actor info here! */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render a new <article> element for each actor */}
          {actors.map((actor) => (
            <article key={actor.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">{actor.name}</h2>
              {actor.movies && actor.movies.length > 0 ? (
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Movies:</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {/* List of movies this actor has been in */}
                    {actor.movies.map((movie, index) => (
                      <li key={index} className="mb-1">{movie}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-gray-500">No movies listed for this actor.</p>
              )}
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Actors;


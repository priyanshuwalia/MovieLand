import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movieCard";

const API_URL = "http://www.omdbapi.com?apikey=b2d79b9f";

function App() {
  const [movies, setMovies] = useState([]);
  const [movieTitle, setMovieTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovies = async (title) => {
    if (!title.trim()) return; // Prevent empty search requests

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const handleSearch = () => {
    searchMovies(movieTitle);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <motion.h1
        className="text-6xl flex items-center justify-center"
        animate={{ scale: 1.3 }}
      >
        MovieLand
      </motion.h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-field"
        />
        <motion.img
          src={SearchIcon}
          alt="Search"
          onClick={handleSearch}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="search-icon"
        />
      </div>

      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.imdbID} movie1={movie} />)
        ) : (
          <div>No movies found</div>
        )}
      </div>
    </>
  );
}

export default App;

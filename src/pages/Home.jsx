import React, { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import MovieCard from "../components/MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=b2d79b9f";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);

    // Initial search
    useEffect(() => {
        searchMovies("Batman");
    }, []);

    const searchMovies = async (title) => {
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search || []);
        } catch (error) {
            console.error(error);
            setMovies([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            searchMovies(searchTerm);
        }
    };

    return (
        <div className="w-full">
            {/* Hero Search Section */}
            <section className="flex flex-col items-center justify-center py-12 md:py-20 text-center space-y-8">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                    Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Cinema</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Discover millions of movies, TV shows, and games.
                </p>

                <form onSubmit={handleSearch} className="relative w-full max-w-lg mx-auto group">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for a movie..."
                        className="w-full px-6 py-4 pl-14 text-lg bg-slate-800/50 border border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-md text-white placeholder-slate-500 shadow-xl transition-all group-hover:bg-slate-800/80"
                    />
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
                    >
                        Search
                    </button>
                </form>
            </section>

            {/* Results Section */}
            <section>
                {loading ? (
                    <div className="flex justify-center py-20">
                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin" />
                    </div>
                ) : movies.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {movies.map((movie) => (
                            <MovieCard key={movie.imdbID} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-semibold text-slate-500">No movies found</h2>
                        <p className="text-slate-600">Try a different search term.</p>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;

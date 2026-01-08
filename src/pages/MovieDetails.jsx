import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Calendar, Users, Award, Film } from "lucide-react";

const API_URL = "https://www.omdbapi.com?apikey=b2d79b9f";

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`${API_URL}&i=${id}&plot=full`);
                const data = await response.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovie();
    }, [id]);

    if (loading) {
        return <div className="min-h-[50vh] flex items-center justify-center text-white">Loading...</div>;
    }

    if (!movie) {
        return <div className="text-white">Movie not found</div>;
    }

    return (
        <div className="relative">
            <Link to="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" /> Back to Search
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Poster Side */}
                <div className="md:col-span-1">
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-700">
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.jp/300x450.png"}
                            alt={movie.Title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Details Side */}
                <div className="md:col-span-2 space-y-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-2">
                            {movie.Title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                            <span className="flex items-center gap-1 text-yellow-400 font-medium">
                                <Star className="w-4 h-4 fill-yellow-400" /> {movie.imdbRating}
                            </span>
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" /> {movie.Released}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" /> {movie.Runtime}
                            </span>
                            <span className="px-3 py-1 rounded-full border border-slate-700 text-xs">
                                {movie.Rated}
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {movie.Genre.split(", ").map((genre, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                                {genre}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white border-l-4 border-blue-500 pl-3">Plot</h3>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {movie.Plot}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div>
                            <h4 className="flex items-center gap-2 text-slate-200 font-medium mb-1">
                                <Users className="w-4 h-4 text-purple-400" /> Director
                            </h4>
                            <p className="text-slate-400">{movie.Director}</p>
                        </div>
                        <div>
                            <h4 className="flex items-center gap-2 text-slate-200 font-medium mb-1">
                                <Film className="w-4 h-4 text-purple-400" /> Cast
                            </h4>
                            <p className="text-slate-400">{movie.Actors}</p>
                        </div>
                        <div className="sm:col-span-2">
                            <h4 className="flex items-center gap-2 text-slate-200 font-medium mb-1">
                                <Award className="w-4 h-4 text-yellow-500" /> Awards
                            </h4>
                            <p className="text-slate-400">{movie.Awards}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

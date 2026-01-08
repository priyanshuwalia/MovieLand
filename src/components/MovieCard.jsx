import React from "react";
import { Link } from "react-router-dom";
import { Star, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const MovieCard = ({ movie }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer"
        >
            <Link to={`/movie/${movie.imdbID}`}>
                {/* Background Image / Poster */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.jp/300x450.png"}
                        alt={movie.Title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium tracking-wider uppercase bg-blue-500/80 backdrop-blur-sm rounded-full text-white">
                        {movie.Type}
                    </span>

                    <h3 className="text-xl font-bold text-white mb-1 leading-tight line-clamp-2 drop-shadow-md">
                        {movie.Title}
                    </h3>

                    <div className="flex items-center gap-4 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span>{movie.Year}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default MovieCard;

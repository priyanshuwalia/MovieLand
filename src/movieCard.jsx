import React from "react";
import { motion } from "framer-motion";

const MovieCard = ({ movie1 }) => {
  return (
    <motion.div
      animate={{ scale: 0.9 }}
      whileTap={{ rotate: 10, scale: 0.85 }}
      className="h-[480px] rounded-[12px] overflow-hidden transition-transform duration-300 ease-in-out shadow-lg shadow-black/20 relative bg-sky-300/30 hover:scale-105 hover:shadow-xl p-4"
    >
      <p className="text-gray-800 font-semibold">{movie1.Year}</p>
      <div className="flex flex-col items-center">
        <img
          className="rounded-lg w-full h-[300px] object-cover"
          src={
            movie1.Poster !== "N/A"
              ? movie1.Poster
              : "https://placehold.jp/3d4070/ffffff/150x150.png"
          }
          alt={movie1.Title}
        />
        <div className="mt-3 text-center">
          <span className="text-sm text-gray-600">
            {movie1.Type.toUpperCase()}
          </span>
          <h3 className="text-lg font-bold">{movie1.Title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;

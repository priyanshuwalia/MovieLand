import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="w-full h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 fixed top-0 left-0 z-50 flex items-center justify-between px-6 lg:px-12">
            <Link to="/" className="flex items-center gap-2 group">
                <Film className="w-8 h-8 text-blue-500 group-hover:text-purple-500 transition-colors duration-300" />
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                    MovieLand
                </span>
            </Link>
        </nav>
    );
};

export default Navbar;

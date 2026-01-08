import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-purple-500/30">
            <Navbar />
            <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto pb-12">
                {children}
            </main>

            <footer className="w-full py-6 text-center text-slate-500 border-t border-slate-800 mt-auto">
                <p>© {new Date().getFullYear()} MovieLand. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;

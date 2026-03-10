import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-white sticky top-0 z-50 border-b border-[#E9E9E9]">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Core Hexis" className="h-7 w-auto" />
            </div>

            {/* Desktop menu — right side */}
            <div className="hidden md:flex items-center gap-10 text-navy font-bold text-sm">
                <a href="#about" className="hover:text-navy-light transition-colors">about</a>
                <a href="#capabilities" className="hover:text-navy-light transition-colors">capabilities</a>
                <a href="#contact" className="hover:text-navy-light transition-colors">contact</a>
            </div>

            {/* Mobile hamburger */}
            <button
                className="md:hidden text-navy text-2xl font-bold"
                onClick={() => setMobileOpen(!mobileOpen)}
            >
                {mobileOpen ? '✕' : '☰'}
            </button>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-b border-[#E9E9E9] shadow-lg md:hidden z-50">
                    <div className="flex flex-col px-6 py-4 gap-4 text-navy font-bold text-base">
                        <a href="#about" onClick={() => setMobileOpen(false)} className="py-2 border-b border-[#E9E9E9]">about</a>
                        <a href="#capabilities" onClick={() => setMobileOpen(false)} className="py-2 border-b border-[#E9E9E9]">capabilities</a>
                        <a href="#contact" onClick={() => setMobileOpen(false)} className="py-2">contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

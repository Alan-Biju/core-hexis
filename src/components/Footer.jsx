import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white pt-14 md:pt-16 pb-8 px-6 md:px-8 border-t border-[#E9E9E9]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12">
                <div className="space-y-5 max-w-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-navy p-1.5 rounded">
                            <img src={logo} alt="Core Hexis" className="h-5 w-auto invert" />
                        </div>
                        <span className="text-lg font-black text-navy uppercase tracking-tight leading-tight">CORE<br />HEXIS</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-medium">
                        The industry's most experienced teams for capability development. We training with heart while we build them through dynamic education experts. And real world integration. Bridge the gap between education and performance.
                    </p>
                </div>

                <div className="flex gap-8 md:gap-12 text-navy font-bold text-base pt-2">
                    <a href="#about" className="hover:text-gold transition-colors">about</a>
                    <a href="#capabilities" className="hover:text-gold transition-colors">capabilities</a>
                    <a href="#contact" className="hover:text-gold transition-colors">contact</a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-12 md:mt-16 pt-6 border-t border-[#E9E9E9] flex justify-end">
                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

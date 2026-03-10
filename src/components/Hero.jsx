import React from 'react';
import heroImg from '../assets/hero_sketch.png';

const Hero = () => {
    return (
        <section className="relative bg-navy pt-16 md:pt-24 pb-0 px-6 md:px-8 flex flex-col items-center text-center overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-8 z-10 hero-animate">
                <h1 className="text-5xl md:text-7xl font-serif italic text-white leading-snug font-bold">
                    Empowering People,<br />
                    elevating organizations.
                </h1>
                <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto font-medium">
                    Build talent for deep insights, agility and growth for impact and success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                    <button className="bg-white text-navy px-8 py-3 rounded-md font-bold text-base hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                        Talk to us
                    </button>
                    <button className="border border-white/40 text-white px-8 py-3 rounded-md font-bold text-base hover:bg-white/10 hover:scale-105 transition-all duration-300">
                        Join our Waitlist
                    </button>
                </div>
            </div>

            <div className="mt-12 md:mt-16 w-full max-w-4xl mx-auto relative translate-y-12 md:translate-y-16 hero-image-animate">
                <img
                    src={heroImg}
                    alt="Team Collaboration"
                    className="w-full h-auto rounded-2xl shadow-xl"
                />
            </div>
        </section>
    );
};

export default Hero;

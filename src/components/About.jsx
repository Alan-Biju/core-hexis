import React from 'react';
import aboutImg from '../assets/about_sketch.png';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="py-12 md:py-16 bg-white px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`border border-[#E9E9E9] rounded-3xl overflow-hidden flex flex-col md:flex-row reveal ${isVisible ? 'visible' : ''}`}>
          <div className="w-full md:w-2/5 bg-skyBlue min-h-[250px] overflow-hidden">
            <img
              src={aboutImg}
              alt="Training Workshop"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="w-full md:w-3/5 p-8 md:p-14 flex flex-col justify-center space-y-5">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy">who we are?</h2>
            <p className="text-gray-500 text-base leading-relaxed">
              Core Hexis is a highly dynamic and focused team training and capability development organization committed to bridging the gap between education and real world performance. We believe that organizations thrive through rigorous, structured expertise, specialized services and results-driven strategies.
            </p>
            <div>
              <button className="bg-navy text-white px-7 py-3 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-navy-light hover:scale-105 transition-all duration-300">
                Presence & Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

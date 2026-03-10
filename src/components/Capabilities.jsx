import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Capabilities = () => {
    const [titleRef, titleVisible] = useScrollReveal();
    const [gridRef, gridVisible] = useScrollReveal(0.05);
    const [ctaRef, ctaVisible] = useScrollReveal();

    const capabilities = [
        { title: "Electrical", description: "Practical training in power systems, electrical design, safety, and industrial applications." },
        { title: "Electronics", description: "Hands-on learning in circuits, embedded systems, and modern electronic technologies." },
        { title: "IT & AIML", description: "Industry-focused training in software, data, artificial intelligence, and machine learning." },
        { title: "Mechanical", description: "Skill development in manufacturing, design, automation, and mechanical systems." },
        { title: "Functional Skills", description: "Training that enhances workplace efficiency, problem-solving, and professional capabilities." },
        { title: "Consulting", description: "Guidance and advisory support for organizations to build skills, systems, and performance." },
        { title: "Behavioural & Soft Skills", description: "Programs that strengthen communication, leadership, teamwork, and professional behaviour." },
        { title: "Emerging Technologies", description: "Exposure to future technologies shaping industries and next-generation careers." }
    ];

    return (
        <section id="capabilities" className="py-20 md:py-28 bg-white px-6 md:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
                <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy">what makes Core Hexis capable?</h2>
                </div>

                {/* Desktop: 4×2 grid with stagger */}
                <div ref={gridRef} className={`hidden md:grid md:grid-cols-4 gap-4 reveal-stagger ${gridVisible ? 'visible' : ''}`}>
                    {capabilities.map((cap, index) => (
                        <div key={index} className="p-7 rounded-xl border border-[#E9E9E9] bg-white space-y-3 hover:shadow-md hover:-translate-y-1 transition-all duration-400">
                            <h3 className="font-bold text-navy text-[15px]">{cap.title}</h3>
                            <p className="text-gray-400 text-[14px] leading-relaxed">{cap.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile: swipeable carousel */}
                <div
                    className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                    {[...capabilities, ...capabilities].map((cap, index) => (
                        <div key={index} className="min-w-[250px] snap-start p-7 rounded-xl border border-[#E9E9E9] bg-white space-y-3 flex-shrink-0">
                            <h3 className="font-bold text-navy text-[15px]">{cap.title}</h3>
                            <p className="text-gray-400 text-[14px] leading-relaxed">{cap.description}</p>
                        </div>
                    ))}
                </div>

                <div ref={ctaRef} className={`reveal ${ctaVisible ? 'visible' : ''}`}>
                    <a href="#contact" className="block mt-12 md:mt-16 p-10 md:p-14 bg-skyBlue rounded-3xl text-center space-y-4 cursor-pointer hover:bg-skyBlue-dark hover:scale-[1.01] transition-all duration-500">
                        <h3 className="text-2xl md:text-4xl font-extrabold text-navy">Get in touch with us!</h3>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                            Have questions about solutions, development? Need expert services, consultations?<br className="hidden md:block" />
                            We're here to help you ready your team's potential
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;

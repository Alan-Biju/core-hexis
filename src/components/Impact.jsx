import React from 'react';

const Impact = () => {
    return (
        <section className="py-20 md:py-28 bg-navy px-6 md:px-8">
            <div className="max-w-6xl mx-auto space-y-14 md:space-y-20">
                <div className="text-center py-4 md:py-8">
                    <h2 className="text-4xl md:text-7xl font-serif italic font-bold text-white leading-tight">
                        Driven by purpose<br />
                        Guided by impact
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="bg-white p-8 md:p-10 rounded-2xl space-y-4">
                        <h3 className="text-xl font-extrabold text-navy flex items-center gap-3">
                            <span className="text-2xl">📋</span> Our Mission
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed">
                            To build a bridge between talent potential and industry needs and ensure organizations have the expertise and insight to scale beyond.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl space-y-4">
                        <h3 className="text-xl font-extrabold text-navy flex items-center gap-3">
                            <span className="text-2xl">🚀</span> Our Vision
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed">
                            The idea is to build dynamic and thriving organizations where every person is at peak excellence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;

import React from 'react';

const Features = () => {
    const features = [
        {
            title: "Deep Insights",
            description: "Delivering a depth of research and sound knowledge relevant to measure. Thus, consistently deliver long-term value for businesses and organizations.",
            icon: "🔍"
        },
        {
            title: "Agile Methodology",
            description: "Our training systems build high skill and quality in learners. Ensuring they perform tasks fast with higher precision and results.",
            icon: "⚡"
        },
        {
            title: "Results Driven",
            description: "Focusing heavily on outcomes that matter most for businesses and organizations. Ensuring every step is guided with clear metrics of growth and performance.",
            icon: "📈"
        },
        {
            title: "Collaborative Approach",
            description: "Ensuring every business and organization has access to deep insights to make relevant decisions and achieve consistent growth and corporate success.",
            icon: "🤝"
        }
    ];

    return (
        <section className="pt-28 md:pt-36 pb-16 md:pb-20 bg-white px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy">what makes Core Hexis different?</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="space-y-3">
                            <div className="text-2xl mb-1">{feature.icon}</div>
                            <h3 className="text-base font-extrabold text-navy">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

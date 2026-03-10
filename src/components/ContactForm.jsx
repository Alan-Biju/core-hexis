import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContactForm = () => {
    const [leftRef, leftVisible] = useScrollReveal();
    const [rightRef, rightVisible] = useScrollReveal(0.1);

    return (
        <section id="contact" className="py-16 md:py-20 bg-white px-6 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
                <div ref={leftRef} className={`flex-1 space-y-8 md:space-y-10 reveal ${leftVisible ? 'visible' : ''}`}>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">contact us</h2>
                        <p className="mt-4 text-base text-gray-400 max-w-xs font-medium">
                            consult with our training experts for support or partnerships
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white border border-[#E9E9E9] p-5 rounded-2xl flex items-center gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <span className="text-2xl">📧</span>
                            <div>
                                <h4 className="font-extrabold text-navy uppercase text-[10px] tracking-widest">Email</h4>
                                <p className="text-gray-600 text-base font-bold">hello@corehexis.com</p>
                                <p className="text-gray-300 text-[10px]">www.corehexis.com/contact-form</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E9E9E9] p-5 rounded-2xl flex items-center gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <span className="text-2xl">📞</span>
                            <div>
                                <h4 className="font-extrabold text-navy uppercase text-[10px] tracking-widest">Phone</h4>
                                <p className="text-gray-600 text-base font-bold">+91 8951xxx90</p>
                                <p className="text-gray-300 text-[10px]">consult support specialized advice</p>
                            </div>
                        </div>

                        <div className="bg-white border border-[#E9E9E9] p-5 rounded-2xl flex items-center gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                            <span className="text-2xl">📍</span>
                            <div>
                                <h4 className="font-extrabold text-navy uppercase text-[10px] tracking-widest">Address</h4>
                                <p className="text-gray-600 text-base font-bold">#45, 1st main, 1st cross, M.H Circle,</p>
                                <p className="text-gray-300 text-[10px]">Vijayanagara – Bangalore-40</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={rightRef} className={`flex-1 border border-[#E9E9E9] p-8 md:p-10 rounded-3xl reveal ${rightVisible ? 'visible' : ''}`}>
                    <h3 className="text-2xl font-extrabold text-navy mb-8">Say hello!</h3>
                    <form className="space-y-6">
                        <div className="border-b border-[#E9E9E9] pb-2 focus-within:border-navy transition-colors duration-300">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Name</label>
                            <input type="text" placeholder="write name here." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-[#E9E9E9] pb-2 focus-within:border-navy transition-colors duration-300">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Email</label>
                            <input type="email" placeholder="write email here." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-[#E9E9E9] pb-2 focus-within:border-navy transition-colors duration-300">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Phone Number</label>
                            <input type="text" placeholder="+91..." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-[#E9E9E9] pb-2 focus-within:border-navy transition-colors duration-300">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Topic</label>
                            <input type="text" placeholder="write technical area here." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-[#E9E9E9] pb-2 focus-within:border-navy transition-colors duration-300">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Message</label>
                            <textarea placeholder="write call details or message here." rows="2" className="w-full bg-transparent focus:outline-none text-gray-500 text-base resize-none"></textarea>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button type="submit" className="text-navy font-extrabold uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all duration-300">
                                Send our message <span className="text-lg">&rarr;</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;

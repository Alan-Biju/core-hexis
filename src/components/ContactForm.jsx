import React from 'react';

const ContactForm = () => {
    return (
        <section id="contact" className="py-16 md:py-20 bg-white px-6 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16">
                <div className="flex-1 space-y-8 md:space-y-10">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy">contact us</h2>
                        <p className="mt-4 text-base text-gray-400 max-w-xs font-medium">
                            consult with our training experts for support or partnerships
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center gap-5">
                            <span className="text-2xl">📧</span>
                            <div>
                                <h4 className="font-extrabold text-navy uppercase text-[10px] tracking-widest">Email</h4>
                                <p className="text-gray-600 text-base font-bold">hello@corehexis.com</p>
                                <p className="text-gray-300 text-[10px]">www.corehexis.com/contact-form</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center gap-5">
                            <span className="text-2xl">📞</span>
                            <div>
                                <h4 className="font-extrabold text-navy uppercase text-[10px] tracking-widest">Phone</h4>
                                <p className="text-gray-600 text-base font-bold">+1 (555) 012-3456</p>
                                <p className="text-gray-300 text-[10px]">consult support specialized advice</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center gap-5">
                            <span className="text-2xl">📍</span>
                            <div>
                                <h4 className="font-extrabold text-navy uppercase text-[10px] tracking-widest">Address</h4>
                                <p className="text-gray-600 text-base font-bold">123 Innovation Way, Tech Suite 500</p>
                                <p className="text-gray-300 text-[10px]">California, San Francisco</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 border border-gray-100 p-8 md:p-10 rounded-3xl">
                    <h3 className="text-2xl font-extrabold text-navy mb-8">Say hello!</h3>
                    <form className="space-y-6">
                        <div className="border-b border-gray-100 pb-2">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Name</label>
                            <input type="text" placeholder="write name here." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-gray-100 pb-2">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Email</label>
                            <input type="email" placeholder="write email here." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-gray-100 pb-2">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Phone Number</label>
                            <input type="text" placeholder="+1..." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-gray-100 pb-2">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Topic</label>
                            <input type="text" placeholder="write technical area here." className="w-full bg-transparent focus:outline-none text-gray-500 text-base" />
                        </div>

                        <div className="border-b border-gray-100 pb-2">
                            <label className="text-[10px] font-extrabold text-navy uppercase tracking-widest block mb-1">Message</label>
                            <textarea placeholder="write call details or message here." rows="2" className="w-full bg-transparent focus:outline-none text-gray-500 text-base resize-none"></textarea>
                        </div>

                        <div className="flex justify-end pt-2">
                            <button type="submit" className="text-navy font-extrabold uppercase text-xs tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
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

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Impact from './components/Impact';
import Capabilities from './components/Capabilities';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-navy">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Impact />
        <Capabilities />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;

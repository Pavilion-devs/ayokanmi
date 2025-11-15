import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* <Background /> */}
      <Navbar />
      <Sidebar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

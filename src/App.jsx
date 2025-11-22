import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function HomePage() {
  return (
    <>
      <Sidebar />
      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased" style={{ fontFamily: 'var(--font-sans)' }}>
        {/* <Background /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

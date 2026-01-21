import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsMarquee from './components/ToolsMarquee';
import Services from './components/Services';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import BeforeWeBegin from './components/BeforeWeBegin';
import Contact from './components/Contact';
import LoadingPage from './components/LoadingPage';
import Footer from './components/Footer';

import { 
  ScrollProgress
} from './components/AnimationUtils';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add page transition effect
    document.body.classList.add('page-transition');
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 100);

    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="App">
      <ScrollProgress />
      
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <ToolsMarquee />
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <BeforeWeBegin />
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;

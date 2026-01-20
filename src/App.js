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
  ScrollProgress, 
  FloatingActionButton 
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
      <FloatingActionButton onClick={scrollToTop}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </FloatingActionButton>
      
      <Footer />
    </div>
  );
}

export default App;

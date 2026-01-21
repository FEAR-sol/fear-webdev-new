import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close mobile menu with ESC key
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#home', label: 'HOME' },
    { href: '#services', label: 'SERVICES' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' }
  ];

  // Handle navigation click with smooth scrolling
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const navbarHeight = 120; // Account for fixed navbar height
        const targetPosition = target.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-white/80 border-b border-gray-200/50 shadow-lg' 
          : 'backdrop-blur-md bg-transparent border-b border-gray-200/20'
      }`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-8 py-2.5 mobile-menu-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="cursor-pointer"
            variants={logoVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src="/FEAR LOGO.png"
              alt="FEAR Logo"
              className="h-20 md:h-[90px] lg:h-[100px] w-auto"
              whileHover={{
                rotateY: 360,
                transition: { duration: 0.6 }
              }}
            />
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            variants={menuVariants}
          >
            {navItems.map((item, index) => (
              <motion.div key={item.href} variants={itemVariants}>
                <motion.a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="nav-item text-sm font-medium tracking-wider transition-all duration-300 relative group cursor-pointer"
                  style={{ color: '#000000' }}
                  whileHover={{ 
                    scale: 1.05,
                    color: '#3b82f6'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  
                  {/* Animated underline */}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.a>
              </motion.div>
            ))}
            
            {/* Back to Home Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="https://www.fearagency.in/"
                onClick={(e) => handleNavClick(e, '#home')}
                className="px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border-2 cursor-pointer"
                style={{ 
                  backgroundColor: '#452F2F',
                  color: '#FFFFFF',
                  borderColor: '#452F2F'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'transparent',
                  color: '#452F2F'
                }}
                whileTap={{ scale: 0.95 }}
              >
                BACK TO HOME
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            initial="closed"
            animate={isMobileMenuOpen ? "open" : "closed"}
          >
            <motion.span
              className="block w-6 h-0.5 bg-black mb-1"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-black mb-1"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-black"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-6 pb-6 mobile-menu-container"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className="flex flex-col space-y-4"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-lg font-medium tracking-wider py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer mobile-nav-item"
                    style={{ color: '#000000' }}
                    variants={{
                      closed: { x: -20, opacity: 0 },
                      open: { x: 0, opacity: 1 }
                    }}
                    whileHover={{ 
                      x: 10,
                      color: '#3b82f6',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                {/* Mobile Back to Home Button */}
                <motion.a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="text-lg font-bold tracking-wider py-3 px-6 rounded-lg transition-all duration-300 text-center border-2 mt-4 cursor-pointer"
                  style={{ 
                    backgroundColor: '#452F2F',
                    color: '#FFFFFF',
                    borderColor: '#452F2F'
                  }}
                  variants={{
                    closed: { x: -20, opacity: 0 },
                    open: { x: 0, opacity: 1 }
                  }}
                  whileHover={{ 
                    backgroundColor: 'transparent',
                    color: '#452F2F',
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  BACK TO HOME
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

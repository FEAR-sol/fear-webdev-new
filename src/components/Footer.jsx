import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const handleTermsClick = () => {
    window.open('/TERMS AND POLICIES (2).pdf', '_blank');
  };

  return (
    <footer 
      className="relative w-full py-8 border-t-2 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F8F7FA 0%, #F3F0F7 25%, #EDE8F4 50%, #E6E1ED 75%, rgba(69, 47, 47, 0.08) 100%)',
        borderColor: 'rgba(69, 47, 47, 0.1)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle geometric shapes */}
        <motion.div 
          className="absolute top-4 left-10 w-2 h-2 rotate-45 opacity-20" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute top-6 right-16 w-1.5 h-1.5 rounded-full opacity-25" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            y: [-10, 10, -10],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        
        <motion.div 
          className="absolute bottom-4 left-20 w-2.5 h-2.5 rotate-12 opacity-15" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            rotate: [12, 192, 12],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />

        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-0 -right-16 w-32 h-32 rounded-full blur-2xl opacity-5" 
          style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.3) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-0 -left-16 w-40 h-40 rounded-full blur-2xl opacity-3" 
          style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.08, 0.03]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Side - Copyright */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            
            <div className="w-px h-6" style={{ backgroundColor: 'rgba(69, 47, 47, 0.3)' }}></div>
            
            <motion.div 
              className="text-sm font-medium"
              style={{ color: '#666666' }}
              whileHover={{ color: '#452F2F' }}
              transition={{ duration: 0.3 }}
            >
              © 2026 FEAR
            </motion.div>
          </motion.div>

          {/* Right Side - Terms and Conditions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.button
              onClick={handleTermsClick}
              className="group relative px-6 py-3 rounded-2xl font-semibold text-sm transition-all duration-300 overflow-hidden"
              style={{ 
                backgroundColor: 'rgba(69, 47, 47, 0.08)',
                color: '#452F2F',
                border: '1px solid rgba(69, 47, 47, 0.2)'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(69, 47, 47, 0.12)',
                borderColor: 'rgba(69, 47, 47, 0.3)',
                boxShadow: '0 4px 12px rgba(69, 47, 47, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Terms & Conditions
                <motion.svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </motion.svg>
              </span>
              
              {/* Hover effect overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                whileHover={{ 
                  opacity: 0.1,
                  x: ['-100%', '100%']
                }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
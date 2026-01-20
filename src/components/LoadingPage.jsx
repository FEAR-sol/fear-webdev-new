import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingPage = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(50% 183%, rgb(230, 225, 237) 0%, rgb(223, 218, 230) 5.40541%, rgba(35, 12, 71, 0.65) 93.6937%)'
          }}
          variants={containerVariants}
          initial="hidden"
          animate="hidden"
          exit="exit"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating geometric shapes */}
            <motion.div 
              className="absolute top-20 left-20 w-4 h-4 rotate-45 opacity-30" 
              style={{ backgroundColor: 'rgba(69, 47, 47, 0.6)' }}
              animate={{ 
                rotate: [45, 225, 45],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.div 
              className="absolute top-40 right-32 w-6 h-6 rounded-full opacity-40" 
              style={{ backgroundColor: 'rgba(69, 47, 47, 0.5)' }}
              animate={{ 
                y: [-30, 30, -30],
                scale: [1, 1.4, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            
            <motion.div 
              className="absolute bottom-40 left-40 w-3 h-3 rotate-12 opacity-35" 
              style={{ backgroundColor: 'rgba(69, 47, 47, 0.7)' }}
              animate={{ 
                rotate: [12, 192, 12],
                opacity: [0.35, 0.7, 0.35]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            />
            
            <motion.div 
              className="absolute top-60 right-60 w-5 h-5 rounded-full opacity-25" 
              style={{ backgroundColor: 'rgba(69, 47, 47, 0.4)' }}
              animate={{ 
                y: [-25, 25, -25],
                x: [-15, 15, -15],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 3 }}
            />

            {/* Large decorative circles */}
            <motion.div 
              className="absolute top-10 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20" 
              style={{ backgroundColor: 'rgba(69, 47, 47, 0.3)' }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
                x: [-20, 20, -20]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            
            <motion.div 
              className="absolute bottom-10 -left-32 w-80 h-80 rounded-full blur-3xl opacity-15" 
              style={{ backgroundColor: 'rgba(69, 47, 47, 0.2)' }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.3, 0.15],
                y: [-30, 30, -30]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* FEAR Text Animation */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                {['F', 'E', 'A', 'R'].map((letter, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.span
                      className="text-8xl lg:text-9xl font-black tracking-wider"
                      style={{ 
                        color: '#452F2F',
                        textShadow: '0 8px 16px rgba(69, 47, 47, 0.3)'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 15,
                        textShadow: '0 12px 24px rgba(69, 47, 47, 0.4)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {letter}
                    </motion.span>
                    
                    {/* Letter glow effect */}
                    <motion.div
                      className="absolute inset-0 text-8xl lg:text-9xl font-black tracking-wider opacity-20 blur-sm"
                      style={{ color: '#452F2F' }}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      {letter}
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Tagline */}
              <motion.div
                className="text-xl lg:text-2xl font-medium tracking-wide opacity-80"
                style={{ color: '#452F2F' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                FACE EVERYTHING AND RISE
              </motion.div>
            </div>

            {/* Progress Bar */}
            <motion.div
              className="w-80 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <div className="mb-4">
                <motion.div
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: '#452F2F' }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading Experience...
                </motion.div>
              </div>
              
              <div 
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ backgroundColor: 'rgba(69, 47, 47, 0.2)' }}
              >
                <motion.div
                  className="h-full rounded-full relative overflow-hidden"
                  style={{ 
                    backgroundColor: '#452F2F',
                    width: `${progress}%`
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </div>
              
              <motion.div
                className="mt-3 text-xs font-medium"
                style={{ color: '#452F2F' }}
              >
                {Math.round(progress)}%
              </motion.div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: '#452F2F' }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>

            {/* Subtle brand message */}
            <motion.div
              className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <div className="text-sm font-light" style={{ color: '#452F2F' }}>
                Crafting Digital Excellence
              </div>
            </motion.div>
          </div>

          {/* Particle Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full opacity-30"
                style={{ 
                  backgroundColor: '#452F2F',
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  y: [-20, -100, -20],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TextReveal, FadeIn, ParallaxElement, AnimatedCounter } from './AnimationUtils';

const Hero = () => {
  useEffect(() => {
    let currentCard = 1;

    const showCard = (cardNumber) => {
      if (cardNumber === currentCard) return;

      const currentCardElement = document.getElementById(`card-${currentCard}`);
      const newCardElement = document.getElementById(`card-${cardNumber}`);
      const dots = document.querySelectorAll('.card-dot');
      const thumbs = document.querySelectorAll('.card-thumb');

      if (currentCardElement) {
        currentCardElement.classList.add('turning');
        currentCardElement.classList.remove('active');
      }

      setTimeout(() => {
        if (newCardElement) {
          newCardElement.classList.add('active');
          newCardElement.classList.remove('turning');
        }
        
        dots.forEach((dot, index) => {
          if (index + 1 === cardNumber) {
            dot.classList.add('active');
          } else {
            dot.classList.remove('active');
          }
        });

        thumbs.forEach((thumb, index) => {
          if (index + 1 === cardNumber) {
            thumb.classList.add('active');
          } else {
            thumb.classList.remove('active');
          }
        });

        currentCard = cardNumber;
      }, 400);
    };

    window.showCard = showCard;

    const autoRotate = setInterval(() => {
      const nextCard = currentCard >= 4 ? 1 : currentCard + 1;
      showCard(nextCard);
    }, 5000);

    return () => {
      clearInterval(autoRotate);
      delete window.showCard;
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full overflow-hidden" 
      style={{
        background: 'radial-gradient(50% 183%, rgb(230, 225, 237) 0%, rgb(223, 218, 230) 5.40541%, rgba(35, 12, 71, 0.65) 93.6937%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 rotate-45" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.6)' }}
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 rounded-full" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.4)' }}
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        
        <motion.div 
          className="absolute bottom-40 left-20 w-3 h-3 rotate-12" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.5)' }}
          animate={{ 
            rotate: [12, 192, 12],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(rgba(230, 225, 237, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 225, 237, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Large decorative circles with parallax */}
        <ParallaxElement speed={0.3}>
          <motion.div 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30" 
            style={{ backgroundColor: 'rgba(230, 225, 237, 0.4)' }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </ParallaxElement>
        
        <ParallaxElement speed={0.2}>
          <motion.div 
            className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl opacity-20" 
            style={{ backgroundColor: 'rgba(230, 225, 237, 0.3)' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </ParallaxElement>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div 
            className="space-y-10 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border" 
              style={{ 
                backgroundColor: 'rgba(230, 225, 237, 0.3)', 
                borderColor: 'rgba(230, 225, 237, 0.5)'
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: '#452F2F' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-medium" style={{ color: '#452F2F' }}>
                Premium Web Solutions
              </span>
            </motion.div>

            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h1 
                className="font-bold leading-[0.9] tracking-tight" 
                style={{ 
                  color: '#000000', 
                  fontSize: '50px'
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.span 
                  className="block"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  FEAR{' '}
                  <motion.span 
                    className="font-light opacity-80 gradient-text" 
                    style={{ fontSize: '40px' }}
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    in Form
                  </motion.span>
                </motion.span>
                <motion.span 
                  className="block"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  WEB{' '}
                  <motion.span 
                    className="font-light opacity-80 gradient-text" 
                    style={{ fontSize: '40px' }}
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    in Function
                  </motion.span>
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="w-12 h-0.5" 
                  style={{ backgroundColor: '#452F2F' }}
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <motion.p 
                  className="text-xl font-semibold tracking-wide" 
                  style={{ color: '#452F2F' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  FACE EVERYTHING AND RISE
                </motion.p>
              </motion.div>
            </motion.div>
            
            <TextReveal delay={300}>
              <p className="text-lg leading-relaxed max-w-xl font-light text-justify" style={{ color: '#424242' }}>
                Crafting digital experiences that transcend expectations. Modern, conversion-focused designs 
                that reflect your brand identity and deliver seamless user experiences across all platforms.
              </p>
            </TextReveal>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden inline-block" 
                style={{ backgroundColor: '#452F2F' }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(69, 47, 47, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Your Project</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  whileHover={{ 
                    opacity: 0.2,
                    x: ['-100%', '100%']
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              
              <motion.a
                href="#services"
                className="group px-8 py-4 rounded-full font-semibold border-2 backdrop-blur-sm inline-block" 
                style={{ 
                  color: '#424242', 
                  borderColor: 'rgba(230, 225, 237, 0.6)',
                  backgroundColor: 'rgba(230, 225, 237, 0.2)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(230, 225, 237, 0.4)',
                  borderColor: 'rgba(230, 225, 237, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Our Services
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex items-center gap-8 pt-8"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>
                  <AnimatedCounter end={8} suffix="+" />
                </div>
                <div className="text-sm font-medium opacity-70" style={{ color: '#424242' }}>Projects</div>
              </div>
              <div className="w-px h-12" style={{ backgroundColor: 'rgba(230, 225, 237, 0.5)' }}></div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-sm font-medium opacity-70" style={{ color: '#424242' }}>Satisfaction</div>
              </div>
              <div className="w-px h-12" style={{ backgroundColor: 'rgba(230, 225, 237, 0.5)' }}></div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: '#000000' }}>24/7</div>
                <div className="text-sm font-medium opacity-70" style={{ color: '#424242' }}>Support</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Card Carousel */}
          <FadeIn delay={0.8} direction="right">
            <div className="relative">
              {/* Card Stack Container */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Main Card Display */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Back cards for depth */}
                  <motion.div 
                    className="absolute inset-0 transform translate-x-4 translate-y-4 rounded-3xl shadow-2xl opacity-30" 
                    style={{ backgroundColor: 'rgba(230, 225, 237, 0.4)' }}
                    animate={{ 
                      x: [16, 20, 16],
                      y: [16, 20, 16]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div 
                    className="absolute inset-0 transform translate-x-2 translate-y-2 rounded-3xl shadow-xl opacity-60" 
                    style={{ backgroundColor: 'rgba(230, 225, 237, 0.6)' }}
                    animate={{ 
                      x: [8, 12, 8],
                      y: [8, 12, 8]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  {/* Main Card with Page Turn Animation */}
                  <motion.div 
                    className="relative rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg border card-container" 
                    style={{ 
                      backgroundColor: 'rgba(230, 230, 237, 0.95)',
                      borderColor: 'rgba(230, 225, 237, 0.3)',
                      height: '450px',
                      width: '100%',
                      maxWidth: '600px'
                    }}
                    whileHover={{ 
                      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    {/* Card Pages */}
                    {[1, 2, 3, 4].map((cardNum) => (
                      <div key={cardNum} className={`card-page ${cardNum === 1 ? 'active' : ''}`} id={`card-${cardNum}`}>
                        <motion.img 
                          src={`/web${cardNum}.png`}
                          alt={`FEAR Web Development Interface ${cardNum}`}
                          className="w-full h-full object-contain bg-white"
                          style={{ objectPosition: 'center' }}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        <motion.div 
                          className="absolute bottom-4 left-4 backdrop-blur-sm rounded-lg p-2" 
                          style={{ backgroundColor: 'rgba(230, 230, 237, 0.9)' }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          <span className="text-sm font-semibold" style={{ color: '#424242' }}>
                            {['Web Interface', 'Design Portfolio', 'Performance', 'Innovation'][cardNum - 1]}
                          </span>
                        </motion.div>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Card Navigation Dots */}
                <motion.div 
                  className="flex justify-center gap-3 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  {[1, 2, 3, 4].map((cardNum) => (
                    <motion.button 
                      key={cardNum}
                      className={`card-dot ${cardNum === 1 ? 'active' : ''} w-3 h-3 rounded-full transition-all duration-300`}
                      style={{ backgroundColor: '#452F2F' }}
                      onClick={() => window.showCard(cardNum)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </motion.div>

                {/* Card Thumbnails */}
                <motion.div 
                  className="flex justify-center gap-2 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  {[1, 2, 3, 4].map((cardNum) => (
                    <motion.div 
                      key={cardNum}
                      className={`card-thumb ${cardNum === 1 ? 'active' : ''} w-16 h-12 rounded-lg cursor-pointer transition-all duration-300 border-2 overflow-hidden`}
                      style={{ borderColor: cardNum === 1 ? '#452F2F' : 'transparent' }}
                      onClick={() => window.showCard(cardNum)}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={`/web${cardNum}.png`}
                        alt={`Web ${cardNum}`}
                        className="w-full h-full object-contain"
                        style={{ backgroundColor: 'rgba(230, 230, 237, 0.2)' }}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Floating UI Elements */}
              <motion.div 
                className="absolute -top-8 -left-8 backdrop-blur-sm rounded-2xl shadow-lg p-4" 
                style={{ backgroundColor: 'rgba(230, 230, 237, 0.9)' }}
                variants={floatingVariants}
                animate="animate"
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: '#28ca42' }}
                    animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-semibold" style={{ color: '#424242' }}>Live</span>
                </div>
              </motion.div>

              <motion.div 
                className="absolute top-1/3 -left-12 backdrop-blur-sm rounded-xl shadow-lg p-3" 
                style={{ backgroundColor: 'rgba(230, 230, 237, 0.9)' }}
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="text-xl" style={{ color: '#452F2F' }}>&lt;/&gt;</div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div 
                className="absolute top-16 right-8 w-32 h-32 rounded-full blur-2xl opacity-40" 
                style={{ backgroundColor: 'rgba(230, 225, 237, 0.6)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-20 left-4 w-24 h-24 rounded-full blur-2xl opacity-30" 
                style={{ backgroundColor: 'rgba(230, 225, 237, 0.5)' }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 3 }}
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium opacity-70" style={{ color: '#424242' }}>Scroll to explore</span>
          <motion.svg 
            className="w-5 h-5 opacity-70" 
            style={{ color: '#424242' }} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
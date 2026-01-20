import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';

// Enhanced Intersection Observer Hook for scroll animations
export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.disconnect();
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
        ...options
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

// Enhanced Custom cursor component with Framer Motion
export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => setIsActive(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    const handleMouseEnterDocument = () => setIsHidden(false);
    const handleMouseLeaveDocument = () => setIsHidden(true);

    const interactiveElements = document.querySelectorAll('button, a, .cursor-target, input, textarea');
    
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnterDocument);
    document.addEventListener('mouseleave', handleMouseLeaveDocument);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnterDocument);
      document.removeEventListener('mouseleave', handleMouseLeaveDocument);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className="cursor-follow"
      animate={{
        x: position.x - 10,
        y: position.y - 10,
        scale: isActive ? 2 : 1,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    />
  );
};

// Enhanced Scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div 
      className="scroll-progress"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="scroll-progress-bar" 
        style={{ scaleX: scrollYProgress }}
        transformOrigin="0%"
      />
    </motion.div>
  );
};

// Enhanced Floating Action Button
export const FloatingActionButton = ({ onClick, children, hideOnTop = true }) => {
  const [isVisible, setIsVisible] = useState(!hideOnTop);

  useEffect(() => {
    if (!hideOnTop) return;

    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [hideOnTop]);

  return (
    <motion.button
      className="fab"
      onClick={onClick}
      aria-label="Scroll to top"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ 
        scale: isVisible ? 1 : 0,
        rotate: isVisible ? 0 : -180,
        y: isVisible ? 0 : 100
      }}
      whileHover={{ 
        scale: 1.1, 
        y: -4,
        boxShadow: "0 12px 40px rgba(59, 130, 246, 0.4)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      {children}
    </motion.button>
  );
};

// Enhanced Animated counter component
export const AnimatedCounter = ({ end, duration = 2000, start = 0, suffix = "" }) => {
  const [count, setCount] = useState(start);
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * (end - start) + start));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, start]);

  return (
    <motion.span 
      ref={ref} 
      className="counter"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

// Enhanced Text reveal animation component
export const TextReveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div 
      ref={ref} 
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: delay / 1000,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Enhanced Staggered children animation
export const StaggeredReveal = ({ children, className = '', staggerDelay = 0.1 }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={itemVariants}>{children}</motion.div>
      }
    </motion.div>
  );
};

// Enhanced Parallax scroll effect
export const ParallaxElement = ({ children, speed = 0.5, className = '' }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};

// Enhanced Image reveal animation
export const ImageReveal = ({ src, alt, className = '' }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  return (
    <motion.div 
      ref={ref} 
      className={`image-reveal ${className}`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.img 
        src={src} 
        alt={alt}
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.div>
  );
};

// Enhanced Magnetic button effect
export const MagneticButton = ({ children, className = '', strength = 0.3, ...props }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef();

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      className={`btn-magnetic ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Enhanced Progress bar component
export const ProgressBar = ({ progress, className = '', label = '' }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.5 });

  return (
    <div className={`progress-container ${className}`}>
      {label && (
        <motion.div 
          className="progress-label mb-2 text-sm font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.div>
      )}
      <div ref={ref} className="progress-bar">
        <motion.div 
          className="progress-fill"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: progress / 100 } : {}}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          transformOrigin="left"
        />
      </div>
    </div>
  );
};

// Page transition wrapper
export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation wrapper
export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale animation wrapper
export const ScaleIn = ({ children, delay = 0, className = '' }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default {
  useScrollAnimation,
  CustomCursor,
  ScrollProgress,
  FloatingActionButton,
  AnimatedCounter,
  TextReveal,
  StaggeredReveal,
  ParallaxElement,
  ImageReveal,
  MagneticButton,
  ProgressBar,
  PageTransition,
  FadeIn,
  ScaleIn
};
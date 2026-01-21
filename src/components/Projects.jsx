import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FadeIn } from './AnimationUtils';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Penny Wise",
      category: "Financial Software",
      description: "A comprehensive money management system designed to help users track expenses, manage budgets, and achieve financial goals with intuitive interface and smart analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "/pennywise.png",
      link: "https://pennywise-tau.vercel.app/",
      status: "Live",
      color: "#10b981"
    },
    {
      id: 2,
      title: "SJC International Hackathon",
      category: "Event Platform",
      description: "Official website for the international hackathon happening in September at College of Engineering. Features registration, event details, and participant management.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
      image: "/SJC.png",
      link: "#",
      status: "Coming Soon",
      color: "#3b82f6"
    },
    {
      id: 3,
      title: "Subscrybe",
      category: "Crypto Management",
      description: "Advanced cryptocurrency portfolio management software with real-time tracking, analytics, and automated trading features for digital asset management.",
      technologies: ["React", "Web3.js", "Node.js", "PostgreSQL"],
      image: "/subscrybe.png",
      link: "https://subscrybe-wey4.vercel.app/",
      status: "Live",
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "TechVerse",
      category: "Technology Blog",
      description: "Multiverse of Technology - A comprehensive blog platform covering new technology trends, innovations, and breakthroughs in the tech world with engaging content.",
      technologies: ["Next.js", "MDX", "Tailwind", "Vercel"],
      image: "/techverse.png",
      link: "https://yashaswi1423.github.io/TechVerse/",
      status: "Live",
      color: "#8b5cf6"
    }
  ];

  const handleProjectClick = (link) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

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

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full py-20 overflow-hidden"
      style={{
        background: 'radial-gradient(50% 183%, rgb(230, 225, 237) 0%, rgb(223, 218, 230) 5.40541%, rgba(35, 12, 71, 0.65) 93.6937%)'
      }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes with motion */}
        <motion.div 
          className="absolute top-40 left-20 w-5 h-5 rotate-45 opacity-30" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.6)' }}
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute top-72 right-32 w-7 h-7 rounded-full opacity-40" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.5)' }}
          animate={{ 
            y: [-30, 30, -30],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        />
        
        <motion.div 
          className="absolute bottom-56 left-40 w-4 h-4 rotate-12 opacity-35" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.7)' }}
          animate={{ 
            rotate: [12, 192, 12],
            opacity: [0.35, 0.7, 0.35]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 2.5 }}
        />
        
        <motion.div 
          className="absolute top-56 right-56 w-6 h-6 rounded-full opacity-25" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.4)' }}
          animate={{ 
            y: [-25, 25, -25],
            x: [-15, 15, -15],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 3.5 }}
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `linear-gradient(rgba(230, 225, 237, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(230, 225, 237, 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px', '0px 0px']
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Large decorative circles with motion */}
        <motion.div 
          className="absolute top-32 -right-48 w-96 h-96 rounded-full blur-3xl opacity-15" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.4)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [-30, 30, -30]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-32 -left-48 w-80 h-80 rounded-full blur-3xl opacity-20" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.3)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [-40, 40, -40]
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          {/* Badge */}
          <FadeIn delay={0}>
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-sm border mb-8 cursor-pointer" 
              style={{ 
                backgroundColor: 'rgba(230, 225, 237, 0.3)', 
                borderColor: 'rgba(230, 225, 237, 0.5)'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(230, 225, 237, 0.4)',
                borderColor: 'rgba(230, 225, 237, 0.7)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: '#452F2F' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold tracking-wide" style={{ color: '#452F2F' }}>
                OUR WORK
              </span>
            </motion.div>
          </FadeIn>

          {/* Main Title */}
          <FadeIn delay={0.2}>
            <motion.h2 
              className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight" 
              style={{ color: '#000000' }}
              whileHover={{ 
                scale: 1.02,
                textShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="inline-block"
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                PROJECTS
              </motion.span>
            </motion.h2>
          </FadeIn>
          
          {/* Subtitle */}
          <FadeIn delay={0.4}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div 
                className="w-16 h-0.5" 
                style={{ backgroundColor: '#452F2F' }}
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <p className="text-xl font-medium tracking-wide max-w-2xl" style={{ color: '#452F2F' }}>
                Showcasing our latest digital transformations
              </p>
              <motion.div 
                className="w-16 h-0.5" 
                style={{ backgroundColor: '#452F2F' }}
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </FadeIn>
        </div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="group relative cursor-pointer"
              variants={projectVariants}
              onClick={() => handleProjectClick(project.link)}
              onHoverStart={() => !isMobile && setHoveredProject(project.id)}
              onHoverEnd={() => !isMobile && setHoveredProject(null)}
              whileHover={!isMobile ? { 
                scale: 1.02,
                y: -12,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              } : {}}
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced Card Shadow/Depth */}
              <motion.div 
                className="absolute inset-0 transform translate-x-3 translate-y-3 rounded-3xl opacity-20" 
                style={{ backgroundColor: 'rgba(69, 47, 47, 0.3)' }}
                whileHover={{ 
                  opacity: 0.3,
                  x: 6,
                  y: 6,
                  scale: 1.02
                }}
                transition={{ duration: 0.4 }}
              />
              
              <motion.div 
                className="relative rounded-3xl shadow-2xl backdrop-blur-lg border overflow-hidden"
                style={{ 
                  backgroundColor: 'rgba(230, 225, 237, 0.95)',
                  borderColor: 'rgba(230, 225, 237, 0.4)'
                }}
                whileHover={{ 
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
                  borderColor: project.color + '40'
                }}
              >
                {/* Enhanced Project Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-3xl">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    whileHover={!isMobile ? { scale: 1.1 } : {}}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    loading="lazy"
                  />
                  
                  {/* Enhanced Image Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Animated Status Badge */}
                  <motion.div 
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-bold backdrop-blur-sm" 
                    style={{ 
                      backgroundColor: project.status === 'Live' ? 'rgba(40, 202, 66, 0.9)' : 'rgba(249, 115, 22, 0.9)', 
                      color: 'white' 
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.status}
                  </motion.div>

                  {/* Enhanced Project Number */}
                  <motion.div 
                    className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm sm:text-lg font-bold backdrop-blur-sm" 
                    style={{ 
                      backgroundColor: 'rgba(230, 225, 237, 0.9)', 
                      color: '#452F2F' 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: project.color + '20',
                      color: project.color
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(project.id).padStart(2, '0')}
                  </motion.div>

                  {/* Enhanced Hover Overlay with Link Icon */}
                  <AnimatePresence>
                    {hoveredProject === project.id && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div 
                          className="p-4 rounded-full backdrop-blur-sm" 
                          style={{ backgroundColor: project.color + 'E6' }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* Category and Title */}
                  <div className="mb-3 sm:mb-4">
                    <motion.div 
                      className="text-xs sm:text-sm font-semibold mb-2 tracking-wide" 
                      style={{ color: project.color }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.category}
                    </motion.div>
                    <motion.h3 
                      className="text-xl sm:text-2xl lg:text-2xl font-bold leading-tight project-card-title" 
                      style={{ color: '#000000' }}
                      whileHover={{ color: project.color }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <motion.p 
                    className="text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-light text-justify" 
                    style={{ color: '#424242' }}
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium backdrop-blur-sm cursor-pointer"
                        style={{ 
                          backgroundColor: 'rgba(69, 47, 47, 0.1)', 
                          color: '#452F2F' 
                        }}
                        whileHover={{ 
                          backgroundColor: project.color + '20',
                          color: project.color,
                          scale: 1.05
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced View Project Link */}
                  <motion.div 
                    className="flex items-center gap-2 text-xs sm:text-sm font-semibold" 
                    style={{ color: project.color }}
                    whileHover={{ gap: 12 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>View Project</span>
                    <motion.svg 
                      className="w-3 h-3 sm:w-4 sm:h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4, rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </motion.div>
                </div>

                {/* Enhanced Hover Effect Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white rounded-3xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Color accent border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  style={{ 
                    border: `2px solid transparent`,
                    background: `linear-gradient(135deg, ${project.color}20, transparent) border-box`
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
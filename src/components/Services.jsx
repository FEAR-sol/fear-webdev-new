import { motion } from 'framer-motion';
import { FadeIn } from './AnimationUtils';

const Services = () => {
  const services = [
    {
      id: '01',
      title: 'WEB DESIGN',
      description: 'Stunning, conversion-focused designs that capture your brand essence and deliver exceptional user experiences.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      ),
      features: ['UI/UX Design', 'Responsive Design', 'Brand Layouts', 'Landing Pages', 'Design Systems', 'Prototyping']
    },
    {
      id: '02',
      title: 'WEB DEVELOPMENT',
      description: 'Robust, scalable solutions built with cutting-edge technologies to ensure peak performance and security.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      ),
      features: ['Custom Development', 'Business Websites', 'E-Commerce Solutions', 'Web Applications', 'API Integration', 'Performance Tuning']
    },
    {
      id: '03',
      title: 'HOSTING & MAINTENANCE',
      description: 'Enterprise-grade hosting and proactive maintenance to ensure your website stays secure and accessible.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      ),
      features: ['Managed Hosting', '24/7 Monitoring', 'Security Updates', 'Automated Backups', 'Performance Tuning', 'Technical Support']
    },
    {
      id: '04',
      title: 'SEO & INTEGRATIONS',
      description: 'Strategic SEO optimization and seamless integrations to maximize visibility and business efficiency.',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      features: ['Technical SEO', 'Analytics Setup', 'Payment Integration', 'CRM Integration', 'API Development', 'Third-Party Tools']
    }
  ];

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

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
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
      className="relative min-h-screen w-full py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F8F7FA 0%, #F3F0F7 25%, #EDE8F4 50%, #E6E1ED 75%, rgba(69, 47, 47, 0.08) 100%)'
      }}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes with motion */}
        <motion.div 
          className="absolute top-20 left-10 w-3 h-3 rotate-45 opacity-20" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute top-40 right-16 w-2 h-2 rounded-full opacity-25" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            y: [-20, 20, -20],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-20 w-4 h-4 rotate-12 opacity-15" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            rotate: [12, 192, 12],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        
        <motion.div 
          className="absolute top-60 right-32 w-2.5 h-2.5 rounded-full opacity-20" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            y: [-15, 15, -15],
            x: [-10, 10, -10],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 3 }}
        />
        
        <motion.div 
          className="absolute bottom-60 right-10 w-3 h-3 rotate-45 opacity-18" 
          style={{ backgroundColor: '#452F2F' }}
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
        
        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-3" 
          style={{
            backgroundImage: `linear-gradient(rgba(69, 47, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(69, 47, 47, 0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px', '0px 0px']
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Elegant gradient orbs with motion */}
        <motion.div 
          className="absolute top-10 -right-32 w-64 h-64 rounded-full blur-3xl opacity-10" 
          style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.3) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [-20, 20, -20]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        <motion.div 
          className="absolute bottom-10 -left-32 w-80 h-80 rounded-full blur-3xl opacity-8" 
          style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.2) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            y: [-30, 30, -30]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
        />
        
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-5" 
          style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.15) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/* Premium Badge */}
          <FadeIn delay={0}>
            <motion.div 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md border-2 mb-8 shadow-lg cursor-pointer" 
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                borderColor: 'rgba(69, 47, 47, 0.15)',
                boxShadow: '0 8px 32px rgba(69, 47, 47, 0.1)'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 12px 40px rgba(69, 47, 47, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: '#452F2F' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-bold tracking-wider uppercase" style={{ color: '#452F2F' }}>
                Our Expertise
              </span>
              <motion.div 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: '#452F2F' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </FadeIn>

          {/* Main Title with Enhanced Typography */}
          <FadeIn delay={0.2}>
            <motion.h2 
              className="text-6xl lg:text-8xl font-black mb-8 tracking-tight leading-none" 
              style={{ 
                color: '#000000',
                textShadow: '0 4px 8px rgba(69, 47, 47, 0.1)'
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 8px 16px rgba(69, 47, 47, 0.2)'
                }}
                transition={{ duration: 0.3 }}
              >
                SERVICES
              </motion.span>
            </motion.h2>
          </FadeIn>
          
          {/* Elegant Subtitle */}
          <FadeIn delay={0.4}>
            <div className="flex items-center justify-center gap-6 mb-4">
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" 
                style={{ color: '#452F2F' }}
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <p className="text-xl lg:text-2xl font-medium tracking-wide max-w-3xl leading-relaxed" style={{ color: '#452F2F' }}>
                Comprehensive digital solutions crafted for your success
              </p>
              <motion.div 
                className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" 
                style={{ color: '#452F2F' }}
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <p className="text-base lg:text-lg font-light max-w-2xl mx-auto leading-relaxed text-justify" style={{ color: '#666666' }}>
              From concept to launch, we deliver exceptional digital experiences that drive growth and engagement
            </p>
          </FadeIn>
        </div>

        {/* Premium Services Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, threshold: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative w-full h-[400px] sm:h-[400px] service-card-mobile flex-shrink-0"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
                {/* Enhanced Card Shadow */}
                <motion.div 
                  className="absolute inset-0 transform translate-x-3 translate-y-3 rounded-3xl opacity-15" 
                  style={{ backgroundColor: '#452F2F' }}
                  whileHover={{ 
                    opacity: 0.25,
                    x: 6,
                    y: 6
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="relative rounded-3xl p-6 shadow-xl backdrop-blur-xl border-2 overflow-hidden h-full flex flex-col"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    borderColor: 'rgba(69, 47, 47, 0.1)',
                    boxShadow: '0 20px 40px rgba(69, 47, 47, 0.08)'
                  }}
                  whileHover={{ 
                    boxShadow: '0 25px 50px rgba(69, 47, 47, 0.15)',
                    borderColor: 'rgba(69, 47, 47, 0.2)'
                  }}
                >
                  {/* Premium Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-2xl" 
                      style={{ 
                        backgroundColor: 'rgba(69, 47, 47, 0.08)',
                        boxShadow: '0 4px 12px rgba(69, 47, 47, 0.1)'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(69, 47, 47, 0.12)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-8 h-8" style={{ color: '#452F2F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {service.icon}
                      </svg>
                    </motion.div>
                    <motion.div 
                      className="text-xs font-black px-3 py-1 rounded-full" 
                      style={{ 
                        backgroundColor: 'rgba(69, 47, 47, 0.1)', 
                        color: '#452F2F',
                        letterSpacing: '0.1em'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: 'rgba(69, 47, 47, 0.15)'
                      }}
                    >
                      {service.id}
                    </motion.div>
                  </div>

                  <motion.h3 
                    className="text-xl lg:text-xl font-black mb-3 leading-tight tracking-tight service-card-title" 
                    style={{ color: '#000000' }}
                    whileHover={{ color: '#452F2F' }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-sm mb-6 leading-relaxed font-light flex-grow text-justify" style={{ color: '#555555' }}>
                    {service.description}
                  </p>

                  {/* Enhanced Features List */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center gap-3 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: '#452F2F' }}
                          whileHover={{ scale: 1.25 }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.span 
                          className="text-xs font-medium" 
                          style={{ color: '#555555' }}
                          whileHover={{ 
                            x: 4,
                            color: '#452F2F'
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {feature}
                        </motion.span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Gradient Overlay Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white rounded-3xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Corner Accent */}
                  <motion.div 
                    className="absolute top-0 right-0 w-16 h-16" 
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, #452F2F 50%)`,
                      borderTopRightRadius: '1.5rem'
                    }}
                    initial={{ opacity: 0.05 }}
                    whileHover={{ opacity: 0.1 }}
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

export default Services;
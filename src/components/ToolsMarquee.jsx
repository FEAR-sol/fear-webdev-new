import { motion } from 'framer-motion';
import { FadeIn } from './AnimationUtils';

const ToolsMarquee = () => {
  const tools = [
    { name: "HTML5", color: "#e34f26" },
    { name: "CSS3", color: "#1572b6" },
    { name: "JavaScript", color: "#f7df1e" },
    { name: "React", color: "#61dafb" },
    { name: "Vue.js", color: "#4fc08d" },
    { name: "Angular", color: "#dd0031" },
    { name: "Node.js", color: "#339933" },
    { name: "Express.js", color: "#000000" },
    { name: "MongoDB", color: "#47a248" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "MySQL", color: "#4479a1" },
    { name: "Firebase", color: "#ffca28" },
    { name: "AWS", color: "#ff9900" },
    { name: "Docker", color: "#2496ed" },
    { name: "Git", color: "#f05032" },
    { name: "GitHub", color: "#181717" },
    { name: "Figma", color: "#f24e1e" },
    { name: "Adobe XD", color: "#ff61f6" },
    { name: "Photoshop", color: "#31a8ff" },
    { name: "Illustrator", color: "#ff9a00" },
    { name: "Sketch", color: "#f7b500" },
    { name: "InVision", color: "#ff3366" },
    { name: "Framer", color: "#0055ff" },
    { name: "TypeScript", color: "#3178c6" },
    { name: "Next.js", color: "#000000" },
    { name: "Nuxt.js", color: "#00dc82" },
    { name: "Svelte", color: "#ff3e00" },
    { name: "Tailwind CSS", color: "#06b6d4" },
    { name: "Bootstrap", color: "#7952b3" },
    { name: "SASS", color: "#cc6699" },
    { name: "Webpack", color: "#8dd6f9" },
    { name: "Vite", color: "#646cff" },
    { name: "Parcel", color: "#e1a95f" },
    { name: "ESLint", color: "#4b32c3" },
    { name: "Prettier", color: "#f7b93e" },
    { name: "Jest", color: "#c21325" },
    { name: "Cypress", color: "#17202c" },
    { name: "Storybook", color: "#ff4785" },
    { name: "GraphQL", color: "#e10098" },
    { name: "REST API", color: "#009688" },
    { name: "Redux", color: "#764abc" },
    { name: "Zustand", color: "#ff6b6b" },
    { name: "Three.js", color: "#000000" },
    { name: "GSAP", color: "#88ce02" },
    { name: "Lottie", color: "#00d4aa" },
    { name: "Prisma", color: "#2d3748" },
    { name: "Supabase", color: "#3ecf8e" },
    { name: "Vercel", color: "#000000" },
    { name: "Netlify", color: "#00c7b7" },
    { name: "Heroku", color: "#430098" },
    { name: "DigitalOcean", color: "#0080ff" },
    { name: "Cloudflare", color: "#f38020" },
    { name: "Stripe", color: "#635bff" }
  ];

  const firstRow = tools.slice(0, Math.ceil(tools.length / 2));
  const secondRow = tools.slice(Math.ceil(tools.length / 2));

  return (
    <section 
      className="py-16 overflow-hidden relative" 
      style={{
        background: 'radial-gradient(50% 183%, rgb(230, 225, 237) 0%, rgb(223, 218, 230) 5.40541%, rgba(35, 12, 71, 0.65) 93.6937%)'
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl opacity-20" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.6)' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-2xl opacity-15" 
          style={{ backgroundColor: 'rgba(230, 225, 237, 0.5)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-4" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                className="inline-block"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }}
              >
                Tools We Master At
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg opacity-80" 
              style={{ color: '#452F2F' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Technologies that power our digital solutions
            </motion.p>
          </div>
        </FadeIn>

        {/* First Marquee Row - Left to Right */}
        <div className="relative mb-8 overflow-hidden">
          <motion.div 
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: [0, -1920] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set */}
            {firstRow.map((tool, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full backdrop-blur-sm border cursor-pointer group"
                style={{
                  backgroundColor: 'rgba(230, 230, 237, 0.8)',
                  borderColor: 'rgba(230, 225, 237, 0.5)',
                  color: '#424242',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(69, 47, 47, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: tool.color + '20',
                  borderColor: tool.color + '40',
                  color: tool.color,
                  y: -4
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.span
                  className="relative"
                  whileHover={{
                    textShadow: `0 0 8px ${tool.color}40`
                  }}
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {firstRow.map((tool, index) => (
              <motion.div
                key={`row1-dup-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full backdrop-blur-sm border cursor-pointer group"
                style={{
                  backgroundColor: 'rgba(230, 230, 237, 0.8)',
                  borderColor: 'rgba(230, 225, 237, 0.5)',
                  color: '#424242',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(69, 47, 47, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: tool.color + '20',
                  borderColor: tool.color + '40',
                  color: tool.color,
                  y: -4
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative"
                  whileHover={{
                    textShadow: `0 0 8px ${tool.color}40`
                  }}
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Marquee Row - Right to Left */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-4 whitespace-nowrap"
            animate={{ x: [-1920, 0] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {/* First set */}
            {secondRow.map((tool, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full backdrop-blur-sm border cursor-pointer group"
                style={{
                  backgroundColor: 'rgba(230, 230, 237, 0.8)',
                  borderColor: 'rgba(230, 225, 237, 0.5)',
                  color: '#424242',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(69, 47, 47, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: tool.color + '20',
                  borderColor: tool.color + '40',
                  color: tool.color,
                  y: -4
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.span
                  className="relative"
                  whileHover={{
                    textShadow: `0 0 8px ${tool.color}40`
                  }}
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {secondRow.map((tool, index) => (
              <motion.div
                key={`row2-dup-${index}`}
                className="flex-shrink-0 px-6 py-3 rounded-full backdrop-blur-sm border cursor-pointer group"
                style={{
                  backgroundColor: 'rgba(230, 230, 237, 0.8)',
                  borderColor: 'rgba(230, 225, 237, 0.5)',
                  color: '#424242',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(69, 47, 47, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: tool.color + '20',
                  borderColor: tool.color + '40',
                  color: tool.color,
                  y: -4
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="relative"
                  whileHover={{
                    textShadow: `0 0 8px ${tool.color}40`
                  }}
                >
                  {tool.name}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <FadeIn delay={0.6}>
          <div className="text-center mt-12">
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-sm border cursor-pointer" 
              style={{ 
                backgroundColor: 'rgba(230, 225, 237, 0.4)', 
                borderColor: 'rgba(230, 225, 237, 0.6)'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(230, 225, 237, 0.6)',
                borderColor: 'rgba(230, 225, 237, 0.8)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: '#452F2F' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-sm font-semibold" style={{ color: '#452F2F' }}>
                And many more cutting-edge technologies
              </span>
              <motion.div 
                className="w-2 h-2 rounded-full" 
                style={{ backgroundColor: '#452F2F' }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ToolsMarquee;
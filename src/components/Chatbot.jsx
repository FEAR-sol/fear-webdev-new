import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm CYRA, FEAR's AI assistant. I can help you with information about our services, projects, workflow, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const messagesEndRef = useRef(null);

  // Quick action buttons
  const quickActions = [
    { text: "Our Services", emoji: "🎨" },
    { text: "View Projects", emoji: "💼" },
    { text: "How we work", emoji: "⚙️" },
    { text: "Get in touch", emoji: "📞" },
    { text: "Pricing info", emoji: "💰" },
    { text: "Technologies", emoji: "🛠️" }
  ];

  // Website knowledge base
  const knowledgeBase = {
    services: {
      'web design': {
        description: 'Stunning, conversion-focused designs that capture your brand essence and deliver exceptional user experiences.',
        features: ['UI/UX Design', 'Responsive Design', 'Brand Layouts', 'Landing Pages', 'Design Systems', 'Prototyping']
      },
      'web development': {
        description: 'Robust, scalable solutions built with cutting-edge technologies to ensure peak performance and security.',
        features: ['Custom Development', 'Business Websites', 'E-Commerce Solutions', 'Web Applications', 'API Integration', 'Performance Tuning']
      },
      'hosting & maintenance': {
        description: 'Enterprise-grade hosting and proactive maintenance to ensure your website stays secure and accessible.',
        features: ['Managed Hosting', '24/7 Monitoring', 'Security Updates', 'Automated Backups', 'Performance Tuning', 'Technical Support']
      },
      'seo & integrations': {
        description: 'Strategic SEO optimization and seamless integrations to maximize visibility and business efficiency.',
        features: ['Technical SEO', 'Analytics Setup', 'Payment Integration', 'CRM Integration', 'API Development', 'Third-Party Tools']
      }
    },
    projects: [
      {
        name: 'Penny Wise',
        category: 'Financial Software',
        description: 'A comprehensive money management system designed to help users track expenses, manage budgets, and achieve financial goals with intuitive interface and smart analytics.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        status: 'Live',
        link: 'https://pennywise-tau.vercel.app/'
      },
      {
        name: 'SJC International Hackathon',
        category: 'Event Platform',
        description: 'Official website for the international hackathon happening in September at College of Engineering. Features registration, event details, and participant management.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Firebase'],
        status: 'Coming Soon',
        link: '#'
      },
      {
        name: 'Subscribe',
        category: 'Crypto Management',
        description: 'Advanced cryptocurrency portfolio management software with real-time tracking, analytics, and automated trading features for digital asset management.',
        technologies: ['React', 'Web3.js', 'Node.js', 'PostgreSQL'],
        status: 'Live',
        link: 'https://subscrybe-wey4.vercel.app/'
      },
      {
        name: 'Tech Wars',
        category: 'Technology Blog',
        description: 'Multiverse of Technology - A comprehensive blog platform covering new technology trends, innovations, and breakthroughs in the tech world with engaging content.',
        technologies: ['Next.js', 'MDX', 'Tailwind', 'Vercel'],
        status: 'Live',
        link: 'https://yashaswi1423.github.io/TechVerse/'
      }
    ],
    workflow: {
      requirements: [
        {
          title: 'Project Brief & Goals',
          description: 'Clear project objectives, target audience, and desired outcomes to ensure we build exactly what you envision.'
        },
        {
          title: 'Content & Assets',
          description: 'All necessary content, images, branding materials, and any existing assets you want incorporated into the project.'
        },
        {
          title: 'Technical Requirements',
          description: 'Specific functionality needs, integrations, hosting preferences, and any technical constraints or preferences.'
        },
        {
          title: 'Timeline & Budget',
          description: 'Realistic timeline expectations and budget parameters to ensure smooth project execution and delivery.'
        }
      ],
      process: [
        'Initial consultation and requirement gathering',
        'Project planning and timeline creation',
        'Design mockups and wireframes',
        'Development and implementation',
        'Testing and quality assurance',
        'Launch and deployment',
        'Post-launch support and maintenance'
      ]
    },
    contact: {
      email: 'fear.agency.contact@gmail.com',
      response_time: 'Within 24 Hours',
      social: {
        instagram: 'https://www.instagram.com/fear_agency/',
        facebook: 'https://www.facebook.com/people/Fear-Fear/pfbid02FpXk622eFb6DWZJbxtXQFaRK17PD3SLKiQs5M6PNBchKaccCfyDSLxwHsqEJ3f5ul/',
        linkedin: 'https://www.linkedin.com/feed/'
      }
    },
    company: {
      name: 'FEAR',
      tagline: 'Crafting digital experiences that transcend expectations',
      description: 'Modern, conversion-focused designs that reflect your brand identity and deliver seamless user experiences across all platforms.',
      established: '2026',
      expertise: 'Comprehensive digital solutions crafted for your success'
    }
  };

  // AI response logic
  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to FEAR. I'm CYRA, here to help you learn about our digital services, projects, and how we can bring your vision to life. What would you like to know?";
    }

    // Services inquiries
    if (message.includes('service') || message.includes('what do you do') || message.includes('what can you do')) {
      return `We offer four main services:

🎨 **Web Design** - Stunning, conversion-focused designs with UI/UX, responsive design, and prototyping
💻 **Web Development** - Custom development, e-commerce solutions, and web applications
🚀 **Hosting & Maintenance** - Enterprise-grade hosting with 24/7 monitoring and security updates
📈 **SEO & Integrations** - Technical SEO, analytics setup, and third-party integrations

Which service interests you most?`;
    }

    // Specific service inquiries
    if (message.includes('web design') || message.includes('design')) {
      const service = knowledgeBase.services['web design'];
      return `**Web Design Services:**
${service.description}

Our design services include:
${service.features.map(feature => `• ${feature}`).join('\n')}

Would you like to see some of our design projects or learn about our design process?`;
    }

    if (message.includes('web development') || message.includes('development') || message.includes('coding')) {
      const service = knowledgeBase.services['web development'];
      return `**Web Development Services:**
${service.description}

Our development services include:
${service.features.map(feature => `• ${feature}`).join('\n')}

We work with modern technologies like React, Node.js, MongoDB, and more. Want to see our live projects?`;
    }

    if (message.includes('hosting') || message.includes('maintenance')) {
      const service = knowledgeBase.services['hosting & maintenance'];
      return `**Hosting & Maintenance Services:**
${service.description}

What we provide:
${service.features.map(feature => `• ${feature}`).join('\n')}

We ensure your website stays secure, fast, and always accessible to your users.`;
    }

    if (message.includes('seo') || message.includes('integration')) {
      const service = knowledgeBase.services['seo & integrations'];
      return `**SEO & Integrations Services:**
${service.description}

Our SEO and integration services:
${service.features.map(feature => `• ${feature}`).join('\n')}

We help maximize your online visibility and streamline your business processes.`;
    }

    // Projects inquiries
    if (message.includes('project') || message.includes('portfolio') || message.includes('work') || message.includes('example')) {
      return `Here are some of our recent projects:

� **Penny Wise** - Comprehensive money management system with React & Node.js
� **SJC International Hackathon** - Event platform for international hackathon (Coming Soon)
₿ **Subscribe** - Advanced crypto portfolio management with Web3.js
� **Tech Wars** - Technology blog platform covering latest innovations

All live projects are performing excellently. Would you like details about any specific project?`;
    }

    // Workflow/process inquiries
    if (message.includes('process') || message.includes('workflow') || message.includes('how do you work') || message.includes('timeline')) {
      return `**Our Workflow Process:**

📋 **Before We Begin, We Need:**
${knowledgeBase.workflow.requirements.map(req => `• ${req.title}: ${req.description}`).join('\n\n')}

🔄 **Our Development Process:**
${knowledgeBase.workflow.process.map((step, index) => `${index + 1}. ${step}`).join('\n')}

This ensures we deliver exceptional results on time and within budget!`;
    }

    // Contact inquiries
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('get in touch')) {
      return `**Get In Touch With Us:**

📧 **Email:** ${knowledgeBase.contact.email}
⏱️ **Response Time:** ${knowledgeBase.contact.response_time}

**Follow Us:**
📱 Instagram: @fear_agency
👥 Facebook: Fear-Fear
💼 LinkedIn: Connect with us

Ready to start your project? I can help you get started or you can reach out directly!`;
    }

    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('budget') || message.includes('how much')) {
      return `**Project Investment:**

Our pricing depends on several factors:
• Project scope and complexity
• Timeline requirements
• Specific features needed
• Ongoing maintenance needs

We believe in transparent pricing and will provide a detailed quote after understanding your requirements. Would you like to discuss your project needs so I can give you a better estimate?`;
    }

    // Technology inquiries
    if (message.includes('technology') || message.includes('tech stack') || message.includes('tools')) {
      return `**Technologies We Use:**

**Frontend:** React, Vue.js, Next.js, HTML5, CSS3, JavaScript
**Backend:** Node.js, Express, PHP
**Databases:** MongoDB, PostgreSQL, MySQL
**Tools:** Tailwind CSS, SCSS, Socket.io
**Platforms:** Vercel, WordPress
**Integrations:** Stripe, Analytics, CRM systems

We choose the best technology stack for each project based on your specific needs and goals.`;
    }

    // Company information
    if (message.includes('about') || message.includes('company') || message.includes('fear') || message.includes('who are you')) {
      return `**About FEAR:**

${knowledgeBase.company.tagline}

We're a digital agency established in ${knowledgeBase.company.established}, specializing in ${knowledgeBase.company.expertise.toLowerCase()}.

${knowledgeBase.company.description}

Our mission is to deliver exceptional digital experiences that drive growth and engagement for our clients.

I'm CYRA, your AI assistant here to help with any questions about our services!`;
    }

    // CYRA information
    if (message.includes('cyra') || message.includes('who is cyra')) {
      return `**About CYRA:**

Hi! I'm CYRA (Conversational Yet Resourceful Assistant), FEAR's dedicated AI assistant. I'm here to help you with:

🎨 **Service Information** - Details about our web design, development, hosting, and SEO services
💼 **Project Showcase** - Our portfolio and live project examples
⚙️ **Process Guidance** - How we work and what we need to get started
📞 **Contact Support** - Getting in touch with our team
💰 **Pricing Details** - Investment information for your project

I'm available 24/7 to answer your questions and help you understand how FEAR can bring your digital vision to life!`;
    }

    // FAQ responses
    if (message.includes('faq') || message.includes('question')) {
      return `**Frequently Asked Questions:**

❓ **What services do you offer?** - Web design, development, hosting, and SEO
❓ **How long does a project take?** - Typically 2-8 weeks depending on complexity
❓ **Do you provide ongoing support?** - Yes, we offer maintenance and support packages
❓ **Can you work with my existing website?** - Absolutely, we can redesign or enhance existing sites
❓ **Do you handle e-commerce?** - Yes, we build custom e-commerce solutions

Have a specific question? Just ask!`;
    }

    // Default response for unrecognized queries
    const suggestions = [
      "Try asking about our services, projects, or workflow",
      "You can ask about pricing, technologies, or contact information",
      "I can help with questions about web design, development, or SEO"
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    return `I'd be happy to help! I can provide information about:

🎨 **Services** - Web design, development, hosting, SEO
💼 **Projects** - Our portfolio and case studies  
⚙️ **Workflow** - Our development process
📞 **Contact** - How to reach us
💰 **Pricing** - Investment information
🛠️ **Technology** - Tools and tech stack we use

${randomSuggestion}. What would you like to know more about?`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (messageText = null) => {
    const textToSend = messageText || inputMessage;
    if (!textToSend.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    setShowQuickActions(false);

    // Simulate typing delay with error handling
    try {
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: generateResponse(textToSend),
          sender: 'bot',
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "I apologize, but I'm having trouble processing your request right now. Please try again or contact our team directly at fear.agency.contact@gmail.com",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container relative">
      {/* Chatbot Toggle Button */}
      <motion.button
        className="chatbot-button w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
        style={{
          backgroundColor: '#452F2F',
          boxShadow: '0 8px 32px rgba(69, 47, 47, 0.3)',
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 12px 40px rgba(69, 47, 47, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          rotate: isOpen ? 180 : 0
        }}
        transition={{ duration: 0.3 }}
        aria-label={isOpen ? "Close CYRA chat" : "Open CYRA chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window fixed bottom-24 left-1/2 transform -translate-x-1/2 w-96 h-[500px] rounded-2xl shadow-2xl overflow-hidden"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(69, 47, 47, 0.1)',
              zIndex: 99999,
              maxWidth: 'calc(100vw - 2rem)'
            }}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div
              className="p-4 border-b flex items-center gap-3"
              style={{
                backgroundColor: '#452F2F',
                borderColor: 'rgba(69, 47, 47, 0.2)'
              }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white">CYRA</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div 
              className="flex-1 p-4 overflow-y-auto h-80 chatbot-messages" 
              style={{ maxHeight: '320px' }}
              role="log"
              aria-live="polite"
              aria-label="Chat messages"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'rounded-br-md'
                        : 'rounded-bl-md'
                    }`}
                    style={{
                      backgroundColor: message.sender === 'user' ? '#452F2F' : 'rgba(69, 47, 47, 0.1)',
                      color: message.sender === 'user' ? 'white' : '#333333'
                    }}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div
                    className="p-3 rounded-2xl rounded-bl-md"
                    style={{ backgroundColor: 'rgba(69, 47, 47, 0.1)' }}
                  >
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#452F2F', animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#452F2F', animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#452F2F', animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quick Actions */}
              {showQuickActions && messages.length === 1 && (
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2 px-1">Quick actions:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <motion.button
                        key={index}
                        className="p-2 rounded-lg text-xs font-medium transition-all duration-200 text-left"
                        style={{
                          backgroundColor: 'rgba(69, 47, 47, 0.08)',
                          color: '#452F2F',
                          border: '1px solid rgba(69, 47, 47, 0.1)'
                        }}
                        whileHover={{
                          backgroundColor: 'rgba(69, 47, 47, 0.12)',
                          scale: 1.02
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleSendMessage(action.text)}
                      >
                        <span className="mr-1">{action.emoji}</span>
                        {action.text}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t" style={{ borderColor: 'rgba(69, 47, 47, 0.1)' }}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask CYRA anything about FEAR..."
                  className="flex-1 p-3 rounded-xl border-2 focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: 'rgba(69, 47, 47, 0.2)',
                    backgroundColor: 'rgba(69, 47, 47, 0.05)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#452F2F'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(69, 47, 47, 0.2)'}
                  aria-label="Type your message to CYRA"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: '#452F2F' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputMessage.trim() || isTyping}
                  aria-label="Send message to CYRA"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
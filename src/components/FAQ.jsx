import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to design and develop a website?",
      answer: "The timeline varies based on project complexity. A simple business website typically takes 2-4 weeks, while complex e-commerce or custom web applications can take 6-12 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide ongoing maintenance and support after launch?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, content updates, performance monitoring, backups, and technical support. Our maintenance plans ensure your website stays secure, fast, and up-to-date with the latest technologies."
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer: "Absolutely! All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices - smartphones, tablets, and desktops. We test extensively across different screen sizes and browsers for optimal user experience."
    },
    {
      question: "How do you approach SEO and will my website rank on Google?",
      answer: "We implement technical SEO best practices from the ground up, including optimized site structure, fast loading speeds, proper meta tags, and clean code. While we can't guarantee specific rankings, our SEO-optimized websites typically see improved search visibility within 3-6 months."
    },
    {
      question: "Can you integrate third-party tools and payment systems?",
      answer: "Yes, we specialize in integrations with popular tools like payment gateways (Stripe, PayPal), CRM systems, email marketing platforms, analytics tools, and social media. We ensure seamless data flow and functionality across all your business tools."
    },
    {
      question: "What happens if I need changes or updates after the website is live?",
      answer: "We provide training on content management and offer various support options. Minor content updates can often be handled by you, while design changes or new features can be addressed through our maintenance plans or additional development projects."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="relative min-h-screen w-full py-24 overflow-hidden"
      style={{
        background: 'radial-gradient(50% 183%, rgb(230, 225, 237) 0%, rgb(223, 218, 230) 5.40541%, rgba(35, 12, 71, 0.65) 93.6937%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Elegant gradient orbs */}
        <div className="absolute top-10 -right-32 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.3) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full blur-3xl opacity-8" style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.2) 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md border-2 mb-8 shadow-lg hover:shadow-xl transition-all duration-300" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            borderColor: 'rgba(69, 47, 47, 0.15)',
            boxShadow: '0 8px 32px rgba(69, 47, 47, 0.1)'
          }}>
            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F' }}></div>
            <span className="text-sm font-bold tracking-wider uppercase" style={{ color: '#452F2F' }}>
              Got Questions?
            </span>
            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F', animationDelay: '0.5s' }}></div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-none" style={{ 
            color: '#000000',
            textShadow: '0 4px 8px rgba(69, 47, 47, 0.1)'
          }}>
            FREQUENTLY ASKED<br />QUESTIONS
          </h2>
          
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: '#452F2F' }}></div>
            <p className="text-xl lg:text-2xl font-medium tracking-wide max-w-3xl leading-relaxed" style={{ color: '#452F2F' }}>
              Everything you need to know about our services
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: '#452F2F' }}></div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group rounded-2xl backdrop-blur-xl border-2 overflow-hidden transition-all duration-500 hover:shadow-xl"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(69, 47, 47, 0.1)',
                boxShadow: '0 8px 32px rgba(69, 47, 47, 0.08)'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-opacity-50 transition-all duration-300"
                style={{ backgroundColor: openIndex === index ? 'rgba(69, 47, 47, 0.05)' : 'transparent' }}
              >
                <h3 className="text-lg lg:text-xl font-bold pr-8 leading-relaxed" style={{ color: '#000000' }}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'rotate-45' : ''}`} style={{ backgroundColor: 'rgba(69, 47, 47, 0.1)' }}>
                  <svg className="w-5 h-5" style={{ color: '#452F2F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-6">
                  <div className="w-full h-px mb-4" style={{ backgroundColor: 'rgba(69, 47, 47, 0.1)' }}></div>
                  <p className="text-base lg:text-lg leading-relaxed font-light" style={{ color: '#555555' }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full backdrop-blur-md border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer" style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            borderColor: 'rgba(69, 47, 47, 0.15)',
            boxShadow: '0 8px 32px rgba(69, 47, 47, 0.1)'
          }}>
            <span className="text-lg font-bold tracking-wide" style={{ color: '#452F2F' }}>
              Still have questions? Let's talk!
            </span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" style={{ color: '#452F2F' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
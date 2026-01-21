import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS configuration from environment variables
  const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // Only initialize if we have the public key
    if (!EMAILJS_PUBLIC_KEY) {
      // Silently skip EmailJS initialization in development
      if (process.env.NODE_ENV === 'development') {
        console.info('EmailJS not configured. Contact form will show a demo message.');
      }
      return;
    }

    // Try initializing EmailJS
    try {
      console.log('Initializing EmailJS...');
      
      // Initialize EmailJS properly
      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS is properly configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      // Show demo success message in development
      if (process.env.NODE_ENV === 'development') {
        console.info('Demo mode: Contact form submitted successfully (EmailJS not configured)');
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('EmailJS not properly configured. Missing environment variables.');
        setSubmitStatus('error');
      }
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare template parameters with your template's variable names
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      console.log('Sending with:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        params: templateParams
      });

      // Send email using EmailJS (public key already initialized)
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Failed to send email:', error);
      
      // EmailJS sometimes returns success as an error, check the response
      if (error.status === 200 || error.text === 'OK' || (error.status >= 200 && error.status < 300)) {
        console.log('Email actually sent successfully');
        setSubmitStatus('success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Address",
      value: "fear.agency.contact@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Response Time",
      value: "Within 24 Hours",
      description: "Quick turnaround guaranteed"
    }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/fear_agency/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/Fear-Fear/pfbid02FpXk622eFb6DWZJbxtXQFaRK17PD3SLKiQs5M6PNBchKaccCfyDSLxwHsqEJ3f5ul/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/feed/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      className="relative min-h-screen w-full py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F8F7FA 0%, #F3F0F7 25%, #EDE8F4 50%, #E6E1ED 75%, rgba(69, 47, 47, 0.08) 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-3 h-3 rotate-45 animate-pulse opacity-20" style={{ backgroundColor: '#452F2F' }}></div>
        <div className="absolute top-40 right-16 w-2 h-2 rounded-full animate-bounce opacity-25" style={{ backgroundColor: '#452F2F', animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 rotate-12 animate-pulse opacity-15" style={{ backgroundColor: '#452F2F', animationDelay: '2s' }}></div>
        <div className="absolute top-60 right-32 w-2.5 h-2.5 rounded-full animate-bounce opacity-20" style={{ backgroundColor: '#452F2F', animationDelay: '3s' }}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `linear-gradient(rgba(69, 47, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(69, 47, 47, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
        
        {/* Elegant gradient orbs */}
        <div className="absolute top-10 -right-32 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.3) 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-10 -left-32 w-80 h-80 rounded-full blur-3xl opacity-8" style={{ background: 'radial-gradient(circle, rgba(69, 47, 47, 0.2) 0%, transparent 70%)' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
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
              Let's Connect
            </span>
            <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F', animationDelay: '0.5s' }}></div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-none" style={{ 
            color: '#000000',
            textShadow: '0 4px 8px rgba(69, 47, 47, 0.1)'
          }}>
            GET IN TOUCH
          </h2>
          
          {/* Subtitle */}
          <div className="flex items-center justify-center gap-6 mb-4">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: '#452F2F' }}></div>
            <p className="text-xl lg:text-2xl font-medium tracking-wide max-w-3xl leading-relaxed" style={{ color: '#452F2F' }}>
              Ready to bring your vision to life? Let's start the conversation
            </p>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: '#452F2F' }}></div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div 
              className="rounded-3xl p-8 lg:p-10 shadow-xl backdrop-blur-xl border-2 transition-all duration-700"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                borderColor: 'rgba(69, 47, 47, 0.1)',
                boxShadow: '0 20px 40px rgba(69, 47, 47, 0.08)'
              }}
            >
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight" style={{ color: '#000000' }}>
                  Send us a Message
                </h3>
                <p className="text-base lg:text-lg font-light leading-relaxed text-justify" style={{ color: '#555555' }}>
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 rounded-2xl border-2 mb-6" style={{ 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderColor: 'rgba(34, 197, 94, 0.3)',
                    color: '#16a34a'
                  }}>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-bold">
                        {(!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) && process.env.NODE_ENV === 'development' 
                          ? 'Demo: Form submitted successfully! (Configure EmailJS for real emails)'
                          : 'Message sent successfully! We\'ll get back to you soon.'
                        }
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-2xl border-2 mb-6" style={{ 
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderColor: 'rgba(239, 68, 68, 0.3)',
                    color: '#dc2626'
                  }}>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="font-bold">Failed to send message. Please try again or contact us directly.</span>
                    </div>
                  </div>
                )}
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-3 tracking-wide" style={{ color: '#452F2F' }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 focus:outline-none focus:ring-0 transition-all duration-300 text-base font-medium"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(69, 47, 47, 0.2)',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#452F2F'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(69, 47, 47, 0.2)'}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-3 tracking-wide" style={{ color: '#452F2F' }}>
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl border-2 focus:outline-none focus:ring-0 transition-all duration-300 text-base font-medium"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(69, 47, 47, 0.2)',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#452F2F'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(69, 47, 47, 0.2)'}
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-3 tracking-wide" style={{ color: '#452F2F' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl border-2 focus:outline-none focus:ring-0 transition-all duration-300 text-base font-medium resize-none"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      borderColor: 'rgba(69, 47, 47, 0.2)',
                      color: '#000000'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#452F2F'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(69, 47, 47, 0.2)'}
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 rounded-2xl font-black text-lg tracking-wide transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ 
                    backgroundColor: isSubmitting ? '#6B7280' : '#452F2F',
                    color: '#FFFFFF',
                    boxShadow: '0 8px 32px rgba(69, 47, 47, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#3A2525';
                      e.target.style.boxShadow = '0 12px 40px rgba(69, 47, 47, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.target.style.backgroundColor = '#452F2F';
                      e.target.style.boxShadow = '0 8px 32px rgba(69, 47, 47, 0.3)';
                    }
                  }}
                >
                  <span className="flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        SENDING MESSAGE...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group relative transform hover:scale-[1.02] transition-all duration-700"
                >
                  {/* Card Shadow */}
                  <div className="absolute inset-0 transform translate-x-3 translate-y-3 rounded-3xl opacity-15 group-hover:opacity-25 transition-opacity duration-500" style={{ backgroundColor: '#452F2F' }}></div>
                  
                  <div 
                    className="relative rounded-3xl p-6 lg:p-8 shadow-xl backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-700 overflow-hidden"
                    style={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      borderColor: 'rgba(69, 47, 47, 0.1)',
                      boxShadow: '0 20px 40px rgba(69, 47, 47, 0.08)'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500" style={{ 
                        backgroundColor: 'rgba(69, 47, 47, 0.08)',
                        boxShadow: '0 4px 12px rgba(69, 47, 47, 0.1)'
                      }}>
                        <div style={{ color: '#452F2F' }}>
                          {info.icon}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-black mb-2 leading-tight" style={{ color: '#000000' }}>
                          {info.title}
                        </h4>
                        <p className="text-lg lg:text-lg font-bold mb-1 contact-value-text break-all sm:break-normal" style={{ color: '#452F2F' }}>
                          {info.value}
                        </p>
                        <p className="text-sm font-light" style={{ color: '#666666' }}>
                          {info.description}
                        </p>
                      </div>
                    </div>

                    {/* Gradient Overlay Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-3xl pointer-events-none"></div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{
                      background: `linear-gradient(135deg, transparent 50%, #452F2F 50%)`,
                      borderTopRightRadius: '1.5rem'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Section */}
            <div className="mt-8">
              <div 
                className="rounded-3xl p-6 lg:p-8 shadow-xl backdrop-blur-xl border-2 transition-all duration-700"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderColor: 'rgba(69, 47, 47, 0.1)',
                  boxShadow: '0 20px 40px rgba(69, 47, 47, 0.08)'
                }}
              >
                <div className="text-center mb-6">
                  <h4 className="text-xl font-black mb-2 leading-tight" style={{ color: '#000000' }}>
                    Follow Us On
                  </h4>
                  <p className="text-sm font-light" style={{ color: '#666666' }}>
                    Stay updated with our latest work and insights
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-lg"
                      style={{ 
                        backgroundColor: 'rgba(69, 47, 47, 0.08)',
                        color: '#452F2F'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#452F2F';
                        e.target.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'rgba(69, 47, 47, 0.08)';
                        e.target.style.color = '#452F2F';
                      }}
                    >
                      {social.icon}
                      
                      {/* Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ 
                        backgroundColor: '#452F2F',
                        color: '#FFFFFF'
                      }}>
                        {social.name}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="text-center mt-6 pt-4" style={{ borderTop: '1px solid rgba(69, 47, 47, 0.1)' }}>
                  <p className="text-sm font-light leading-relaxed text-justify" style={{ color: '#555555' }}>
                    Connect with us for behind-the-scenes content, design tips, and project showcases
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
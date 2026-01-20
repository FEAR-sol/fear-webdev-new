import React from 'react';
import { TextReveal, StaggeredReveal } from './AnimationUtils';

const BeforeWeBegin = () => {
  const requirements = [
    {
      title: "Clear Requirements:",
      description: "Clients must clearly define all website goals, features, and content before development begins.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Additional Requests:",
      description: "Any new requirements after project kickoff may require a revised timeline or cost adjustment.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Maintenance Terms:",
      description: "Hosting, updates, and future changes should be finalized in advance for uninterrupted support.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Communication:",
      description: "Timely communication and feedback from both sides are essential for on-time delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

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

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <TextReveal>
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md border-2 mb-8 shadow-lg hover:shadow-xl transition-all duration-300" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              borderColor: 'rgba(69, 47, 47, 0.15)',
              boxShadow: '0 8px 32px rgba(69, 47, 47, 0.1)'
            }}>
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F' }}></div>
              <span className="text-sm font-bold tracking-wider uppercase" style={{ color: '#452F2F' }}>
                Important Guidelines
              </span>
              <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F', animationDelay: '0.5s' }}></div>
            </div>
          </TextReveal>

          {/* Main Title */}
          <TextReveal delay={200}>
            <h2 className="text-5xl lg:text-7xl font-black mb-8 tracking-tight leading-none" style={{ 
              color: '#000000',
              textShadow: '0 4px 8px rgba(69, 47, 47, 0.1)'
            }}>
              BEFORE WE BEGIN
            </h2>
          </TextReveal>
          
          {/* Subtitle */}
          <TextReveal delay={400}>
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: '#452F2F' }}></div>
              <p className="text-xl lg:text-2xl font-medium tracking-wide max-w-4xl leading-relaxed" style={{ color: '#452F2F' }}>
                To ensure a smooth and successful collaboration, we believe in clarity, transparency, and shared expectations from day one.
              </p>
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent" style={{ color: '#452F2F' }}></div>
            </div>
          </TextReveal>
        </div>

        {/* Requirements Grid */}
        <StaggeredReveal staggerDelay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {requirements.map((requirement, index) => (
              <div 
                key={index}
                className="group relative transform hover:scale-[1.02] transition-all duration-700"
              >
              {/* Card Shadow */}
              <div className="absolute inset-0 transform translate-x-3 translate-y-3 rounded-3xl opacity-15 group-hover:opacity-25 transition-opacity duration-500" style={{ backgroundColor: '#452F2F' }}></div>
              
              <div 
                className="relative rounded-3xl p-8 shadow-xl backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-700 overflow-hidden h-full"
                style={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderColor: 'rgba(69, 47, 47, 0.1)',
                  boxShadow: '0 20px 40px rgba(69, 47, 47, 0.08)'
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-2xl group-hover:scale-110 transition-transform duration-500" style={{ 
                    backgroundColor: 'rgba(69, 47, 47, 0.08)',
                    boxShadow: '0 4px 12px rgba(69, 47, 47, 0.1)'
                  }}>
                    <div style={{ color: '#452F2F' }}>
                      {requirement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-black mb-3 leading-tight" style={{ color: '#000000' }}>
                      {requirement.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-base lg:text-lg leading-relaxed font-light" style={{ color: '#555555' }}>
                  {requirement.description}
                </p>

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
        </StaggeredReveal>

        {/* Bottom Notice */}
        <TextReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-4 px-10 py-6 rounded-full backdrop-blur-md border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl group" style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)', 
              borderColor: 'rgba(69, 47, 47, 0.15)',
              boxShadow: '0 12px 32px rgba(69, 47, 47, 0.1)'
            }}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F' }}></div>
                <span className="text-lg lg:text-xl font-bold tracking-wide" style={{ color: '#452F2F' }}>
                  Read instructions carefully before we begin
                </span>
                <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#452F2F', animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            {/* Additional Note */}
            <p className="mt-8 text-base lg:text-lg font-light max-w-3xl mx-auto leading-relaxed" style={{ color: '#666666' }}>
              Following these guidelines ensures we deliver exceptional results on time and within budget, creating a partnership built on mutual understanding and success.
            </p>
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default BeforeWeBegin;
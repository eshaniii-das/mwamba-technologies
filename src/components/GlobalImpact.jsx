import React from "react";
import { motion } from "framer-motion";

const GlobalImpact = () => {
  return (
    <section className="relative bg-gradient-to-br from-midnight-blue via-steel-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            Strategic Focus
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Technology for Development
          </h2>
          <div className="w-24 h-1 bg-electric-cyan mx-auto"></div>
        </motion.div>

        {/* Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center">
              We leverage talent and resources to unleash transformative change. By aligning our 
              capabilities with the specific goals of each project, we amplify impact and ensure 
              groundbreaking initiatives reach their maximum potential.
            </p>
          </div>
        </motion.div>

        {/* Map-Based Graphic with Real World Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Map Container */}
            <div className="relative w-full h-[500px] md:h-[700px] bg-midnight-blue/50 rounded-2xl overflow-hidden">
              
              {/* World Map Background Image */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.6) contrast(1.2)',
                }}
              ></div>

              {/* Overlay gradient for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/60 via-transparent to-midnight-blue/60"></div>
{/* Center: The Bridge (Arrow/Connection) */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-20"
>
  <div className="relative">
    {/* Animated Arrow */}
    <motion.div
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg className="w-24 h-24 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </motion.div>
    
    {/* Bridge Label */}
    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
      <span className="bg-electric-cyan/20 border border-electric-cyan/40 text-electric-cyan px-4 py-2 rounded-full text-sm font-bold uppercase">
        Mwamba Bridge
      </span>
    </div>
  </div>
</motion.div>
              {/* Region Markers with Accurate Positioning */}
              
              {/* TECH HUBS (Developed Nations - Blue) */}
              
              {/* North America - Silicon Valley/USA */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-[28%] left-[18%]"
                style={{ zIndex: 20 }}
              >
                <div className="relative group cursor-pointer">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-8 bg-electric-cyan/30 rounded-full absolute"
                  ></motion.div>
                  <div className="w-8 h-8 bg-electric-cyan rounded-full relative z-10 shadow-lg shadow-electric-cyan/50"></div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-electric-cyan/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                    <p className="text-sm text-white font-bold">North America</p>
                    <p className="text-xs text-electric-cyan">Innovation Hub</p>
                  </div>
                </div>
              </motion.div>

              {/* Europe - London/Berlin */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-[25%] left-[50%]"
                style={{ zIndex: 20 }}
              >
                <div className="relative group cursor-pointer">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="w-8 h-8 bg-electric-cyan/30 rounded-full absolute"
                  ></motion.div>
                  <div className="w-8 h-8 bg-electric-cyan rounded-full relative z-10 shadow-lg shadow-electric-cyan/50"></div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-electric-cyan/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                    <p className="text-sm text-white font-bold">Europe</p>
                    <p className="text-xs text-electric-cyan">Innovation Hub</p>
                  </div>
                </div>
              </motion.div>

              {/* IMPACT ZONES (Developing Nations - Green) */}
              
              {/* Africa - Kenya/Nigeria */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-[52%] left-[52%]"
                style={{ zIndex: 20 }}
              >
                <div className="relative group cursor-pointer">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="w-8 h-8 bg-green-400/30 rounded-full absolute"
                  ></motion.div>
                  <div className="w-8 h-8 bg-green-400 rounded-full relative z-10 shadow-lg shadow-green-400/50"></div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                    <p className="text-sm text-white font-bold">Africa</p>
                    <p className="text-xs text-green-400">Impact Zone</p>
                  </div>
                </div>
              </motion.div>

              {/* Asia - India/Southeast Asia */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute top-[38%] left-[72%]"
                style={{ zIndex: 20 }}
              >
                <div className="relative group cursor-pointer">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                    className="w-8 h-8 bg-green-400/30 rounded-full absolute"
                  ></motion.div>
                  <div className="w-8 h-8 bg-green-400 rounded-full relative z-10 shadow-lg shadow-green-400/50"></div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                    <p className="text-sm text-white font-bold">Asia</p>
                    <p className="text-xs text-green-400">Impact Zone</p>
                  </div>
                </div>
              </motion.div>

              {/* South America - Brazil */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute top-[62%] left-[26%]"
                style={{ zIndex: 20 }}
              >
                <div className="relative group cursor-pointer">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="w-8 h-8 bg-green-400/30 rounded-full absolute"
                  ></motion.div>
                  <div className="w-8 h-8 bg-green-400 rounded-full relative z-10 shadow-lg shadow-green-400/50"></div>
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                    <p className="text-sm text-white font-bold">South America</p>
                    <p className="text-xs text-green-400">Impact Zone</p>
                  </div>
                </div>
              </motion.div>

              {/* Animated Connection Lines (The Mwamba Bridge) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#00D9FF" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* North America to Africa */}
                <motion.path
                  d="M 18% 28% Q 35% 15% 52% 52%"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                />
                
                {/* Europe to Africa */}
                <motion.path
                  d="M 50% 25% Q 51% 35% 52% 52%"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
                />
                
                {/* North America to South America */}
                <motion.path
                  d="M 18% 28% Q 22% 45% 26% 62%"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.6, ease: "easeInOut" }}
                />
                
                {/* Europe to Asia */}
                <motion.path
                  d="M 50% 25% Q 61% 28% 72% 38%"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 1.8, ease: "easeInOut" }}
                />
                
                {/* North America to Asia */}
                <motion.path
                  d="M 18% 28% Q 45% 20% 72% 38%"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: 2.0, ease: "easeInOut" }}
                />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-6 right-6 bg-midnight-blue/90 backdrop-blur-md border-2 border-electric-cyan/40 rounded-xl p-5 space-y-3 shadow-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-electric-cyan rounded-full shadow-lg shadow-electric-cyan/50"></div>
                  <span className="text-sm text-white font-semibold">Tech Hubs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
                  <span className="text-sm text-white font-semibold">Impact Zones</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg width="24" height="3">
                    <line x1="0" y1="1.5" x2="24" y2="1.5" stroke="#00D9FF" strokeWidth="3" strokeDasharray="4,2" />
                  </svg>
                  <span className="text-sm text-white font-semibold">Mwamba Bridge</span>
                </div>
              </div>
            </div>

            {/* Map Title Overlay */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-center z-30">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-midnight-blue/90 backdrop-blur-md border-2 border-electric-cyan/50 rounded-2xl px-8 py-4 shadow-2xl"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">The Mwamba Bridge</h3>
                <p className="text-sm md:text-base text-electric-cyan font-semibold">Connecting Innovation to Impact</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpact;
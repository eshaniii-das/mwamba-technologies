import React from "react";
import { motion } from "framer-motion";

const MwambaBridge = () => {
  return (
    <section className="relative bg-gradient-to-br from-charcoal-grey via-midnight-blue to-steel-blue py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
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
            The Mwamba Bridge
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Connecting Innovation to Impact
          </h2>
          <div className="w-24 h-1 bg-electric-cyan mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We bridge the gap between cutting-edge technology hubs in developed nations 
            and high-impact zones in developing regions, creating pathways for sustainable innovation.
          </p>
        </motion.div>

        {/* Network Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto mb-16"
        >
          {/* Map Container */}
          <div className="relative bg-gradient-to-br from-midnight-blue/50 to-charcoal-grey/50 backdrop-blur-md border border-electric-cyan/20 rounded-3xl p-8 md:p-16 min-h-,[600px]">
            
            {/* SVG for Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Connection Lines from Tech Hubs to Impact Zones */}
              
              {/* North America to Africa */}
              <line x1="25" y1="35" x2="50" y2="60" stroke="#00D9FF" strokeWidth="0.3" strokeDasharray="2,1" opacity="0.6" />
              
              {/* North America to South America */}
              <line x1="25" y1="35" x2="30" y2="70" stroke="#00D9FF" strokeWidth="0.3" strokeDasharray="2,1" opacity="0.6" />
              
              {/* North America to Asia */}
              <line x1="25" y1="35" x2="70" y2="45" stroke="#00D9FF" strokeWidth="0.3" strokeDasharray="2,1" opacity="0.6" />
              
              {/* Europe to Africa */}
              <line x1="50" y1="30" x2="50" y2="60" stroke="#00D9FF" strokeWidth="0.3" strokeDasharray="2,1" opacity="0.6" />
              
              {/* Europe to Asia */}
              <line x1="50" y1="30" x2="70" y2="45" stroke="#00D9FF" strokeWidth="0.3" strokeDasharray="2,1" opacity="0.6" />
            </svg>

            {/* Tech Hubs (Blue - Developed Nations) */}
            
            {/* North America */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-,[35%] left-,[25%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative group">
                <div className="w-16 h-16 bg-electric-cyan rounded-full flex items-center justify-center shadow-lg shadow-electric-cyan/50 border-4 border-midnight-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-electric-cyan/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  <p className="text-sm text-white font-bold">North America</p>
                  <p className="text-xs text-electric-cyan">Tech Hub</p>
                </div>
              </div>
            </motion.div>

            {/* Europe */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-,[30%] left-,[50%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative group">
                <div className="w-16 h-16 bg-electric-cyan rounded-full flex items-center justify-center shadow-lg shadow-electric-cyan/50 border-4 border-midnight-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-electric-cyan/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  <p className="text-sm text-white font-bold">Europe</p>
                  <p className="text-xs text-electric-cyan">Tech Hub</p>
                </div>
              </div>
            </motion.div>

            {/* Impact Zones (Green - Developing Nations) */}
            
            {/* Africa */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-,[60%] left-,[50%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative group">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50 border-4 border-midnight-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  <p className="text-sm text-white font-bold">Africa</p>
                  <p className="text-xs text-green-400">Impact Zone</p>
                </div>
              </div>
            </motion.div>

            {/* Asia */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-,[45%] left-,[70%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative group">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50 border-4 border-midnight-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  <p className="text-sm text-white font-bold">Asia</p>
                  <p className="text-xs text-green-400">Impact Zone</p>
                </div>
              </div>
            </motion.div>

            {/* South America */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-,[70%] left-,[30%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative group">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg shadow-green-400/50 border-4 border-midnight-blue">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400/60 px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  <p className="text-sm text-white font-bold">South America</p>
                  <p className="text-xs text-green-400">Impact Zone</p>
                </div>
              </div>
            </motion.div>

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
                  <line x1="0" y1="1.5" x2="24" y2="1.5" stroke="#00D9FF" strokeWidth="2" strokeDasharray="4,2" />
                </svg>
                <span className="text-sm text-white font-semibold">Mwamba Bridge</span>
              </div>
            </div>

            {/* Map Title Overlay */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-30">
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

        {/* Three Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-electric-cyan/10 to-electric-cyan/5 backdrop-blur-md border border-electric-cyan/30 rounded-2xl p-8 text-center hover:border-electric-cyan/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-electric-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Technology Transfer</h3>
            <p className="text-white/80 leading-relaxed">
              Adapting cutting-edge innovations from developed markets for practical application in emerging economies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-8 text-center hover:border-green-500/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Talent Mobilization</h3>
            <p className="text-white/80 leading-relaxed">
              Connecting global expertise with local implementation teams to accelerate sustainable development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/30 rounded-2xl p-8 text-center hover:border-white/50 transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Sustainable Impact</h3>
            <p className="text-white/80 leading-relaxed">
              Creating lasting change through locally-adapted solutions that address real-world challenges.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MwambaBridge;
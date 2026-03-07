import React from "react";
import { motion } from "framer-motion";

const Identity = () => {
  return (
    <section className="relative bg-gradient-to-br from-steel-blue via-charcoal-grey to-midnight-blue py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
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
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
            Empowering Breakthroughs for a Sustainable Future
          </h2>
          <div className="w-24 h-1 bg-electric-cyan mx-auto"></div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center">
              Mwamba isn't just a technology developer; we are a movement fueled by collective ingenuity. 
              We bridge the gap between conceptualization and tangible impact, domesticating impactful tech 
              for developing nations and spearheading global de-carbonization strategies.
            </p>
          </div>
        </motion.div>

        {/* Three Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Three Pillars
          </h3>
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Unlocking Potential */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-electric-cyan/20 rounded-xl mb-6 mx-auto">
              <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Unlocking Potential
            </h4>
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Connecting the right tools to innovative ideas.
            </p>
          </motion.div>

          {/* Pillar 2: Investing in Human Capital */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-electric-cyan/20 rounded-xl mb-6 mx-auto">
              <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Investing in Human Capital
            </h4>
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Matching talent and expertise to accelerate initiatives.
            </p>
          </motion.div>

          {/* Pillar 3: Empowering Teams */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-electric-cyan/20 rounded-xl mb-6 mx-auto">
              <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Empowering Teams
            </h4>
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Driving innovation through strategic resource allocation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
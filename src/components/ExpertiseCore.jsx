import React from "react";
import { motion } from "framer-motion";

const ExpertiseCore = () => {
  return (
    <section className="relative bg-gradient-to-br from-midnight-blue via-steel-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
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
            The Innovation Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Catalyzing Profound Shifts
          </h2>
          <div className="w-24 h-1 bg-electric-cyan mx-auto"></div>
        </motion.div>

        {/* Three-Column Feature Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Column 1: Strategic Deployment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>

            {/* Number Badge */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-electric-cyan/30">01</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Strategic Deployment
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-electric-cyan/50 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Nurturing an atmosphere where the efficient use of skills and resources is paramount.
            </p>
          </motion.div>

          {/* Column 2: Ecosystem Ignition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>

            {/* Number Badge */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-electric-cyan/30">02</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Ecosystem Ignition
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-electric-cyan/50 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Utilizing a blend of experience to propel endeavors to unprecedented heights.
            </p>
          </motion.div>

          {/* Column 3: Scalable Efficiency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            {/* Number Badge */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-electric-cyan/30">03</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Scalable Efficiency
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-electric-cyan/50 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Harmonizing resources with project needs to facilitate the seamless scaling of pioneering initiatives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCore;
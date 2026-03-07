import React from "react";
import { motion } from "framer-motion";

const CatalystCore = () => {
  return (
    <section className="relative bg-gradient-to-br from-steel-blue via-charcoal-grey to-midnight-blue py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-safety-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-safety-orange rounded-full blur-3xl"></div>
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
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
          <span className="inline-block bg-safety-orange/10 border border-safety-orange/30 text-safety-orange px-5 py-2 rounded-full text-sm font-bold tracking-wider uppercase mb-6">
            Technology Core
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            High-Efficiency Catalytic De-metallization
          </h2>
          <div className="w-24 h-1 bg-safety-orange mx-auto"></div>
        </motion.div>

        {/* Three-Column Feature Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Column 1: Proprietary Chemistry */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl p-8 hover:bg-white/10 hover:border-safety-orange/40 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-safety-orange/30 to-safety-orange/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>

            {/* Number Badge */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-safety-orange/30">01</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Proprietary Chemistry
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-safety-orange/50 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Our Iron-Boron-Oxide catalyst is optimized for high-temperature stability and selective impurity capture.
            </p>
          </motion.div>

          {/* Column 2: Slurry-Phase Intensification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl p-8 hover:bg-white/10 hover:border-safety-orange/40 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-safety-orange/30 to-safety-orange/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>

            {/* Number Badge */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-safety-orange/30">02</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Slurry-Phase Intensification
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-safety-orange/50 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed">
              Designed for seamless integration into existing refinery and chemical plant footprints via slurry-phase reactor models.
            </p>
          </motion.div>

          {/* Column 3: Speciation Control */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl p-8 hover:bg-white/10 hover:border-safety-orange/40 transition-all duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-safety-orange/30 to-safety-orange/10 rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            {/* Number Badge */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-safety-orange/30">03</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              Speciation Control
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-safety-orange/50 mx-auto mb-6"></div>

            {/* Description */}
            <p className="text-lg text-white/80 text-center leading-relaxed">
              We don't just purify; we stabilize sulfur allotropes to prevent "blooming" and ensure long-term feedstock consistency.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CatalystCore;
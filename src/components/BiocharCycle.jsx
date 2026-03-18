import React from "react";
import { motion } from "framer-motion";

const BiocharCycle = () => {
  return (
    <section className="relative bg-gradient-to-br from-steel-blue via-midnight-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
            Solving the fertilizer 'poverty' in developing world
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        {/* Closed-Loop Sustainability Cycle Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-green-500/20 via-orange-500/20 to-electric-cyan/20 backdrop-blur-md border-2 border-green-500/40 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left: Icon and Title */}
              <div className="flex items-center space-x-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 bg-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-green-400">Closed-Loop Sustainability Cycle</h3>
                  <p className="text-white/70 text-md">Farm residues feed next biochar batch.</p>
                </div>
              </div>

              {/* Right: Flow Diagram */}
              <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 border border-green-500/40 px-4 py-2 rounded-lg">
                  <span className="text-green-400 font-semibold text-sm">Farm Waste</span>
                </div>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="bg-orange-500/20 border border-orange-500/40 px-4 py-2 rounded-lg">
                  <span className="text-orange-400 font-semibold text-sm">Biochar</span>
                </div>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="bg-blue-500/20 border border-blue-500/40 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-semibold text-sm">Fertilizer</span>
                </div>
                <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <div className="bg-electric-cyan/20 border border-electric-cyan/40 px-4 py-2 rounded-lg">
                  <span className="text-electric-cyan font-semibold text-sm">Crop Yield</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Four Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Step 1: RAW MATERIALS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 h-full flex flex-col shadow-lg">
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>

              {/* Category Label */}
              <div className="text-center mb-3">
                <span className="inline-block bg-green-500/20 border border-green-500/40 text-green-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Raw Materials
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                Biomass Feedstock
              </h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-4 flex-grow text-center text-base">
                Crop residues, stalks, manure, wood chips — locally sourced from rural waste streams.
              </p>

              {/* Bottom Badge - Bubble Style */}
              <div className="flex justify-center pt-4">
                <div className="bg-green-500/20 border-2 border-green-500/40 px-5 py-2 rounded-full">
                  <span className="text-green-400 font-semibold text-sm">
                    Low-cost local input
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Connector - CENTERED IN MIDDLE OF GAP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hidden lg:flex absolute top-1/2 -right-7 transform -translate-y-1/2 items-center justify-center z-20"
            >
              <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Step 2: BIOCHAR PRODUCTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col shadow-lg">
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
              </div>

              {/* Category Label */}
              <div className="text-center mb-3">
                <span className="inline-block bg-orange-500/20 border border-orange-500/40 text-orange-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Biochar Production
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                Pyrolysis Process
              </h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-4 flex-grow text-center text-base">
                Biomass heated in low-oxygen kiln. Volatiles expelled; stable carbon matrix formed.
              </p>

              {/* Bottom Badge - Bubble Style */}
              <div className="flex justify-center pt-4">
                <div className="bg-orange-500/20 border-2 border-orange-500/40 px-5 py-2 rounded-full">
                  <span className="text-orange-400 font-semibold text-sm">
                    400 - 700 °C
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Connector - CENTERED IN MIDDLE OF GAP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="hidden lg:flex absolute top-1/2 -right-7 transform -translate-y-1/2 items-center justify-center z-20"
            >
              <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Step 3: NUTRIENT LOADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col shadow-lg">
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>

              {/* Category Label */}
              <div className="text-center mb-3">
                <span className="inline-block bg-blue-500/20 border border-blue-500/40 text-blue-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Nutrient Loading
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                Impregnation
              </h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-4 flex-grow text-center text-base">
                Biochar soaked in solution. Pores fill via capillary action under agitation.
              </p>

              {/* Bottom Badge - Bubble Style */}
              <div className="flex justify-center pt-4">
                <div className="bg-blue-500/20 border-2 border-blue-500/40 px-5 py-2 rounded-full">
                  <span className="text-blue-400 font-semibold text-sm">
                    Core process
                  </span>
                </div>
              </div>
            </div>

            {/* Arrow Connector - CENTERED IN MIDDLE OF GAP */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:flex absolute top-1/2 -right-7 transform -translate-y-1/2 items-center justify-center z-20"
            >
              <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Step 4: APPLICATION & BENEFITS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-electric-cyan/20 to-electric-cyan/5 backdrop-blur-md border border-electric-cyan/30 rounded-2xl p-6 hover:border-electric-cyan/50 transition-all duration-300 h-full flex flex-col shadow-lg">
              
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-electric-cyan/20 rounded-xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
              </div>

              {/* Category Label */}
              <div className="text-center mb-3">
                <span className="inline-block bg-electric-cyan/20 border border-electric-cyan/40 text-electric-cyan px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Application & Benefits
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                Field Application
              </h3>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-4 flex-grow text-center text-base">
                Broadcast or band-applied. Compatible with standard farm equipment.
              </p>

              {/* Bottom Badge - Empty to maintain spacing */}
              <div className="flex justify-center pt-4">
                <div className="h-10"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Loaded Fertilizer and C-Sequestration */}
        <div className="grid lg:grid-cols-4 gap-6">
          
          {/* Empty spacer for columns 1-2 */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Loaded Fertilizer - Under Step 3 (Nutrient Loading) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="lg:col-span-1 relative"
          >
            <div className="bg-gradient-to-br from-green-500/15 to-blue-500/15 backdrop-blur-md border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 shadow-lg h-full">
              <div className="flex flex-col h-full">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Loaded Fertilizer</h3>
                    <p className="text-white/70 text-sm">N-P-K enriched granules. Reduces leaching by 50-70%.</p>
                  </div>
                </div>

                <div className="space-y-3 flex-grow">
                  {/* Nutrient Types */}
                  <div className="flex space-x-2">
                    <div className="flex-1 bg-green-500/20 border border-green-500/40 px-3 py-2 rounded-lg text-center">
                      <span className="text-green-400 font-bold text-sm">P loaded</span>
                    </div>
                    <div className="flex-1 bg-blue-500/20 border border-blue-500/40 px-3 py-2 rounded-lg text-center">
                      <span className="text-blue-400 font-bold text-sm">N loaded</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upward Arrow to Impregnation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 items-center justify-center z-20"
            >
              <motion.svg
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-8 h-8 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </motion.svg>
            </motion.div>
          </motion.div>

          {/* C-Sequestration - Under Step 4 (Application & Benefits) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-electric-cyan/15 to-blue-500/15 backdrop-blur-md border border-electric-cyan/30 rounded-2xl p-6 hover:border-electric-cyan/50 transition-all duration-300 shadow-lg h-full">
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 bg-electric-cyan/20 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">C-Sequestration</h3>
                <p className="text-white/90 text-base">Net-negative CO₂ per ton applied.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BiocharCycle;
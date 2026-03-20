import React from "react";
import { motion } from "framer-motion";

const GlobalImpact = () => {
  return (
    <section className="relative bg-gradient-to-br from-midnight-blue via-charcoal-grey to-steel-blue py-24 md:py-32 overflow-hidden min-h-screen">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan px-4 py-2 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase mb-4 md:mb-6">
            Strategic Focus
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 px-4">
            Technology for Development
          </h2>
          <div className="w-20 md:w-24 h-1 bg-electric-cyan mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <div className="bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-6 md:p-8 lg:p-12 hover:bg-white/10 transition-all duration-300">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed text-center">
              We leverage talent and resources to unleash transformative change. By aligning our
              capabilities with the specific goals of each project, we amplify impact and ensure
              groundbreaking initiatives reach their maximum potential.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 md:mb-20"
        >
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-electric-cyan/30 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 relative shadow-2xl">
            
            <div className="text-center mb-4 md:mb-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="inline-block bg-gradient-to-br from-midnight-blue/95 to-charcoal-grey/95 backdrop-blur-xl border-2 border-electric-cyan/50 rounded-xl md:rounded-2xl px-4 py-3 md:px-8 md:py-4 shadow-2xl"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">The Mwamba Bridge</h3>
                <p className="text-xs sm:text-sm md:text-base text-electric-cyan font-semibold">Connecting Innovation to Impact</p>
              </motion.div>
            </div>

            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-midnight-blue/60 to-charcoal-grey/60 rounded-xl md:rounded-2xl overflow-hidden shadow-inner">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'brightness(0.5) contrast(1.3) saturate(0.8)',
                }}
              ></div>

              <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue/70 via-transparent to-charcoal-grey/70"></div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#34D399" stopOpacity="0.9" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <motion.line x1="24%" y1="46%" x2="52%" y2="57%" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="6,4" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ duration: 2, delay: 0.5 }} />
                <motion.line x1="50%" y1="30%" x2="52%" y2="57%" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="6,4" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ duration: 2, delay: 0.7 }} />
                <motion.line x1="24%" y1="46%" x2="28%" y2="65%" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="6,4" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ duration: 2, delay: 0.9 }} />
                <motion.line x1="50%" y1="30%" x2="72%" y2="38%" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="6,4" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ duration: 2, delay: 1.1 }} />
                <motion.line x1="24%" y1="46%" x2="72%" y2="38%" stroke="url(#lineGrad)" strokeWidth="3" strokeDasharray="6,4" filter="url(#glow)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.8 }} transition={{ duration: 2, delay: 1.3 }} />

                <motion.circle r="4" fill="#00D9FF" filter="url(#glow)" initial={{ opacity: 0 }} animate={{ cx: ["24%", "52%"], cy: ["46%", "57%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, delay: 2.5, repeat: Infinity, repeatDelay: 1, ease: "linear" }} />
                <motion.circle r="4" fill="#00D9FF" filter="url(#glow)" initial={{ opacity: 0 }} animate={{ cx: ["50%", "52%"], cy: ["30%", "57%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, delay: 2.7, repeat: Infinity, repeatDelay: 1, ease: "linear" }} />
                <motion.circle r="4" fill="#00D9FF" filter="url(#glow)" initial={{ opacity: 0 }} animate={{ cx: ["24%", "28%"], cy: ["46%", "65%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, delay: 2.9, repeat: Infinity, repeatDelay: 1, ease: "linear" }} />
                <motion.circle r="4" fill="#00D9FF" filter="url(#glow)" initial={{ opacity: 0 }} animate={{ cx: ["50%", "72%"], cy: ["30%", "38%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, delay: 3.1, repeat: Infinity, repeatDelay: 1, ease: "linear" }} />
                <motion.circle r="4" fill="#00D9FF" filter="url(#glow)" initial={{ opacity: 0 }} animate={{ cx: ["24%", "72%"], cy: ["46%", "38%"], opacity: [0, 1, 1, 0] }} transition={{ duration: 3, delay: 3.3, repeat: Infinity, repeatDelay: 1, ease: "linear" }} />
              </svg>

              <div className="absolute top-[46%] left-[24%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative group">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-electric-cyan/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-electric-cyan rounded-full relative shadow-xl shadow-electric-cyan/60 ring-2 ring-electric-cyan/30"></div>
                  <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 bg-midnight-blue/95 border-2 border-electric-cyan px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    <p className="text-xs sm:text-sm text-white font-bold">North America</p>
                    <p className="text-[10px] sm:text-xs text-electric-cyan">Innovation Hub</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative group">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-electric-cyan/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-electric-cyan rounded-full relative shadow-xl shadow-electric-cyan/60 ring-2 ring-electric-cyan/30"></div>
                  <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 bg-midnight-blue/95 border-2 border-electric-cyan px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    <p className="text-xs sm:text-sm text-white font-bold">Europe</p>
                    <p className="text-[10px] sm:text-xs text-electric-cyan">Innovation Hub</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[57%] left-[52%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative group">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-400/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-400 rounded-full relative shadow-xl shadow-green-400/60 ring-2 ring-green-400/30"></div>
                  <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    <p className="text-xs sm:text-sm text-white font-bold">Africa</p>
                    <p className="text-[10px] sm:text-xs text-green-400">Impact Zone</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[38%] left-[72%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative group">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-400/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-400 rounded-full relative shadow-xl shadow-green-400/60 ring-2 ring-green-400/30"></div>
                  <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    <p className="text-xs sm:text-sm text-white font-bold">Asia</p>
                    <p className="text-[10px] sm:text-xs text-green-400">Impact Zone</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-[65%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative group">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-400/30 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-green-400 rounded-full relative shadow-xl shadow-green-400/60 ring-2 ring-green-400/30"></div>
                  <div className="absolute -top-14 sm:-top-16 left-1/2 -translate-x-1/2 bg-midnight-blue/95 border-2 border-green-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
                    <p className="text-xs sm:text-sm text-white font-bold">South America</p>
                    <p className="text-[10px] sm:text-xs text-green-400">Impact Zone</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-gradient-to-br from-midnight-blue/95 to-charcoal-grey/95 backdrop-blur-xl border-2 border-electric-cyan/40 rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 shadow-2xl z-30">
               <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-electric-cyan/30 rounded-full absolute animate-pulse"></div>
                    <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-electric-cyan rounded-full relative shadow-lg ring-2 ring-electric-cyan/30"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-white font-semibold">Tech Hubs</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-green-400/30 rounded-full absolute animate-pulse"></div>
                    <div className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-green-400 rounded-full relative shadow-lg ring-2 ring-green-400/30"></div>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-white font-semibold">Impact Zones</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-5 sm:w-6 md:w-7 h-0.5 bg-electric-cyan rounded-full flex-shrink-0"></div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-white font-semibold">Mwamba Bridge</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalImpact;
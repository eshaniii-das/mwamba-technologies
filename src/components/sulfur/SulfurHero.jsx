import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from "react-router-dom";

const SulfurHero = () => {
  const navigate = useNavigate();
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded", container);
  }, []);

  const particleOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#FF6B35",
      },
      links: {
        color: "#FF6B35",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        value: 40,
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-steel-blue via-charcoal-grey to-midnight-blue overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles-sulfur"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
        className="absolute inset-0"
      />

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.4) contrast(1.2)',
        }}
      ></div>

      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-steel-blue/40"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        <div className="w-full max-w-5xl py-20">
          {/* Add spacing between navbar and content */}
          <div className="pt-24 md:pt-32"></div>

          {/* Badge/Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block bg-safety-orange/10 border border-safety-orange/30 text-safety-orange px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
              Industrial Sulfur Valorization
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Beyond Fertilizer: Transforming Industrial Sulfur
            <br />
            <span className="text-safety-orange">through Catalytic Innovation</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-4xl leading-relaxed"
          >
            Leveraging our proprietary Fe-B-O catalyst technology to upgrade refinery-grade sulfur
            into high-purity, stabilized feedstocks for the global energy and chemical transition.
          </motion.p>

          {/* CTA Buttons - FIXED */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-safety-orange/40 hover:border-safety-orange text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
              onClick={() => navigate('/contact')}
            >
              Inquire for Partnership
            </button>
          </motion.div>

          {/* Key Specs / Tech Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-white/60 text-sm uppercase tracking-wider mb-6 font-semibold">
              Technology Readiness Level 4-5
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-safety-orange mb-1">&gt;95%</h3>
                <p className="text-white/70 text-sm">Impurity Removal</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-safety-orange mb-1">10+</h3>
                <p className="text-white/70 text-sm">Catalyst Reuse Cycles</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-safety-orange mb-1">130-170°C</h3>
                <p className="text-white/70 text-sm">Operating Temp</p>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-safety-orange mb-1">Fe-B-O</h3>
                <p className="text-white/70 text-sm">Proprietary Catalyst</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/50 text-xs uppercase tracking-wider mb-2">Scroll</span>
          <svg className="w-6 h-6 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SulfurHero;
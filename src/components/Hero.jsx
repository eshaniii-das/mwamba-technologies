import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useNavigate } from "react-router-dom"; // Add this import

const Hero = () => {
  const [videoError, setVideoError] = useState(false);
  const navigate = useNavigate(); // Add this hook

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
        value: "#00D9FF",
      },
      links: {
        color: "#00D9FF",
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
        value: 50,
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
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">

        {/* Video Background */}
        {!videoError && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => {
              console.error("Video failed to load. Check file path: public/tech-background.mp4");
              setVideoError(true);
            }}
            onLoadedData={() => console.log("Video loaded successfully!")}
          >
            <source src="/tech-background.mp4" type="video/mp4" />
          </video>
        )}

        {/* Fallback Image Background (if video fails) */}
        {videoError && (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(10, 17, 40, 0.90) 0%, rgba(44, 62, 80, 0.80) 50%, rgba(10, 17, 40, 0.90) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-blue/90 via-steel-blue/80 to-midnight-blue/90 z-10"></div>

      </div>

      {/* Main Content - Centered */}
      <div className="relative z-30 w-full min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl w-full text-center">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white mb-8"
          >
            Sparking Tomorrow,
            <br />
            <span className="text-electric-cyan">Today.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            Breakthrough technology developers and innovation architects weaving
            cutting-edge skills into custom solutions for the world's toughest challenges.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <button
              className="bg-electric-cyan hover:bg-cyan-500 text-midnight-blue font-bold text-lg md:text-xl px-12 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 uppercase tracking-wide"
              onClick={() => navigate('/contact')}
            >
              Join the Movement
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/50 text-xs uppercase tracking-wider mb-2">Scroll</span>
          <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
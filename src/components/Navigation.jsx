import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll for header background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 100; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/", type: "link" },
    { name: "Sulfur Technology", path: "/sulfur-technology", type: "link" },
    { name: "Contact", path: "/contact", type: "link" },
  ];

  const isActive = (link) => {
    if (link.type === "link") {
      if (link.path === "/") return location.pathname === "/";
      return location.pathname === link.path;
    }
    return false;
  };

  const handleNavClick = (e, link) => {
    if (link.type === "scroll") {
      e.preventDefault();
      scrollToSection(link.sectionId);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-midnight-blue/95 backdrop-blur-lg shadow-lg border-b border-electric-cyan/10"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-24">
          
          {/* Logo - Left Aligned */}
<Link to="/" className="flex items-center space-x-4 group">
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    {/* Logo Container */}
    <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan/20 to-transparent rounded-xl flex items-center justify-center shadow-lg shadow-electric-cyan/30 group-hover:shadow-electric-cyan/50 transition-all duration-300 p-2 backdrop-blur-sm border border-electric-cyan/20">
      <img 
        src="/logo.jpg" 
        alt="Mwamba Technologies Logo" 
        className="w-fit h-fit object-contain"
      />
    </div>
    
    {/* Animated ring (optional - remove if you don't want it) */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border-2 border-electric-cyan/30 rounded-xl"
    ></motion.div>
  </motion.div>
  
  {/* Company Name */}
  <div className="hidden md:block">
    <h1 className="text-2xl font-bold text-white leading-tight">
      Mwamba Technologies
    </h1>
    <p className="text-sm text-electric-cyan uppercase tracking-wider">
      Innovation Architects
    </p>
  </div>
</Link>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => (
              link.type === "link" ? (
                <Link
                  key={index}
                  to={link.path}
                  className={`relative px-5 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    isActive(link)
                      ? "text-electric-cyan bg-electric-cyan/10"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={index}
                  onClick={(e) => handleNavClick(e, link)}
                  className="relative px-5 py-3 text-base font-semibold rounded-lg transition-all duration-300 text-white/80 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center space-y-2 focus:outline-none group"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-electric-cyan group-hover:bg-white transition-colors"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-0.5 bg-electric-cyan group-hover:bg-white transition-colors"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-electric-cyan group-hover:bg-white transition-colors"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-midnight-blue/98 backdrop-blur-xl border-t border-electric-cyan/10"
          >
            <div className="container mx-auto px-6 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.type === "link" ? (
                    <Link
                      to={link.path}
                      className={`block px-5 py-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                        isActive(link)
                          ? "bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={(e) => handleNavClick(e, link)}
                      className="w-full text-left block px-5 py-4 rounded-lg text-lg font-semibold transition-all duration-300 text-white/80 hover:bg-white/5 hover:text-white"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
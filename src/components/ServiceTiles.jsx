import React from "react";
import { motion } from "framer-motion";

const ServiceTiles = () => {
  const services = [
    {
      id: 1,
      title: "Innovation Architects",
      description: "Bespoke ecosystems of technological solutions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-electric-cyan/20 to-electric-cyan/5",
    },
    {
      id: 2,
      title: "Tech Fusion Forge",
      description: "Forging synergies between disparate technologies.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-electric-cyan/20 to-electric-cyan/5",
    },
    {
      id: 3,
      title: "Prototyping Playground",
      description: "Fast-tracking visions from napkin sketches to reality.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      gradient: "from-electric-cyan/20 to-electric-cyan/5",
    },
    {
      id: 4,
      title: "Dream Team Catalysts",
      description: "Assembling a network of brilliant minds for implementation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-electric-cyan/20 to-electric-cyan/5",
    },
    {
      id: 5,
      title: "Futureproof Navigator",
      description: "Providing the foresight to navigate the changing terrain of innovation.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: "from-electric-cyan/20 to-electric-cyan/5",
    },
  ];

  return (
    <section id="services" className="relative bg-gradient-to-br from-midnight-blue via-steel-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-electric-cyan rounded-full blur-3xl"></div>
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
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-electric-cyan mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transforming ideas into reality through innovative technology solutions and strategic expertise.
          </p>
        </motion.div>

        {/* Service Tiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-md border border-electric-cyan/20 rounded-2xl p-8 hover:bg-white/10 hover:border-electric-cyan/40 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-electric-cyan/30 to-electric-cyan/10 rounded-2xl mb-6 text-electric-cyan group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Service Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-electric-cyan/10 group-hover:text-electric-cyan/20 transition-colors duration-300">
                  {service.id}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-electric-cyan transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-1 bg-electric-cyan/50 mb-4 group-hover:w-full transition-all duration-300"></div>

                {/* Description */}
                <p className="text-lg text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTiles;
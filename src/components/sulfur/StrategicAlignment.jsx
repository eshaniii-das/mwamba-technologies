import React from "react";
import { motion } from "framer-motion";

const StrategicAlignment = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Compatible with existing Sulfur Recovery Units (SRU)",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lower OpEx compared to traditional distillation or hydro-treating",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Enables circularity by turning a byproduct into a premium chemical feedstock",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-midnight-blue via-steel-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-safety-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-safety-orange rounded-full blur-3xl"></div>
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
            Strategic Alignment
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Engineered for Scalable Integration
          </h2>
          <div className="w-24 h-1 bg-safety-orange mx-auto"></div>
        </motion.div>

        {/* Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center mb-6">
              Our process is designed with the global infrastructure of <span className="text-safety-orange font-bold">Shell</span> and{" "}
              <span className="text-safety-orange font-bold">Technip Energies</span> in mind.
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-center">
              By utilizing standard slurry-phase reactor configurations and advanced hot-filtration internals, 
              we offer a credible pathway to commercial scale within 3–5 years.
            </p>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Key Advantages
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-safety-orange/20 to-safety-orange/5 backdrop-blur-md border border-safety-orange/30 rounded-xl p-6 hover:border-safety-orange/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 text-safety-orange">
                    {feature.icon}
                  </div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    {feature.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline to Commercial Scale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-br from-safety-orange/10 to-safety-orange/5 backdrop-blur-md border border-safety-orange/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            Pathway to Commercial Scale
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-safety-orange mb-2">Year 1-2</div>
              <p className="text-white/80 text-lg">Pilot-Scale Demonstration</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-safety-orange mb-2">Year 2-3</div>
              <p className="text-white/80 text-lg">Catalyst Manufacturing Scale-Up</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-safety-orange mb-2">Year 3-5</div>
              <p className="text-white/80 text-lg">Commercial Deployment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicAlignment;
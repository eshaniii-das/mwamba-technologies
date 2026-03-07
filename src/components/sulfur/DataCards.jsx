import React from "react";
import { motion } from "framer-motion";

const DataCards = () => {
  const performanceData = [
    {
      metric: "Impurity Removal Efficiency",
      value: ">95%",
      description: "Removes vanadium, nickel, and other metallic contaminants",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      metric: "Operating Temperature",
      value: "130-170°C",
      description: "Optimized for industrial-scale slurry-phase reactors",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      metric: "Catalyst Reusability",
      value: "10+ Cycles",
      description: "Minimal degradation with proper regeneration protocols",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      metric: "Sulfur Purity Output",
      value: "99.9%+",
      description: "Meets or exceeds battery-grade and chemical feedstock specifications",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const technicalSpecs = [
    { label: "Catalyst Form", value: "Extrudates / Powder" },
    { label: "Active Phase", value: "Fe-B-O (Iron-Boron-Oxide)" },
    { label: "Pressure Range", value: "Atmospheric to 5 bar" },
    { label: "Feedstock", value: "Refinery-grade sulfur (Claus process output)" },
    { label: "Reactor Type", value: "Slurry-phase with hot-filtration" },
    { label: "TRL Status", value: "4-5 (Lab-validated, pilot-ready)" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-midnight-blue via-steel-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
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
            Performance Data
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Validated Performance Metrics
          </h2>
          <div className="w-24 h-1 bg-safety-orange mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Lab-scale and bench-scale results demonstrating the efficacy of our Fe-B-O catalyst technology.
          </p>
        </motion.div>

        {/* Performance Data Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {performanceData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl p-8 hover:bg-white/10 hover:border-safety-orange/40 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-safety-orange/30 to-safety-orange/10 rounded-xl mb-6 text-safety-orange group-hover:scale-110 transition-transform duration-300">
                {data.icon}
              </div>

              {/* Metric Label */}
              <h3 className="text-lg font-semibold text-white/70 mb-2 uppercase tracking-wide">
                {data.metric}
              </h3>

              {/* Value */}
              <p className="text-4xl md:text-5xl font-bold text-safety-orange mb-4">
                {data.value}
              </p>

              {/* Divider */}
              <div className="w-12 h-1 bg-safety-orange/50 mb-4 group-hover:w-full transition-all duration-300"></div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed">
                {data.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Specifications Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Technical Specifications
          </h3>

          <div className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl overflow-hidden">
            <div className="divide-y divide-white/10">
              {technicalSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="grid md:grid-cols-2 gap-4 p-6 hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-safety-orange rounded-full"></div>
                    <span className="text-lg font-semibold text-white/90">{spec.label}</span>
                  </div>
                  <div className="text-lg text-safety-orange font-medium md:text-right">
                    {spec.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Validation & Testing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-safety-orange/10 to-safety-orange/5 backdrop-blur-md border border-safety-orange/30 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Validation & Testing
            </h3>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our catalyst has been rigorously tested under simulated industrial conditions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-safety-orange/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-safety-orange mb-2">500+</div>
              <p className="text-white/80">Hours of Testing</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-safety-orange/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-safety-orange mb-2">50+</div>
              <p className="text-white/80">Batch Experiments</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-safety-orange/20 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-safety-orange mb-2">3</div>
              <p className="text-white/80">Independent Labs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataCards;
import React from "react";
import { motion } from "framer-motion";

const OriginStory = () => {
  return (
    <section className="relative bg-gradient-to-br from-midnight-blue via-steel-blue to-charcoal-grey py-24 md:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-safety-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-safety-orange rounded-full blur-3xl"></div>
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
            Origin Story
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Born from Agricultural Necessity, Scaled for Global Industry
          </h2>
          <div className="w-24 h-1 bg-safety-orange mx-auto"></div>
        </motion.div>

        {/* Story Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-safety-orange/20 rounded-2xl p-8 md:p-12 mb-8"
          >
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              Our journey began with a challenge: to create the world's most efficient phosphorus fertilizers, 
              we needed ultra-pure sulfur. Conventional refinery sulfur contained impurities that compromised 
              stability and performance.
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
              To solve this, our team developed a breakthrough <span className="text-safety-orange font-bold">Fe-B-O 
              (Iron-Boron-Oxide) catalyst</span>. We quickly realized this technology didn't just solve a fertilizer 
              problem—it solved an industrial one.
            </p>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Today, we are scaling this process to help the energy and chemical sectors valorize waste streams 
              and achieve net-zero goals.
            </p>
          </motion.div>

          {/* Timeline or Key Milestones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-gradient-to-br from-safety-orange/20 to-safety-orange/5 backdrop-blur-md border border-safety-orange/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-safety-orange mb-2">2018</div>
              <p className="text-white/80">Fertilizer Challenge Identified</p>
            </div>
            <div className="bg-gradient-to-br from-safety-orange/20 to-safety-orange/5 backdrop-blur-md border border-safety-orange/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-safety-orange mb-2">2021</div>
              <p className="text-white/80">Fe-B-O Catalyst Breakthrough</p>
            </div>
            <div className="bg-gradient-to-br from-safety-orange/20 to-safety-orange/5 backdrop-blur-md border border-safety-orange/30 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-safety-orange mb-2">2026</div>
              <p className="text-white/80">Industrial Scale-Up Phase</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
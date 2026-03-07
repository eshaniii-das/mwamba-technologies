import React from 'react';
import { motion } from 'framer-motion';

const values = [
  'Agility',
  'Synergy',
  'Foresight'
];

const ImpactSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg hidden lg:block z-40"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-6">Core Values</h3>
      <ul className="space-y-4">
        {values.map((value, index) => (
          <li key={index} className="text-gray-600">
            <span className="text-cyan-500 mr-2">•</span> {value}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ImpactSidebar;
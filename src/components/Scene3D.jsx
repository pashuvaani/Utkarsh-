import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Scene3D = () => {
  const { isDark } = useTheme();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isDark
            ? 'bg-gradient-to-br from-black via-gray-900 to-black'
            : 'bg-gradient-to-br from-white via-gray-50 to-white'
        }`}
      />
      
      {/* Floating orbs */}
      <div
        className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-emerald-500' : 'bg-emerald-400'
        }`}
        style={{
          top: '10%',
          left: '10%',
          animation: 'float-slow 20s ease-in-out infinite'
        }}
      />
      <div
        className={`absolute w-80 h-80 rounded-full blur-3xl opacity-20 ${
          isDark ? 'bg-cyan-500' : 'bg-cyan-400'
        }`}
        style={{
          top: '50%',
          right: '10%',
          animation: 'float-medium 15s ease-in-out infinite 2s'
        }}
      />
      <div
        className={`absolute w-64 h-64 rounded-full blur-3xl opacity-15 ${
          isDark ? 'bg-emerald-400' : 'bg-emerald-300'
        }`}
        style={{
          bottom: '20%',
          left: '30%',
          animation: 'float-fast 12s ease-in-out infinite 4s'
        }}
      />
      
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `${
            isDark
              ? 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)'
              : 'linear-gradient(rgba(5, 150, 105, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 150, 105, 0.1) 1px, transparent 1px)'
          }`,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default Scene3D;

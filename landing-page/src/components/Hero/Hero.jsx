import React from 'react';
import { FaPlay, FaEye } from 'react-icons/fa';
import soImage from '../../assets/img/so.jpg';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="pt-16 min-h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${soImage})` }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-black/50 p-6 rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Solução de Exclusão Mútua
          <span className="block text-purple-400">com RMI</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          Explore as técnicas avançadas de sincronização em sistemas distribuídos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('o-que-e')}
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
          >
            <FaPlay /> Começar Exploração
          </button>
          <button
            onClick={() => scrollToSection('rmi')}
            className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg flex items-center gap-2"
          >
            <FaEye /> Ver RMI
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

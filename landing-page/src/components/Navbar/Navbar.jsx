import React from 'react';

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
  const menuItems = [
    { id: 'o-que-e', label: 'O que é' },
    { id: 'desafios', label: 'Desafios' },
    { id: 'familias', label: 'Famílias' },
    { id: 'rmi', label: 'RMI' },
    { id: 'quando-usar', label: 'Quando Usar' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-xl">RMI & Exclusão Mútua</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-purple-300 transition-colors ${
                  activeSection === item.id ? 'text-purple-300 border-b-2 border-purple-300' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md rounded-lg mt-2 p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-purple-300 py-2 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Section = ({ id, title, children, className }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

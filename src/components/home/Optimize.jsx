import React from 'react';
import Agri from '../../assets/Home/Agri.jpg';

const HarvestHero = () => {
  return (
    <div className="relative w-full h-96">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Agri})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Optimize Your Harvest with Us
        </h1>
        
        <p className="max-w-2xl mb-8 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit nunc nec orci dictum, in convallis odio gravida.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor elit ipsum, a sollicitudin orci laoreet non.
        </p>
        
        <button className="px-6 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HarvestHero;
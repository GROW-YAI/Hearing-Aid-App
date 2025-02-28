import React from 'react';

import Family from '../assets/images/family.png';

const Solution = () => {
  return (
    <div className="flex flex-col gap-16">
      
      <div 
        className="relative w-full h-96 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${Family})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10 max-w-4xl px-6">
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900">Affordable and Accessible</h3>
              <p className="text-white mt-3">
                The project focuses on developing a locally-made hearing aid that is significantly more affordable than imported options.
              </p>
            </div>
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 p-6 rounded-lg shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900">Empowering Innovation</h3>
              <p className="text-white mt-3">
                The initiative aims to empower local communities and create a sustainable solution that addresses the specific needs of the region.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;

import React from 'react';
import Land from '../assets/images/land.png';

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-16 py-12 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          The Problem: Hearing Aid Accessibility in Bono East
        </h2>
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <span className="bg-gray-300 text-gray-900 font-bold px-4 py-2 rounded text-xl">1</span>
            <p className="text-gray-800 text-lg">Limited access to affordable hearing aids, especially in rural areas like Bono East.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="bg-gray-300 text-gray-900 font-bold px-4 py-2 rounded text-xl">2</span>
            <p className="text-gray-800 text-lg">High cost of imported hearing aids, creating a significant barrier for many.</p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="bg-gray-300 text-gray-900 font-bold px-4 py-2 rounded text-xl">3</span>
            <p className="text-gray-800 text-lg">Lack of readily available services and support for individuals with hearing impairments.</p>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
        <img
          src={Land}
          alt="Two men conversing, one wearing a hearing aid"
          className="rounded-xl shadow-xl w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default Services;

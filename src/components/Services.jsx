import React from 'react';
import LazyImage from './LazyImage';
import Bono from '../assets/images/bono.png';
import { FaBrain, FaEarListen } from "react-icons/fa6";
import { BsCloudFill } from "react-icons/bs";
import Aid from '../assets/images/aid.png';
import Sample from "../components/Sample";
import Blog from "../components/Blog";

const Services = () => {
  return (
    <div>
      <Sample/>
    
   
      
      {/* Problem Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 bg-white">
        <div className="md:w-1/2">
          <div className="mb-6 md:mb-8">
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1E22] mb-2'>The Problem:</h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF1B2A]">Hearing Aid Accessibility in Bono East</h3>
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start space-x-3 md:space-x-4">
              <span className="bg-gray-300 text-[#1D1E22] font-bold px-3 py-2 md:px-4 rounded text-lg md:text-xl flex-shrink-0">1</span>
              <p className="text-gray-800 text-base md:text-lg">Limited access to affordable hearing aids, especially in rural areas like Bono East.</p>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4">
              <span className="bg-gray-300 text-[#1D1E22] font-bold px-3 py-2 md:px-4 rounded text-lg md:text-xl flex-shrink-0">2</span>
              <p className="text-gray-800 text-base md:text-lg">High cost of imported hearing aids, creating a significant barrier for many.</p>
            </div>
            <div className="flex items-start space-x-3 md:space-x-4">
              <span className="bg-gray-300 text-[#1D1E22] font-bold px-3 py-2 md:px-4 rounded text-lg md:text-xl flex-shrink-0">3</span>
              <p className="text-gray-800 text-base md:text-lg">Lack of readily available services and support for individuals with hearing impairments.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <LazyImage
            src={Bono}
            alt="Two men conversing, one wearing a hearing aid"
            className="rounded-xl shadow-xl w-full max-w-lg"
          />
        </div>
      </div>
      <Blog/>

      {/* How It Works Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 bg-gray-100">
        <div className="md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1E22] mb-6 md:mb-8 leading-tight">
            How It Works: The Technology Behind the Innovation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <FaBrain className="text-[#FF1B2A] text-3xl md:text-4xl mb-3" />
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                Faila's hearing aid utilizes advanced but readily available technology, ensuring both effectiveness and affordability.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <FaEarListen className="text-[#FF1B2A] text-3xl md:text-4xl mb-3" />
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                The design is tailored to meet the unique needs of the local population, considering factors like ear shape and common hearing issues.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              <BsCloudFill className="text-[#FF1B2A] text-3xl md:text-4xl mb-3" />
              <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                The hearing aid incorporates a clear and crisp sound amplification system, facilitating effective communication.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <LazyImage
            src={Aid}
            alt="Diagram of hearing aid technology"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-lg h-64 sm:h-80 md:h-96 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

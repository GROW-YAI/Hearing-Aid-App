import React from 'react';
import { FaBrain, FaEarListen } from "react-icons/fa6";
import { BsCloudFill } from "react-icons/bs";
import Aid from '../assets/images/aid.png';

const Solution = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-16 py-12 bg-white">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          How It Works: The Technology Behind the Innovation
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <FaBrain className="text-orange-500 text-4xl mb-3" />
            <p className="text-gray-700 text-lg">
              Faila's hearing aid utilizes advanced but readily available technology, ensuring both effectiveness and affordability.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaEarListen className="text-orange-500 text-4xl mb-3" />
            <p className="text-gray-700 text-lg">
              The design is tailored to meet the unique needs of the local population, considering factors like ear shape and common hearing issues.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <BsCloudFill className="text-orange-500 text-4xl mb-3" />
            <p className="text-gray-700 text-lg">
              The hearing aid incorporates a clear and crisp sound amplification system, facilitating effective communication.
            </p>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
        <img
          src={Aid}
          alt="Diagram of hearing aid technology"
          className="rounded-lg shadow-lg w-full max-w-lg"
        />
      </div>
    </div>
  );
};

export default Solution;

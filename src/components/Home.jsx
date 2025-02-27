import React from "react";
import { FaRegClock } from "react-icons/fa6";
import Land from '../assets/images/land.png';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 via-yellow-100 to-orange-100 min-h-screen flex items-center justify-center px-8 pt-4">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
       
        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            Faila<br />Smart{" "}
            <span className="text-orange-500">Device</span>
          </h1>
          <p className="mt-4 text-gray-600">
            Our facility provides quick and effective treatment to ensure that
            our clients can resume their daily activities with a high quality
            of life.
          </p>

         
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition">
              Our Specialists
            </button>
            <button className="bg-white shadow-md flex items-center gap-2 px-6 py-3 rounded-md font-semibold hover:shadow-lg transition">
              <FaRegClock className="text-orange-500" />
              Schedule An Appointment
            </button>
          </div>
        </div>


        <div className="relative flex justify-center">
          <img
            src={Land}
            alt="Smiling Woman"
            className="relative z-10 w-80 md:w-96"
          />

          <div className="absolute -top-10 left-0 w-40 h-40 rounded-full border-8 border-orange-400 opacity-50"></div>
          <div className="absolute -bottom-10 right-10 w-24 h-24 bg-yellow-200 rounded-full opacity-50"></div>
          <div className="absolute -top-5 right-0 text-orange-300 text-5xl">😊</div>
          <div className="absolute -bottom-16 left-5 text-yellow-400 text-4xl">〰</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

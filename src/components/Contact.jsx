import React from 'react';
import { FaPhone, FaFacebook, FaTiktok, FaInstagram,  FaLinkedinIn } from 'react-icons/fa';
import LazyImage from './LazyImage';
import reliefImage from '../assets/images/relief.png';

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10 px-4">
      <div className="relative bg-white shadow-lg rounded-2xl p-6 w-full max-w-lg text-center h-80 md:h-96">
     
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <LazyImage
            src={reliefImage}
            alt="Relief"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>
        
        <div className="mt-20 md:mt-24">
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF1B2A]">Contact Me</h2>
          <p className="text-gray-600 mt-2 flex items-center justify-center gap-2 text-lg md:text-xl">
            <FaPhone /> +123 456 7890
          </p>
          
        
          <div className="flex justify-center gap-6 mt-6 text-[#FF1B2A] text-2xl md:text-3xl">
            <a href="https://www.facebook.com/faliasmartdevice/" className="hover:text-[#FF1B2A]">
              <FaFacebook />
            </a>
            <a href="https://www.tiktok.com/@failasmartdevice" className="hover:text-[#FF1B2A]">
              <FaTiktok />
            </a>
            <a href="https://www.instagram.com/faliasmartdevice/" className="hover:text-[#FF1B2A]">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/106643819/admin/dashboard/" className="hover:text-[#FF1B2A]">
              <FaLinkedinIn/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
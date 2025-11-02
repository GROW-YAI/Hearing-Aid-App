import React from 'react';
import { FaPhone, FaFacebook, FaTiktok, FaInstagram,  FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
        
        <div className="py-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[#FF1B2A] mb-4">Contact Me</h2>
          <p className="text-gray-600 mt-2 flex items-center justify-center gap-2 text-lg md:text-xl">
            <FaPhone /> +233 59 183 6591
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
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D1E22] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
       
        <div>
          <h2 className="text-xl font-bold text-[#FF1B2A]">Our Mission</h2>
          <p className="mt-3 text-gray-300 text-sm">
            Faila Mahamudu, a visually impaired young woman from Techiman, is
            committed to enhancing communication for the deaf community. She is
            developing an affordable, locally-made hearing aid to foster
            inclusion and independence.
          </p>
        </div>


        <div>
          <h2 className="text-xl font-bold text-[#FF1B2A]">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-[#FF1B2A] transition">Home</a></li>
            <li><a href="#" className="hover:text-[#FF1B2A] transition">About</a></li>
            <li><a href="#" className="hover:text-[#FF1B2A] transition">Services</a></li>
            <li><a href="#" className="hover:text-[#FF1B2A] transition">Solution</a></li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-xl font-bold text-[#FF1B2A]">Follow Us</h2>
          <div className="mt-3 flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} EchoBridge. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

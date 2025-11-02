import React from "react";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1D1E22] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
       
        {/* Our Mission Section */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-[#FF1B2A] mb-4 text-center">Our Mission</h2>
          <p className="text-gray-300 text-sm leading-relaxed text-center md:text-left">
            Faila Mahamudu, a visually impaired young woman from Techiman, is
            committed to enhancing communication for the deaf community. She is
            developing an affordable, locally-made hearing aid to foster
            inclusion and independence.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col md:justify-self-center">
          <h2 className="text-xl font-bold text-[#FF1B2A] mb-4 text-center">Quick Links</h2>
          <ul className="space-y-2 flex flex-col items-center">
            <li>
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#FF1B2A] transition text-gray-300 hover:translate-x-1 duration-200"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#FF1B2A] transition text-gray-300 hover:translate-x-1 duration-200"
              >
                About Us
              </button>
            </li>
            <li>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#FF1B2A] transition text-gray-300 hover:translate-x-1 duration-200"
              >
                Services
              </button>
            </li>
            <li>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-[#FF1B2A] transition text-gray-300 hover:translate-x-1 duration-200"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col md:justify-self-end">
          <h2 className="text-xl font-bold text-[#FF1B2A] mb-4 text-center">Follow Us</h2>
          <div className="flex space-x-4 justify-center md:justify-end">
            <a href="https://www.facebook.com/faliasmartdevice/" className="p-3 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition-all duration-300 hover:scale-110">
              <FaFacebookF />
            </a>
            <a href="https://www.tiktok.com/@failasmartdevice" className="p-3 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition-all duration-300 hover:scale-110">
              <FaTiktok />
            </a>
            <a href="https://www.linkedin.com/company/106643819/admin/dashboard/" className="p-3 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition-all duration-300 hover:scale-110">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/faliasmartdevice/" className="p-3 rounded-full bg-gray-700 hover:bg-[#FF1B2A] transition-all duration-300 hover:scale-110">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} FailaSmart Device. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

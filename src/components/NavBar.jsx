import React from "react";
import logo from "../assets/images/logo.png";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-100 to-yellow-100 shadow-md p-4 flex items-center justify-between px-8">
      
      <a href="#home" className="flex items-center space-x-2" onClick={() => scrollToSection('home')}>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-2xl font-bold text-blue-900">FailaSmart<span className="text-orange-500">Device</span></span>
      </a>
      
      <ul className="flex space-x-6 font-semibold text-blue-900">
        <li className="relative group flex items-center space-x-1">
          <button onClick={() => scrollToSection('home')} className="hover:text-orange-500 flex items-center">Home</button>
          <FaChevronDown className="text-sm" />
        </li>
        <li className="relative group flex items-center space-x-1">
          <button onClick={() => scrollToSection('services')} className="hover:text-orange-500">About Us</button>
          <FaChevronDown className="text-sm" />
        </li>
        <li className="relative group flex items-center space-x-1">
          <button onClick={() => scrollToSection('about')} className="hover:text-orange-500">Services</button>
          <FaChevronDown className="text-sm" />
        </li>
        <li className="relative group flex items-center space-x-1">
          <button onClick={() => scrollToSection('solution')} className="hover:text-orange-500">Solution</button>
          <FaChevronDown className="text-sm" />
        </li>
        <li className="relative group flex items-center space-x-1">
          <button onClick={() => scrollToSection('contact')} className="hover:text-orange-500">Contact</button>
          <FaChevronDown className="text-sm" />
        </li>
      </ul>
      
      <button onClick={() => scrollToSection('appointment')} className="bg-white text-blue-900 font-bold py-2 px-4 rounded-full border-2 border-blue-900 shadow-md hover:bg-blue-900 hover:text-white">
        Book Appointment
      </button>
    </nav>
  );
};

export default Navbar;

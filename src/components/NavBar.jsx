import React from "react";
import logo from "../assets/images/logo.png"; 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between px-8">
  
      <a href="#home">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </a>

      <ul className="flex space-x-6 font-semibold">
        <li>
          <a href="#home" className="hover:text-[#C62000]">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#C62000]">About</a>
        </li>
        <li>
          <a href="#services" className="hover:text-[#C62000]">Services</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#C62000]">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

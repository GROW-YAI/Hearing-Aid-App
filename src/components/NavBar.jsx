import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about", "contact"];
      let currentSection = "home";
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1D1E22] shadow-md p-4 flex items-center justify-between px-8 z-50">
      <a href="#home" className="flex items-center space-x-2" onClick={() => scrollToSection('home')}>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-2xl font-bold text-blue-900">FailaSmart<span className="text-[#FF1B2A]">Device</span></span>
      </a>
      
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`md:flex space-x-6 font-semibold text-[#FF1B2A] ${menuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 md:top-0 left-0 bg-[#1D1E22] md:bg-transparent w-full md:w-auto text-center md:text-left p-4 md:p-0`}>
        {[
          { id: "home", label: "Home" },
          { id: "services", label: "About Us" },
          { id: "about", label: "Services" },
          { id: "contact", label: "Contact" },
        ].map((item) => (
          <li key={item.id} className="relative group flex items-center space-x-1">
            <button
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-orange-500 ${activeSection === item.id ? "text-orange-500" : "text-[#FF1B2A]"}`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollToSection("appointment")}
        className="hidden md:block bg-white text-blue-900 font-bold py-2 px-4 rounded-full border-2 border-blue-900 shadow-md hover:bg-[#FF1B2A] hover:text-white"
      >
        Book Appointment
      </button>
    </nav>
  );
};

export default Navbar;

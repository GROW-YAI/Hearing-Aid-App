import React from "react";
import phone from "../assets/images/phone.png";
import sound from "../assets/images/sound.png";
import drive from "../assets/images/drive.png";
import relief from "../assets/images/relief.png";
import love from "../assets/images/love.png";


const About = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">
      
      <h2 className="text-3xl font-semibold tracking-wide text-gray-900">
        CONNECT AND STREAM
      </h2>
      <p className="text-gray-600 mt-2 mb-10 text-lg">
        Apps and accessories designed to elevate everyday listening and connectivity
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
       
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={phone} alt="Widex Moment app" className="w-full h-56 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-lg font-bold text-gray-900">Widex Moment app</h3>
            <p className="text-gray-600 mt-2">
              Control and personalize your hearing aids based on the way thousands of
              other users preferred to hear in a similar situation.
            </p>
            <a href="#" className="text-blue-600 mt-4 block font-semibold">→</a>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={sound} alt="Widex Sound Assist" className="w-full h-56 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-lg font-bold text-gray-900">Widex Sound Assist™</h3>
            <p className="text-gray-600 mt-2">
              Connects to your hearing aids to help you hear your life better.
            </p>
            <a href="#" className="text-blue-600 mt-4 block font-semibold">→</a>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={drive} alt="Widex SoundConnect" className="w-full h-56 object-cover" />
          <div className="p-6 text-left">
            <h3 className="text-lg font-bold text-gray-900">Widex SoundConnect™</h3>
            <p className="text-gray-600 mt-2">
              Allows high-quality streaming audio from a computer directly to
              hearing aids.
            </p>
            <a href="#" className="text-blue-600 mt-4 block font-semibold">→</a>
          </div>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 max-w-6xl mx-auto">
        <img src={relief} alt="Tinnitus Relief" className="w-full md:w-1/2 object-cover" />
        <div className="p-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-900">
            FINDING RELIEF FROM TINNITUS
          </h2>
          <p className="text-gray-600 mt-2">
            Using other sounds to distract your brain from the tinnitus is the most common
            method, which is called sound therapy.
          </p>
          <button className="mt-4 px-6 py-2 border border-black text-black font-semibold">
            Tinnitus relief methods
          </button>
        </div>
      </div>

    
      <div className="flex flex-col md:flex-row items-center justify-center mt-16 max-w-6xl mx-auto">
        <div className="p-6 text-center md:text-left">
          <h2 className="text-3xl font-semibold tracking-wide text-gray-900">
            PEOPLE THAT KNOW SOUND, LOVE WIDEX PURESOUND™
          </h2>
          <p className="text-gray-600 mt-2">
            Who better to judge the quality of PureSound™, our signature sound, than our
            Sound Ambassadors – experts in their field and passionate about sound – just like us.
          </p>
          <button className="mt-4 px-6 py-2 border border-black text-black font-semibold">
            Meet our Sound Ambassadors
          </button>
        </div>
        <img src={love} alt="Love Widex PureSound" className="w-full md:w-1/2 object-cover" />
      </div>
    </div>
  );
};

export default About;

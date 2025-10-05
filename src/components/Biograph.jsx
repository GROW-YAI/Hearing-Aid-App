import React from "react";
import LazyImage from './LazyImage';
import Hero from '../assets/images/hero.jpg';

const Biograph = () => {
  return (
    <div className="font-sans">
      
      <div className="bg-[#fcfcfc] p-10 flex flex-col md:flex-row items-center justify-between min-h-[300px]">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">
            Faila Mahamudu: Bridging Worlds Through Sound
          </h1>
          <p className="text-lg text-gray-700">
            Faila is a visually impaired young woman from Techiman, Ghana, working
            to improve communication for the deaf community. She is creating
            affordable hearing aids to enhance inclusion and independence.
          </p>
        </div>
        <div className="md:w-1/3 mt-6 md:mt-0">
          <LazyImage
            src={Hero}
            alt="Sound wave"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      <div className="bg-gray-100 text-black p-10 min-h-[300px]">
        <h2 className="text-3xl font-bold mb-6">Her Story: From Techiman to Innovation</h2>
        <div className="md:flex md:space-x-10">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold">Passion for Inclusion</h3>
            <p className="text-lg mt-2">
              Faila's journey began in Techiman, where she witnessed the challenges
              faced by the deaf community. Their lack of access to affordable
              hearing aids motivated her to find a solution.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold">Visionary Thinker</h3>
            <p className="text-lg mt-2">
              Recognizing the need for locally made, accessible solutions, Faila
              embarked on a path of innovation, dedicating her efforts to creating
              hearing aids that could make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biograph;

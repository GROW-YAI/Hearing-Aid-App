import Slider from "react-slick";
import aboutImage from '../assets/images/about.png';
import portraitImage from '../assets/images/portrait.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faMicrophone, faUsers, faGlobe, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
};

const Sample = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="md:w-1/2 relative">
          <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#FF1B2A] rounded-full flex justify-center items-center text-white mr-4">
                <FontAwesomeIcon icon={faHandsHelping} size="lg" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold">Empowering the Deaf Community</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Faila Mahamudu, a visually impaired young woman from Techiman, is dedicated to enhancing communication for individuals with hearing impairments by developing affordable, locally-made hearing aids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-8 bg-gray-50 py-8 overflow-hidden">
        <Slider {...settings}>
          <div className="text-center px-4">
            <FontAwesomeIcon icon={faUsers} size="3x" className="text-[#FF1B2A] mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold">1K+</h3>
            <p className="text-gray-500">People Reached</p>
          </div>
          <div className="text-center px-4">
            <FontAwesomeIcon icon={faMicrophone} size="3x" className="text-[#FF1B2A] mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold">500+</h3>
            <p className="text-gray-500">Hearing Aids Distributed</p>
          </div>
          <div className="text-center px-4">
            <FontAwesomeIcon icon={faGlobe} size="3x" className="text-[#FF1B2A] mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold">10+</h3>
            <p className="text-gray-500">Communities Served</p>
          </div>
          <div className="text-center px-4">
            <FontAwesomeIcon icon={faHandsHelping} size="3x" className="text-[#FF1B2A] mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold">100+</h3>
            <p className="text-gray-500">Volunteers & Supporters</p>
          </div>
        </Slider>
      </div>

      {/* Testimonials Section */}
      <div className="mt-16 bg-gray-100 py-16 overflow-hidden">
        <Slider {...settings} slidesToShow={3} centerMode={true} centerPadding="20px">
          <div className="p-8 bg-white rounded-lg shadow-lg mx-2">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-gray-400 mb-4" />
            <p className="text-gray-600 mb-6">"Faila's work has given my son the ability to communicate better. This initiative is truly life-changing."</p>
            <div className="flex items-center">
              <img src={portraitImage} alt="Person 1" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-lg">Amina Osei</h4>
                <p className="text-gray-500">Mother of a Beneficiary</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-[#FF1B2A] text-white rounded-lg shadow-lg mx-2">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="mb-4" />
            <p className="mb-6">"Affordable hearing aids are a game-changer in our community. Thanks to Faila, more people can now be heard."</p>
            <div className="flex items-center">
              <img src={portraitImage} alt="Person 2" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-lg">Kwame Asante</h4>
                <p className="text-white">Community Leader</p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg mx-2">
            <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-gray-400 mb-4" />
            <p className="text-gray-600 mb-6">"I admire Faila's dedication. Her innovation is making a huge impact, and I am proud to support this cause."</p>
            <div className="flex items-center">
              <img src={portraitImage} alt="Person 3" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-bold text-lg">John Mensah</h4>
                <p className="text-gray-500">Philanthropist</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sample;
import Slider from "react-slick";
import LazyImage from "./LazyImage";
import aboutImage from '../assets/images/about.png';
import portraitImage from '../assets/images/portrait.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHelping, faMicrophone, faUsers,faWater, faDove, faGlobe, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        speed: 2500,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        speed: 2000,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        speed: 1500,
        centerMode: true,
        centerPadding: '40px',
      }
    }
  ]
};

const Sample = () => {
  return (
    <div className="bg-white py-8 sm:py-12 lg:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Transforming lives through innovative hearing solutions
          </p>
        </div>

        {/* Mobile: Stack Everything, Desktop: Side by Side */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Image Section - Hidden on Mobile, Shown on Desktop */}
          <div className="hidden lg:block lg:order-1">
            <div className="relative">
              <LazyImage 
                src={aboutImage} 
                alt="About Us" 
                className="w-full h-auto rounded-2xl shadow-2xl" 
              />
              <div className="absolute -bottom-6 -right-6 w-20 h-20 lg:w-24 lg:h-24 bg-[#FF1B2A] rounded-full flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faHandsHelping} size="2x" className="text-white" />
              </div>
            </div>
          </div>

          {/* Content Section - Full Width Cards */}
          <div className="w-full lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              {/* Mission Item 1 */}
              <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faUsers} className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Community Impact
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Enhancing communication and independence for individuals with hearing impairments through locally-made, affordable hearing aids.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Item 2 */}
              <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faMicrophone} className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Support & Mentorship
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Seeking funding, technical assistance, and expert guidance to bring impactful hearing aid solutions to life.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mission Item 3 */}
              <div className="w-full bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <FontAwesomeIcon icon={faGlobe} className="text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                      Access for All
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                      Empowering the deaf community with accessible, locally-made hearing aids that break down communication barriers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Our Impact
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Making a difference in communities across Ghana
            </p>
          </div>
          
          {/* Unified Grid Layout for All Screens */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <FontAwesomeIcon icon={faUsers} className="text-white text-lg sm:text-2xl lg:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">1K+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-tight">People Reached</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <FontAwesomeIcon icon={faMicrophone} className="text-white text-lg sm:text-2xl lg:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">500+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-tight">Hearing Aids</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <FontAwesomeIcon icon={faGlobe} className="text-white text-lg sm:text-2xl lg:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">10+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-tight">Communities</p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                <FontAwesomeIcon icon={faHandsHelping} className="text-white text-lg sm:text-2xl lg:text-3xl" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">100+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base leading-tight">Volunteers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What People Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from the communities we serve and support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-white" />
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed font-medium">
                "Faila's work has given my son the ability to communicate better. This initiative is truly life-changing."
              </p>
              <div className="flex items-center">
                <LazyImage src={portraitImage} alt="Amina Osei" className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-gray-100" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">Amina Osei</h4>
                  <p className="text-gray-600 text-sm font-medium">Mother of a Beneficiary</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Featured */}
            <div className="bg-gradient-to-br from-[#FF1B2A] to-red-600 text-white rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 transform lg:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 relative z-10">
                <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-white" />
              </div>
              <p className="mb-8 text-lg leading-relaxed font-medium relative z-10">
                "Affordable hearing aids are a game-changer in our community. Thanks to Faila, more people can now be heard."
              </p>
              <div className="flex items-center relative z-10">
                <LazyImage src={portraitImage} alt="Kwame Asante" className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-white/30" />
                <div>
                  <h4 className="font-bold text-xl">Kwame Asante</h4>
                  <p className="text-red-100 text-sm font-medium">Community Leader</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF1B2A] to-red-600 rounded-full flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faQuoteLeft} size="lg" className="text-white" />
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed font-medium">
                "I admire Faila's dedication. Her innovation is making a huge impact, and I am proud to support this cause."
              </p>
              <div className="flex items-center">
                <LazyImage src={portraitImage} alt="John Mensah" className="w-16 h-16 rounded-full mr-4 object-cover ring-4 ring-gray-100" />
                <div>
                  <h4 className="font-bold text-xl text-gray-900">John Mensah</h4>
                  <p className="text-gray-600 text-sm font-medium">Philanthropist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
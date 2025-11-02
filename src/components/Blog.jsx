import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUsers, faHandsHelping, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 0,
        pauseOnHover: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
      }
    }
  ]
};

const Blog = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Slider {...settings} className="mt-12">
        {/* Card 1 - Accessibility */}
        <div className="px-3">
          <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white shadow-lg rounded-xl border-l-4 border-[#1D1E22] min-h-[280px] sm:h-60 mx-auto max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-[#FF1B2A]" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">ACCESSIBILITY FOR ALL</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Empowering the deaf community with locally-made, affordable hearing aids.
            </p>
          </div>
        </div>
        {/* Card 2 - Innovation */}
        <div className="px-3">
          <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white shadow-lg rounded-xl border-l-4 border-[#1D1E22] min-h-[280px] sm:h-60 mx-auto max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 text-[#FF1B2A]" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">INNOVATIVE SOLUTIONS</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Developing cost-effective technology to improve communication and inclusion.
            </p>
          </div>
        </div>
        {/* Card 3 - Community Support */}
        <div className="px-3">
          <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white shadow-lg rounded-xl border-l-4 border-[#1D1E22] min-h-[280px] sm:h-60 mx-auto max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FontAwesomeIcon icon={faHandsHelping} className="w-8 h-8 text-[#FF1B2A]" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">COMMUNITY IMPACT</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Enhancing independence and engagement for individuals with hearing impairments.
            </p>
          </div>
        </div>
        {/* Card 4 - Mentorship & Funding */}
        <div className="px-3">
          <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white shadow-lg rounded-xl border-l-4 border-[#1D1E22] min-h-[280px] sm:h-60 mx-auto max-w-sm sm:max-w-none">
            <div className="w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center bg-orange-100 rounded-full mb-4">
              <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 text-[#FF1B2A]" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-3">SUPPORT & MENTORSHIP</h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Seeking funding and expert guidance to bring impactful ideas to life.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Blog;
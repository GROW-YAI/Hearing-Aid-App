import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faUsers, faHandsHelping, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

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

const Blog = () => {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <Slider {...settings} className="mt-12">
        {/* Card 1 - Accessibility */}
        <div className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-md border-l-4 border-[#1D1E22] h-60">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
            <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-[#FF1B2A]" />
          </div>
          <h3 className="font-bold text-lg text-gray-800">ACCESSIBILITY FOR ALL</h3>
          <p className="text-gray-600 text-sm">
            Empowering the deaf community with locally-made, affordable hearing aids.
          </p>
        </div>
        {/* Card 2 - Innovation */}
        <div className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-md border-l-4 border-[#1D1E22] h-60">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
            <FontAwesomeIcon icon={faLightbulb} className="w-8 h-8 text-[#FF1B2A]" />
          </div>
          <h3 className="font-bold text-lg text-gray-800">INNOVATIVE SOLUTIONS</h3>
          <p className="text-gray-600 text-sm">
            Developing cost-effective technology to improve communication and inclusion.
          </p>
        </div>
        {/* Card 3 - Community Support */}
        <div className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-md border-l-4 border-[#1D1E22] h-60">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
            <FontAwesomeIcon icon={faHandsHelping} className="w-8 h-8 text-[#FF1B2A]" />
          </div>
          <h3 className="font-bold text-lg text-gray-800">COMMUNITY IMPACT</h3>
          <p className="text-gray-600 text-sm">
            Enhancing independence and engagement for individuals with hearing impairments.
          </p>
        </div>
        {/* Card 4 - Mentorship & Funding */}
        <div className="flex flex-col items-center justify-center text-center p-6 bg-white shadow-md rounded-md border-l-4 border-[#1D1E22] h-60">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
            <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8 text-[#FF1B2A]" />
          </div>
          <h3 className="font-bold text-lg text-gray-800">SUPPORT & MENTORSHIP</h3>
          <p className="text-gray-600 text-sm">
            Seeking funding and expert guidance to bring impactful ideas to life.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Blog;
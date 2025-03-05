import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import earImage from "../assets/images/ear.png";
import hearingImage from "../assets/images/hearing.jpg";

const Home = () => {
  const images = [
    {
      src: earImage,
      title: "Breaking Barriers in Communication",
      description: "Faila Mahamudu, a visually impaired innovator, is dedicated to improving communication for the deaf community in Techiman.",
    },
    {
      src: hearingImage,
      title: "Affordable, Locally-Made Hearing Aids",
      description: "Developing an accessible and cost-effective solution to enhance inclusion and independence for individuals with hearing impairments.",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="relative mt-20 z-10"> 
      <Slider {...settings} className="relative overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[600px]">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
           
            <div className="absolute inset-0 bg-black/50"></div>

         
            <div className="absolute inset-x-0 bottom-10 flex flex-col items-center text-center px-6 bg-opacity-50 py-6
              bg-white/30 backdrop-blur-xl border border-white/40 rounded-lg shadow-xl max-w-xl mx-auto">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#FF1B2A] mb-4 px-6 py-3 shadow-lg font-serif">
                {image.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1D1E22] max-w-2xl px-4 font-sans">
                {image.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;

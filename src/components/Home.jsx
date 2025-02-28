import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import bonoImage from "../assets/images/bono.png";
import comImage from "../assets/images/com.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeaf, faHandsHelping } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const images = [
    {
      src: bonoImage,
      title: "Breaking Barriers in Communication",
      description: "Faila Mahamudu, a visually impaired innovator, is dedicated to improving communication for the deaf community in Techiman.",
      icon: faDeaf
    },
    {
      src: comImage,
      title: "Affordable, Locally-Made Hearing Aids",
      description: "Developing an accessible and cost-effective solution to enhance inclusion and independence for individuals with hearing impairments.",
      icon: faHandsHelping
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
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-full object-cover"
              style={{ height: "550px" }}  
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-opacity-50">
              <FontAwesomeIcon icon={image.icon} size="3x" className="text-[#FF1B2A] mb-3" />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#FF1B2A] mb-2">
                {image.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-2xl">
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

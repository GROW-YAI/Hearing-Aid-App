import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Home.module.css";
import LazyImage from "./LazyImage";
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
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
          speed: 1000,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          pauseOnFocus: true,
        }
      }
    ]
  };

  return (
    <div className={`relative mt-16 z-10 ${styles.carouselContainer}`}> 
      <Slider {...settings} className="relative overflow-hidden">
        {images.map((image, index) => (
          <div key={index} className={`${styles.carouselSlide} relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[690px]`}>
            <LazyImage
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
           
            <div className={`${styles.carouselOverlay} absolute inset-0 bg-black/50`}></div>

         
            <div className={`${styles.carouselContent} absolute inset-x-4 sm:inset-x-6 md:inset-x-0 bottom-4 sm:bottom-6 md:bottom-10 flex flex-col items-center text-center px-4 sm:px-6 bg-opacity-50 py-4 sm:py-6
              bg-white/30 backdrop-blur-xl border border-white/40 rounded-lg shadow-xl max-w-xs sm:max-w-md md:max-w-xl mx-auto`}>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#FF1B2A] mb-2 sm:mb-4 px-2 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg font-serif leading-tight">
                {image.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#1D1E22] max-w-2xl px-2 sm:px-4 font-sans leading-relaxed">
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

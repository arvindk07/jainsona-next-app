"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: false,
  pauseOnHover: false,
};

const slides = [
  {
    id: 1,
    image: "/hero_1.png",
    title: "Powering Innovations",
    extraTitle: "Electrifying Possibilities",
    subtitle: "Your Trusted Partner in Electrical & Networking solutions!",
  },
  {
    id: 2,
    image: "/hero_2.png",
    title: "Powering Innovations",
    extraTitle: "Electrifying Possibilities",
    subtitle: "Step outside your comfort zone",
  },
  {
    id: 3,
    image: "/hero_3.png",
    title: "Powering Innovations",
    extraTitle: "Electrifying Possibilities",
    subtitle: "Step outside your comfort zone",
  },
];

const slidesMobile = [
  {
    id: 1,
    image: "/h1.png",
    title: "Powering Innovations",
    extraTitle: "Electrifying Possibilities",
    subtitle: "Your Trusted Partner in Electrical & Networking solutions!",
  },
  {
    id: 2,
    image: "/h2.png",
    title: "Powering Innovations",
    extraTitle: "Electrifying Possibilities",
    subtitle: "Step outside your comfort zone",
  },
];

const HeroSlider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative w-full h-[500px] md:h-screen lg:h-screen mt-6 md:mt-10 mb-10 px-10 overflow-hidden">
      {isMobile ? (
        <div>
          <Slider {...settings} className="h-full block lg:hidden">
            {slidesMobile.map((slide) => (
              <div key={slide.id} className="relative w-full h-[500px] ">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center  rounded-3xl"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />

                <div className=" relative lg:absolute w-full md:w-auto  bg-white  top-0 flex flex-col left-0  text-white py-1   md:py-5  px-6 md:max-h-96 h-[235px] md:text-left md:h-full items-center md:items-start justify-center md:rounded-br-2xl  ">
                  <button className=" bg-[#f2f2f2] px-5 py-2 rounded-[20px] w-max text-black flex gap-2">
                    <img src="/Group@2x.png" className="h-6" /> Electro Webstore
                  </button>
                  <motion.h1
                    className="text-2xl md:text-6xl text-center md:text-left font-bold text-black"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h1
                    className="text-2xl md:text-6xl text-center md:text-left font-bold text-[#880909]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    {slide.extraTitle}
                  </motion.h1>
                  <motion.p
                    className="mt-3 lg:mt-4 text-[17.5px]  text-center md:text-left md:text-xl text-black"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <Slider {...settings} className="h-full hidden lg:block">
          {slides.map((slide) => (
            <>
              <div
                key={slide.id}
                className="relative w-full h-screen rounded-2xl overflow-hidden"
              >
                <div className="absolute w-full md:w-auto bg-white top-0 flex flex-col left-0  text-white py-2 md:py-5 px-6 md:max-h-96 h-[500px]  md:text-left md:h-full items-center md:items-start justify-center md:rounded-br-2xl hero-slider-curv ">
                  <button className=" bg-[#f2f2f2] px-5 py-2 rounded-[20px] w-max text-black flex gap-2">
                    <img src="/Group@2x.png" className="h-6" /> Electro Webstore
                  </button>
                  <motion.h1
                    className="text-2xl md:text-6xl text-center md:text-left font-bold text-black"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h1
                    className="text-2xl md:text-6xl text-center md:text-left font-bold text-[#880909]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                    }}
                  >
                    {slide.extraTitle}
                  </motion.h1>
                  <motion.p
                    className="mt-4 text-lg text-center md:text-left md:text-xl text-black"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                  >
                    {slide.subtitle}
                  </motion.p>
                </div>
                <img
                  src={slide.image}
                  alt=""
                  className="w-[100%] h-[900px]  object-cover z-10"
                />
              </div>
            </>
          ))}
        </Slider>
      )}
    </div>
  );
};

const AppHero = () => {
  return (
    <section>
      <HeroSlider />
    </section>
  );
};

export default AppHero;

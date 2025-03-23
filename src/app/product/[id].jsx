import React, { useState, useRef } from "react";
import Slider from "react-slick";

const ProductModal = ({
  isOpen,
  setIsOpen,
  images,
  name,
  feature,
  setQuoteModal,
}) => {
  const mainSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
  };

  const thumbnailSliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    speed: 500,
  };

  const mainSliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    mainSliderRef.current?.slickGoTo(index);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-4xl w-full shadow-lg relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-700 text-2xl font-bold cursor-pointer"
          >
            &times;
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Section - Vertical Thumbnails */}
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-1/2">
              <div className="w-1/4">
                <Slider {...thumbnailSliderSettings} className="h-full">
                  {images?.map((img, index) => (
                    <div key={index} className="p-2">
                      <img
                        src={
                          img.url ||
                          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        }
                        alt={`Thumbnail ${index + 1}`}
                        className="w-24 h-24 object-cover rounded-lg border cursor-pointer"
                        onClick={() => handleThumbnailClick(index)}
                      />
                    </div>
                  ))}
                </Slider>
              </div>

              <div className="w-3/4">
                <Slider
                  {...mainSliderSettings}
                  ref={mainSliderRef}
                  afterChange={(index) => setActiveIndex(index)}
                >
                  {images?.map((img, index) => (
                    <div key={index} className="flex justify-center">
                      <img
                        src={
                          img.url ||
                          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        }
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="w-full md:w-1/2">
              {/* <h2 className="text-2xl font-bold text-gray-900">
                  Kripson Plastic Solar Cable And Ties, For Industrial
                </h2> */}

              <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {feature?.find((data) => data.key === "Description")?.value}
              </p>
              {/* Product Features */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-red-700">Features</h3>
                <ul className=" mt-2 text-gray-700 space-y-1">
                  {feature
                    ?.filter(
                      (data) =>
                        data.key !== "Stock Movement" &&
                        data.key !== "Description" &&
                        data
                    )
                    ?.map((feature, index) => (
                      <>
                        {
                          <li key={index} className="text-sm text-gray-600">
                            <span className="font-semibold">{feature.key}</span>
                            :<span> {feature.value}</span>
                          </li>
                        }
                      </>
                    ))}
                </ul>
              </div>
              {/* <div className="mt-6">
                  <h3 className="text-lg font-bold text-red-700">Features</h3>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li><span className="font-semibold">Material:</span> Plastic</li>
                    <li><span className="font-semibold">Size:</span> Standard</li>
                    <li><span className="font-semibold">Brand:</span> Kripson</li>
                    <li><span className="font-semibold">Size:</span> 25 mm</li>
                  </ul>
                </div> */}

              <div className="mt-8">
                <button
                  className="bg-[#880909] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-red-700 transition-all"
                  onClick={() => setQuoteModal(true)}
                >
                  Get Best Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;

"use client";

import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProductModal from "./product-view";
import Modal from "../../component/form/modal";
import Quote from "../../component/form/quote";
import { useRouter } from "next/navigation";

const ProductCard = ({ images, name, feature, id, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);
  const router = useRouter();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="border rounded-lg shadow-md overflow-hidden">
        {/* Image Slider */}

        {images?.length > 0 ? (
          <Slider {...sliderSettings}>
            {images?.map((img, index) => (
              <div key={index} onClick={() => setIsOpen(true)}>
                <img
                  src={
                    img.url ||
                    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover "
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div key={0} onClick={() => setIsOpen(true)}>
            <img
              src={
                "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              alt={`Product`}
              className="w-full h-48 object-cover"
            />
          </div>
        )}

        {/* Product Info */}
        <div className="p-6 text-center">
          <h3 className="text-lg font-semibold">{name}</h3>

          {/* Product Features */}
          <ul className="mt-2">
            {feature
              ?.filter(
                (data) =>
                  data.key !== "Stock Movement" &&
                  data.key !== "Description" &&
                  data
              )
              ?.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {feature.key}: {feature.value}
                </li>
              ))}
          </ul>

          <button
            className="mt-4 bg-[#880909] rounded-full text-white px-4 py-2 hover:bg-red-700"
            // onClick={() => setQuoteModal(true)}
            onClick={() => router.push(`/product/${id}`)}
          >
            Get Best Quote
          </button>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        images={images}
        name={name}
        feature={feature}
        setQuoteModal={setQuoteModal}
      />
      <Modal isOpen={quoteModal} setIsOpen={setQuoteModal}>
        <Quote />
      </Modal>
    </>
  );
};

export default ProductCard;

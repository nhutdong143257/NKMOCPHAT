import React, { useState } from "react";
import google from "/image/brand/google.png";
import shopee from "/image/brand/shopee.png";
import tiktok from "/image/brand/tiktok.png";
import lazada from "/image/brand/lazada.png";
import astrazeneca from "/image/brand/astrazeneca.png";
import heineken from "/image/brand/heineken.png";
import lorea from "/image/brand/lorea.png";
import unilever from "/image/brand/unilever.png";
import ysl from "/image/brand/ysl.png";

const brands = [
  { name: "Google", logo: google },
  { name: "Shopee", logo: shopee },
  { name: "TikTok", logo: tiktok },
  { name: "Lazada", logo: lazada },
  { name: "AstraZeneca", logo: astrazeneca },
  { name: "Heineken", logo: heineken },
  { name: "Lorea", logo: lorea },
  { name: "Unilever", logo: unilever },
  { name: "YSL", logo: ysl },
];

const Brand = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase">
          Các nhãn hàng đã tin tưởng chúng tôi
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
          Đồng hành cùng nhiều thương hiệu lớn trong và ngoài nước.
        </p>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* SCROLL MODE */}
      {!showAll && (
        <div className="relative overflow-hidden">
          {/* mờ dần 2 mép cho mượt */}
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 sm:gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="shrink-0 w-32 h-24 sm:w-44 sm:h-28 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-lime-200 transition duration-300 group"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-10 sm:max-h-12 max-w-[70%] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GRID MODE */}
      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="h-24 sm:h-28 flex items-center justify-center bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-lime-200 hover:-translate-y-1 transition duration-300 group"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-10 sm:max-h-12 max-w-[70%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <div className="flex justify-center mt-8 sm:mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-7 py-2.5 border border-lime-600 text-lime-600 font-medium rounded-full hover:bg-lime-600 hover:text-white transition"
        >
          {showAll ? "Thu gọn" : "Xem tất cả đối tác"}
        </button>
      </div>
    </div>
  );
};

export default Brand;

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
  {
    name: "Google",
    logo: google,
  },
  {
    name: "Shopee",
    logo: shopee,
  },
  {
    name: "TikTok",
    logo: tiktok,
  },
  {
    name: "Lazada",
    logo: lazada,
  },
  {
    name: "AstraZeneca",
    logo: astrazeneca,
  },
  {
    name: "Heineken",
    logo: heineken,
  },
  {
    name: "Lorea",
    logo: lorea,
  },
  {
    name: "Unilever",
    logo: unilever,
  },
  {
    name: "YSL",
    logo: ysl,
  },
];

const Brand = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          các nhãn hàng đã tin tưởng chúng tôi
        </h2>

        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* SCROLL MODE */}
      {!showAll && (
        <div className="overflow-hidden relative">
          <div className="flex gap-12 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <img
                key={index}
                src={brand.logo}
                alt={brand.name}
                className="h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      )}

      {/* GRID MODE */}
      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-6">
          {brands.map((brand, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 object-contain opacity-80 hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      )}

      {/* BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 border border-lime-600 text-lime-600 rounded-full hover:bg-lime-600 hover:text-white transition"
        >
          {showAll ? "Thu gọn" : "Xem tất cả đối tác"}
        </button>
      </div>

      {/* ANIMATION STYLE */}
    </div>
  );
};

export default Brand;

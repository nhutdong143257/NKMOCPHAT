import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import OutstandingProduct from "../components/OutstandingProduct";
import Brand from "../components/Brand";
import Reveal from "../components/Reveal";

const HomePage = () => {
  return (
    <div className="container mx-auto px-6 py-10 caret-transparent">
      <Hero />

      {/* Services */}
      <Reveal>
        <ServicesSection />
      </Reveal>

      {/* Special Products */}
      <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-gray-800 uppercase">
            sản phẩm nổi bật
          </h2>

          <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <OutstandingProduct />
      </Reveal>

      {/* Brand */}
      <Reveal>
        <Brand />
      </Reveal>
    </div>
  );
};

export default HomePage;

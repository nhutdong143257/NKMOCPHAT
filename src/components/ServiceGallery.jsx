import React from "react";
import OutstandingProduct from "./OutstandingProduct";

const ServiceGallery = ({ images }) => {
  return (
    <div className="mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          sản phẩm đã thực hiện
        </h2>

        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <OutstandingProduct />
    </div>
  );
};

export default ServiceGallery;

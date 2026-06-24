import React from "react";
import OutstandingProduct from "./OutstandingProduct";

const ServiceGallery = ({ images }) => {
  return (
    <div className="mt-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">
          Sản phẩm đã thực hiện
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed">
          Một số sản phẩm tiêu biểu chúng tôi đã hoàn thiện cho khách hàng.
        </p>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
      </div>

      <OutstandingProduct />
    </div>
  );
};

export default ServiceGallery;

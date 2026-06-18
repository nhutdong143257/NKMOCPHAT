import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/service";

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          dịch vụ của chúng tôi
        </h2>

        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.slice(0, 6).map((service) => (
          <Link
            to={`/dich-vu/${service.slug}`}
            key={service.id}
            className="card bg-base-100 shadow-md hover:shadow-sm transition"
          >
            <figure>
              <img
                src={service.img}
                alt={service.title}
                className="h-65 w-full object-cover rounded-t-lg"
              />
            </figure>

            <div className="card-body text-center">
              <h2 className="card-title justify-center text-2xl font-semibold text-lime-700 uppercase">
                {service.title}
              </h2>

              <p className="text-sm text-gray-500 text-justify leading-relaxed">
                {service.desc}
              </p>

              <div className="card-actions justify-center mt-3">
                <Link to={`/dich-vu/${service.slug}`}>
                  <button className="btn btn-sm bg-lime-600 text-white hover:bg-lime-700 border-none">
                    Xem chi tiết
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center p-8">
        <Link to="/dich-vu">
          <button className="px-6 py-2 border border-lime-600 text-lime-600 rounded-full hover:bg-lime-600 hover:text-white transition">
            Xem tất cả dịch vụ
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;

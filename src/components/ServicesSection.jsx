import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../data/service";

const ServicesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase">
          Dịch vụ của chúng tôi
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
          Giải pháp in ấn đa dạng, chất lượng cao, đáp ứng mọi nhu cầu từ cá
          nhân đến doanh nghiệp.
        </p>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.slice(0, 6).map((service) => (
          <Link
            to={`/dich-vu/${service.slug}`}
            key={service.id}
            className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:border-lime-200 hover:-translate-y-1.5 transition-all duration-300"
          >
            {/* ẢNH */}
            <div className="relative overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="h-52 sm:h-60 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>

            {/* NỘI DUNG */}
            <div className="flex flex-col flex-1 p-5 sm:p-6 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-lime-700 uppercase mb-3 group-hover:text-lime-600 transition">
                {service.title}
              </h3>

              <p className="text-sm text-gray-500 text-justify leading-relaxed line-clamp-3 flex-1">
                {service.desc}
              </p>

              <span className="inline-flex items-center justify-center gap-2 mt-5 text-sm font-semibold text-lime-700 group-hover:gap-3 transition-all">
                Xem chi tiết
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 sm:mt-12">
        <Link to="/dich-vu">
          <button className="px-7 py-2.5 border border-lime-600 text-lime-600 font-medium rounded-full hover:bg-lime-600 hover:text-white transition">
            Xem tất cả dịch vụ
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSection;

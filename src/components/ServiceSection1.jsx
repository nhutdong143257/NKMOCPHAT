import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/service";

const ServicesSection1 = () => {
  // GROUP THEO CATEGORY
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* LOOP CATEGORY */}
      {Object.entries(groupedServices).map(([category, items]) => (
        <div key={category} className="mb-16">
          {/* CATEGORY TITLE */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-gray-800 uppercase">
              {category}
            </h2>
            <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((service) => (
              <Link
                to={`/dich-vu/${service.slug}`}
                key={service.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-lime-700 uppercase">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <button className="mt-4 px-4 py-2 text-sm border border-lime-600 text-lime-600 rounded-full hover:bg-lime-600 hover:text-white transition">
                    Xem chi tiết
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection1;

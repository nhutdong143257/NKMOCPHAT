import React from "react";
import { useParams } from "react-router-dom";
import { services } from "../data/service";

import ServiceHero from "../components/ServiceHero";
import ServiceFeatures from "../components/ServiceFeatures";
import ServiceGallery from "../components/ServiceGallery";
import ServiceDescription from "../components/ServiceDescription";

const ServiceDetailPage = () => {
  const { slug } = useParams();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="text-center py-20">Không tìm thấy</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* HERO */}
      <ServiceHero service={service} />

      {/* Main Description */}
      <ServiceDescription slug={service.slug} />

      {/* FEATURES */}
      <ServiceFeatures />

      {/* GALLERY */}
      <ServiceGallery images={service.images} />
      
    </section>
    
  );
};

export default ServiceDetailPage;

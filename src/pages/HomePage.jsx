import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import OutstandingProduct from "../components/OutstandingProduct";
import Brand from "../components/Brand";
import Reveal from "../components/Reveal";

const HomePage = () => {
  return (
    <>
      <Helmet>
        {/* SEO Title */}
        <title>Công Ty TNHH NK Mộc Phát | Sản phẩm & Dịch vụ</title>

        {/* SEO Description */}
        <meta
          name="description"
          content="Công Ty TNHH NK Mộc Phát cung cấp các sản phẩm và dịch vụ chất lượng. Khám phá sản phẩm nổi bật và các dịch vụ của Mộc Phát."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://nkmocphat.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://nkmocphat.com/" />

        <meta property="og:title" content="Công Ty TNHH NK Mộc Phát" />

        <meta
          property="og:description"
          content="Công Ty TNHH NK Mộc Phát cung cấp các sản phẩm và dịch vụ chất lượng."
        />

        <meta
          property="og:image"
          content="https://nkmocphat.com/MocPhatLogo.png"
        />

        <meta property="og:locale" content="vi_VN" />

        {/* WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://nkmocphat.com/",
            name: "Công Ty TNHH NK Mộc Phát",
            alternateName: "NK Mộc Phát",
          })}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Công Ty TNHH NK Mộc Phát",
            alternateName: "NK Mộc Phát",
            url: "https://nkmocphat.com/",
            logo: "https://nkmocphat.com/MocPhatLogo.png",
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 caret-transparent">
        <Hero />

        {/* Services */}
        <Reveal>
          <ServicesSection />
        </Reveal>

        {/* Special Products */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase">
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
    </>
  );
};

export default HomePage;

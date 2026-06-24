import { useState, useEffect } from "react";
import { X } from "lucide-react";

const ServiceHero = ({ service }) => {
  const [zoomOpen, setZoomOpen] = useState(false);

  // Đóng zoom bằng phím Esc
  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setZoomOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen]);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* ẢNH */}
      <div className="relative group">
        {/* đốm trang trí phía sau */}
        <div className="absolute -inset-4 bg-lime-200/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition pointer-events-none" />
        <div
          onClick={() => setZoomOpen(true)}
          className="relative rounded-3xl overflow-hidden shadow-xl cursor-zoom-in"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-105 object-cover transition duration-700 group-hover:scale-105"
          />
          {/* gợi ý zoom */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
            Bấm để phóng to
          </div>
        </div>
      </div>

      {/* NỘI DUNG */}
      <div>
        {service.category && (
          <span className="inline-block text-xs font-semibold text-lime-700 bg-lime-100 px-4 py-1.5 rounded-full uppercase tracking-wider mb-5">
            {service.category}
          </span>
        )}

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight uppercase text-gray-900">
          {service.title}
        </h1>

        <div className="w-20 h-1 bg-lime-600 my-5 rounded-full"></div>

        {service.shortDesc && (
          <p className="text-lg font-semibold text-lime-700 mb-4 uppercase">
            {service.shortDesc}
          </p>
        )}

        <p className="text-gray-600 leading-8 mb-8">{service.desc}</p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://zalo.me/0908409075"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 transition shadow-lg shadow-lime-600/25 hover:shadow-lime-600/40 hover:-translate-y-0.5 duration-200"
          >
            Nhận báo giá ngay
          </a>
        </div>
      </div>

      {/* ===== LIGHTBOX ZOOM ẢNH ===== */}
      {zoomOpen && (
        <div
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center p-4"
        >
          {/* Nút đóng */}
          <button
            onClick={() => setZoomOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>

          {/* Ảnh lớn */}
          <img
            src={service.img}
            alt={service.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceHero;

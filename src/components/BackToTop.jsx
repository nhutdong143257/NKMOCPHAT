import { useState, useEffect } from "react";
import { ArrowUp, Phone } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-9998 flex flex-col items-center gap-4">
      {/* ZALO */}
      <a
        href="https://zalo.me/0908409075"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Zalo"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
      >
        <img
          src="/zalo.png"
          alt="Zalo"
          className="w-12 h-12 hover:-translate-y-1 transition-transform duration-300"
        />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none hidden sm:block">
          Chat Zalo
        </span>
      </a>

      {/* GỌI ĐIỆN */}
      <a
        href="tel:0942574386"
        aria-label="Gọi điện"
        className="group relative w-12 h-12 rounded-full bg-emerald-600 shadow-lg flex items-center justify-center hover:bg-emerald-700 hover:-translate-y-1 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-lime-500/50" />
        <Phone size={22} className="relative text-white" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none hidden sm:block">
          0942 574 386
        </span>
      </a>

      {/* NÚT LÊN ĐẦU TRANG - chỉ hiện khi cuộn xuống */}
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Lên đầu trang"
          className="w-12 h-12 rounded-full bg-white text-lime-600 border border-lime-200 shadow-lg flex items-center justify-center hover:bg-lime-50 hover:-translate-y-1 transition-all duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
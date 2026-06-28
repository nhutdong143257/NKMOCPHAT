import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Lên đầu trang"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-lime-600 text-white shadow-lg shadow-lime-600/30 flex items-center justify-center hover:bg-lime-700 hover:-translate-y-1 transition-all duration-300"
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
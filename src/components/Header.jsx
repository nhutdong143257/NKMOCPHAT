import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const boxRef = useRef();

  // ================= SEARCH API =================
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!keyword.trim()) {
        setResults([]);
        return;
      }

      setLoading(true); // 👈 BẮT ĐẦU LOAD

      fetch(`http://localhost:5000/api/products/search?q=${keyword}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setShow(true);
        })
        .catch(() => setResults([]))
        .finally(() => setLoading(false)); // 👈 KẾT THÚC LOAD
    }, 300);

    return () => clearTimeout(timer);
  }, [keyword]);

  // ================= CLICK OUTSIDE =================
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-lime-600/40 w-full shadow-sm relative z-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link to="/">
          <img
            className="w-32 brightness-125"
            src="/MocPhatLogo.png"
            alt="logo"
          />
        </Link>

        {/* SEARCH */}
        <div ref={boxRef} className="flex-1 flex justify-center px-8 relative">
          <div className="flex items-center gap-2 bg-white border border-gray-500 p-2 h-11 rounded-xl w-full max-w-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="#000000"
            >
              <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
            </svg>

            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="w-full outline-none text-gray-600 text-sm"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onFocus={() => keyword && setShow(true)}
            />
          </div>

          {/* ===== DROPDOWN ===== */}
          {show && keyword && (
            <div
              className={`
    absolute top-16 w-full max-w-xl
    bg-white/90 backdrop-blur-md
    border border-gray-200
    rounded-2xl shadow-xl
    z-9999 overflow-hidden

    transition-all duration-300 ease-out
    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
  `}
            >
              {/* 🔄 LOADING */}
              {loading ? (
                <div className="p-4 text-gray-400 text-sm animate-pulse">
                  Đang tìm kiếm...
                </div>
              ) : results.length > 0 ? (
                results.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      navigate(`/san-pham/${p.slug}`);
                      setShow(false);
                    }}
                    className="
            flex items-center gap-3 p-3
            hover:bg-lime-50
            cursor-pointer border-b
            transition-all duration-200
            hover:translate-x-1
          "
                  >
                    <img
                      src={p.thumbnail}
                      className="w-12 h-12 object-cover rounded-lg shadow-sm"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {p.name}
                    </span>
                  </div>
                ))
              ) : (
                <div className="p-4 text-gray-500 text-sm">
                  Không tìm thấy sản phẩm
                </div>
              )}
            </div>
          )}
        </div>

        {/* CONTACT */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 border p-3 rounded-full bg-olive-50">
            <img src="/icon/call.png" className="w-6 h-6" />
            <span className="text-sm font-semibold">0942 574 386</span>
          </div>

          <div className="flex items-center gap-3 border p-3 rounded-full bg-olive-50">
            <img src="/icon/gmail.png" className="w-6 h-6" />
            <span className="text-sm font-semibold">
              tranphung.qnco@gmail.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

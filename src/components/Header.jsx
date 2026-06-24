import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const [productResults, setProductResults] = useState([]);
  const [categoryResults, setCategoryResults] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const boxRef = useRef();

  // ================= SEARCH (Supabase) =================
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!keyword.trim()) {
        setProductResults([]);
        setCategoryResults([]);
        return;
      }

      setLoading(true);

      try {
        const [prodRes, cateRes] = await Promise.all([
          // Tìm sản phẩm theo tên
          supabase
            .from("products")
            .select("id, name, slug, thumbnail")
            .ilike("name", `%${keyword}%`)
            .limit(6),
          // Tìm danh mục theo tên + đếm số sản phẩm trong danh mục
          supabase
            .from("categories")
            .select("id, name, products(count)")
            .ilike("name", `%${keyword}%`)
            .limit(4),
        ]);

        if (prodRes.error) throw prodRes.error;
        if (cateRes.error) throw cateRes.error;

        setProductResults(prodRes.data || []);
        setCategoryResults(cateRes.data || []);
        setShow(true);
      } catch (err) {
        console.error(err);
        setProductResults([]);
        setCategoryResults([]);
      } finally {
        setLoading(false);
      }
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
            className="w-32 brightness-125 caret-transparent hover:brightness-150 transition-all"
            src="/MocPhatLogo.png"
            alt="logo"
          />
        </Link>

        {/* SEARCH */}
        <div ref={boxRef} className="flex-1 flex justify-center px-8 relative">
          <div className="relative w-full max-w-xl">
            {/* Ô nhập */}
            <div className="group flex items-center gap-3 bg-white border border-gray-200 pl-5 pr-2 h-12 rounded-full w-full shadow-sm transition-all duration-300 focus-within:border-gray-900 focus-within:ring-4 focus-within:ring-gray-900/20 focus-within:shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 30 30"
                className="fill-gray-400 shrink-0 transition-colors group-focus-within:fill-lime-600"
              >
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
              </svg>

              <input
                type="text"
                placeholder="Bạn cần tìm sản phẩm gì?"
                className="w-full outline-none bg-transparent text-gray-700 text-sm placeholder:text-gray-400"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onFocus={() => keyword && setShow(true)}
              />

              {/* Nút xoá nhanh */}
              {keyword && (
                <button
                  type="button"
                  onClick={() => {
                    setKeyword("");
                    setResults([]);
                  }}
                  aria-label="Xoá"
                  className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* ===== DROPDOWN ===== */}
            {show && keyword && (
              <div className="absolute top-[60px] left-0 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl ring-1 ring-black/5 z-[9999] overflow-hidden">
                {loading ? (
                  // LOADING SKELETON
                  <div className="p-3 space-y-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 animate-pulse"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gray-200 shrink-0" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3.5 bg-gray-200 rounded w-3/4" />
                          <div className="h-3 bg-gray-100 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : categoryResults.length > 0 || productResults.length > 0 ? (
                  <div className="max-h-[28rem] overflow-y-auto py-1">
                    {/* ===== DANH MỤC ===== */}
                    {categoryResults.length > 0 && (
                      <>
                        <div className="px-4 pt-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Danh mục
                        </div>
                        {categoryResults.map((c) => {
                          const count = c.products?.[0]?.count ?? 0;
                          return (
                            <div
                              key={`cate-${c.id}`}
                              onClick={() => {
                                navigate(`/san-pham?danh-muc=${c.id}`);
                                setShow(false);
                              }}
                              className="group flex items-center gap-3 px-4 py-2.5 mx-2 rounded-xl hover:bg-lime-50 cursor-pointer transition-all duration-150"
                            >
                              {/* Icon danh mục */}
                              <div className="w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center shrink-0">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-lime-600"
                                >
                                  <rect
                                    x="3"
                                    y="3"
                                    width="7"
                                    height="7"
                                    rx="1"
                                  />
                                  <rect
                                    x="14"
                                    y="3"
                                    width="7"
                                    height="7"
                                    rx="1"
                                  />
                                  <rect
                                    x="3"
                                    y="14"
                                    width="7"
                                    height="7"
                                    rx="1"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="7"
                                    height="7"
                                    rx="1"
                                  />
                                </svg>
                              </div>

                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-700 line-clamp-1 group-hover:text-lime-700 transition-colors">
                                  {c.name}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {count} sản phẩm
                                </p>
                              </div>

                              <span className="shrink-0 text-xs font-semibold text-lime-700 bg-lime-100 px-2.5 py-1 rounded-full">
                                {count}
                              </span>
                            </div>
                          );
                        })}
                      </>
                    )}

                    {/* ===== SẢN PHẨM ===== */}
                    {productResults.length > 0 && (
                      <>
                        <div className="px-4 pt-3 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          Sản phẩm
                        </div>
                        {productResults.map((p) => (
                          <div
                            key={`prod-${p.id}`}
                            onClick={() => {
                              navigate(`/san-pham/${p.slug}`);
                              setShow(false);
                            }}
                            className="group flex items-center gap-3 px-4 py-2.5 mx-2 rounded-xl hover:bg-lime-50 cursor-pointer transition-all duration-150"
                          >
                            <img
                              src={p.thumbnail}
                              alt={p.name}
                              className="w-12 h-12 object-cover rounded-lg shadow-sm shrink-0 border border-gray-100"
                            />
                            <span className="text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-lime-700 transition-colors">
                              {p.name}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              className="ml-auto shrink-0 text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-lime-600 transition-all"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                ) : (
                  // KHÔNG CÓ KẾT QUẢ
                  <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="mb-2 text-gray-300"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <span className="text-sm">
                      Không tìm thấy kết quả phù hợp
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex items-center gap-6 caret-transparent">
          <div className="flex items-center gap-3 border p-3 rounded-full bg-olive-50">
            <img src="/icon/call.png" className="w-6 h-6" />
            <span className="text-sm font-semibold">0942 574 386</span>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tranphung.qnco@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border p-3 rounded-full bg-olive-50"
          >
            <img src="/icon/gmail.png" alt="Gửi email" className="w-6 h-6" />
            <span className="text-sm font-semibold">
              tranphung.qnco@gmail.com
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

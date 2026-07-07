import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Reveal from "../components/Reveal";

const ProductPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [activeCate, setActiveCate] = useState("all");
  const [visibleCounts, setVisibleCounts] = useState({});
  const PER_PAGE = 8;

  // ================= FETCH =================
  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        const [cateRes, prodRes] = await Promise.all([
          supabase
            .from("categories")
            .select("id, name")
            .order("id", { ascending: true }),
          supabase
            .from("products")
            .select("id, name, slug, thumbnail, category_id")
            .order("id", { ascending: true }),
        ]);

        if (cateRes.error) throw cateRes.error;
        if (prodRes.error) throw prodRes.error;

        if (!active) return;
        setCategories(cateRes.data || []);
        setProducts(prodRes.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchData();
    return () => {
      active = false;
    };
  }, []);

  // Lọc sản phẩm theo từ khoá + danh mục đang chọn
  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return products.filter((p) => {
      const matchKeyword = p.name?.toLowerCase().includes(keyword);
      const matchCate =
        activeCate === "all" || String(p.category_id) === String(activeCate);
      return matchKeyword && matchCate;
    });
  }, [products, search, activeCate]);

  // Gom sản phẩm (đã lọc) theo category
  const productsByCate = useMemo(() => {
    const map = new Map();
    for (const p of filteredProducts) {
      const list = map.get(p.category_id);
      if (list) list.push(p);
      else map.set(p.category_id, [p]);
    }
    return map;
  }, [filteredProducts]);

  // ================= LOADING SKELETON =================
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 h-72 rounded-3xl" />
              <div className="h-4 bg-gray-200 rounded mt-4 w-3/4" />
              <div className="h-6 bg-gray-200 rounded mt-3 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const hasResults = filteredProducts.length > 0;

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {/* ===== THANH TÌM KIẾM + LỌC ===== */}
      <div className="mb-12">
        {/* Ô tìm */}
        <div className="relative max-w-xl mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Tìm sản phẩm theo tên..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white text-gray-900 placeholder:text-gray-400 border border-gray-200 pl-12 pr-4 h-12 rounded-full outline-none focus:border-lime-500 focus:ring-4 focus:ring-lime-500/15 shadow-sm transition"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              aria-label="Xoá"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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

        {/* Nút lọc danh mục */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCate("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCate === "all"
                ? "bg-lime-600 text-white shadow-md shadow-lime-600/25"
                : "bg-white text-gray-600 border border-gray-200 hover:border-lime-300 hover:text-lime-600"
            }`}
          >
            Tất cả
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCate(c.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                String(activeCate) === String(c.id)
                  ? "bg-lime-600 text-white shadow-md shadow-lime-600/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-lime-300 hover:text-lime-600"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* ===== KHÔNG CÓ KẾT QUẢ ===== */}
      {!hasResults ? (
        <div className="py-20 text-center">
          <div className="flex flex-col items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="mb-3 text-gray-900"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <p className="text-gray-500 font-medium">
              {search || activeCate !== "all"
                ? "Không tìm thấy sản phẩm phù hợp"
                : "Chưa có sản phẩm nào"}
            </p>
          </div>
        </div>
      ) : (
        categories.map((cate, cateIndex) => {
          const productByCate = productsByCate.get(cate.id);

          if (!productByCate || productByCate.length === 0) return null;

          const visible = visibleCounts[cate.id] ?? PER_PAGE; // mặc định hiện 8
          const shownProducts = productByCate.slice(0, visible);
          const hasMore = productByCate.length > visible;
          const isExpanded = visible > PER_PAGE;

          return (
            <section key={cate.id} className="mb-20">
              {/* CATEGORY TITLE */}
              <Reveal>
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold uppercase bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                    {cate.name}
                  </h2>
                  <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
                </div>
              </Reveal>

              {/* PRODUCT GRID */}
              <Reveal>
                <div
                  className="
      flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4
      sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0
      scrollbar-none [-ms-overflow-style:none]
    "
                >
                  {shownProducts.map((p, idx) => {
                    const eager = cateIndex === 0 && idx < 4;
                    return (
                      <div
                        key={p.id}
                        onClick={() => navigate(`/san-pham/${p.slug}`)}
                        className="group cursor-pointer snap-start shrink-0 w-[70%] sm:w-auto"
                      >
                        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                          <div className="overflow-hidden bg-gray-100">
                            <img
                              src={p.thumbnail}
                              alt={p.name}
                              width="400"
                              height="288"
                              loading={eager ? "eager" : "lazy"}
                              decoding="async"
                              fetchPriority={eager ? "high" : "auto"}
                              className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>

                          <div className="p-5">
                            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-7 group-hover:text-lime-600 transition">
                              {p.name}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>

              {/* NÚT XEM THÊM / THU GỌN */}
              {(hasMore || isExpanded) && (
                <div className="flex justify-center gap-3 mt-10">
                  {hasMore && (
                    <button
                      onClick={() =>
                        setVisibleCounts((prev) => ({
                          ...prev,
                          [cate.id]: visible + PER_PAGE,
                        }))
                      }
                      className="px-8 py-3 rounded-full border border-lime-600 text-lime-700 font-medium hover:bg-lime-600 hover:text-white transition"
                    >
                      Xem thêm
                    </button>
                  )}

                  {isExpanded && (
                    <button
                      onClick={() =>
                        setVisibleCounts((prev) => ({
                          ...prev,
                          [cate.id]: PER_PAGE,
                        }))
                      }
                      className="px-8 py-3 rounded-full border border-lime-600 text-lime-700 font-medium hover:bg-lime-600 hover:text-white transition"
                    >
                      Thu gọn
                    </button>
                  )}
                </div>
              )}
            </section>
          );
        })
      )}
    </div>
  );
};

export default ProductPage;

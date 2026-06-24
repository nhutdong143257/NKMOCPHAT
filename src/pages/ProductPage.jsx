import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import Reveal from "../components/Reveal";

const ProductPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH =================
  useEffect(() => {
    let active = true; // tránh setState khi component đã unmount

    const fetchData = async () => {
      try {
        const [cateRes, prodRes] = await Promise.all([
          supabase
            .from("categories")
            .select("id, name") // chỉ lấy cột cần dùng
            .order("id", { ascending: true }),
          supabase
            .from("products")
            .select("id, name, slug, thumbnail, category_id") // thêm slug để điều hướng
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

  // Gom sản phẩm theo category 1 lần -> O(n) thay vì filter() lặp lại mỗi category O(n*m)
  const productsByCate = useMemo(() => {
    const map = new Map();
    for (const p of products) {
      const list = map.get(p.category_id);
      if (list) list.push(p);
      else map.set(p.category_id, [p]);
    }
    return map;
  }, [products]);

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

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {categories.map((cate, cateIndex) => {
        const productByCate = productsByCate.get(cate.id);
        if (!productByCate || productByCate.length === 0) return null;

        return (
          <section key={cate.id} className="mb-20">
            {/* CATEGORY TITLE */}
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase tracking-wide text-gray-900">
                  {cate.name}
                </h2>
                <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
              </div>
            </Reveal>

            {/* PRODUCT GRID */}
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productByCate.map((p, idx) => {
                  // Ảnh khung đầu tiên load ngay (tốt cho LCP), còn lại lazy
                  const eager = cateIndex === 0 && idx < 4;
                  return (
                    <div
                      key={p.id}
                      onClick={() => navigate(`/san-pham/${p.slug}`)}
                      className="group cursor-pointer"
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
          </section>
        );
      })}
    </div>
  );
};

export default ProductPage;

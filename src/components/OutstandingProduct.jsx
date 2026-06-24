import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const OutstandingProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("id, name, slug, thumbnail")
          .limit(4);

        if (error) throw error;
        setProducts(data || []);
      } catch (err) {
        console.error("Supabase error:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* PRODUCT GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/san-pham/${p.slug}`)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-lime-200 hover:-translate-y-1 transition-all duration-300">
              {/* ẢNH */}
              <div className="overflow-hidden">
                <img
                  src={p.thumbnail}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* lớp phủ + nút khi hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-center pb-16">
                <span className="text-white text-sm font-medium border border-white/70 px-4 py-1.5 rounded-full backdrop-blur-sm">
                  Xem chi tiết
                </span>
              </div>

              {/* TÊN */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-lime-600 transition">
                  {p.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center items-center mt-12">
        <Link to="/san-pham">
          <button className="px-7 py-2.5 border border-lime-600 text-lime-600 font-medium rounded-full hover:bg-lime-600 hover:text-white transition">
            Xem tất cả sản phẩm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OutstandingProduct;
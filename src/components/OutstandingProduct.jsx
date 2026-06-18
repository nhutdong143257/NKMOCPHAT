import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OutstandingProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        // lấy 4 sản phẩm nổi bật đầu tiên (hoặc bạn custom field sau)
        setProducts(data.slice(0, 4));
      } catch (err) {
        console.error(err);
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
            onClick={() => navigate(`/san-pham/${p.id}`)}
            className="group cursor-pointer"
          >
            <div className="overflow-hidden rounded-2xl border-2 border-gray-300 bg-white hover:shadow-lg transition">
              <img
                src={p.thumbnail}
                alt={p.name}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-lime-600 transition">
                  {p.name}
                </h3>

                {p.price && (
                  <p className="text-lime-600 font-bold mt-1">
                    {Number(p.price).toLocaleString("vi-VN")}₫
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center items-center p-8">
        <Link to="/san-pham">
          <button className="px-6 py-2 border border-lime-600 text-lime-600 rounded-full hover:bg-lime-600 hover:text-white transition">
            Xem tất cả sản phẩm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OutstandingProduct;
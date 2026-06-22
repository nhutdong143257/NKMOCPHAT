import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const ProductPage = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // ================= FETCH =================
  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const [cateRes, prodRes] = await Promise.all([
      //     fetch("http://localhost:5000/api/categories"),
      //     fetch("http://localhost:5000/api/products"),
      //   ]);

      //   const cateData = await cateRes.json();
      //   const prodData = await prodRes.json();

      //   setCategories(cateData);
      //   setProducts(prodData);
      // } catch (err) {
      //   console.error(err);
      // }
      try {
        const [cateRes, prodRes] = await Promise.all([
          supabase.from("categories").select("*"),
          supabase.from("products").select("*"),
        ]);

        if (cateRes.error) throw cateRes.error;
        if (prodRes.error) throw prodRes.error;

        setCategories(cateRes.data || []);
        setProducts(prodRes.data || []);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14">
      {categories.map((cate) => {
        const productByCate = products.filter((p) => p.category_id === cate.id);

        if (productByCate.length === 0) return null;

        return (
          <section key={cate.id} className="mb-20">
            {/* CATEGORY TITLE */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold uppercase tracking-wide text-gray-900">
                {cate.name}
              </h2>

              <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productByCate.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/san-pham/${p.id}`)}
                  className="group cursor-pointer"
                >
                  {/* CARD */}
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
                    {/* IMAGE */}
                    <div className="overflow-hidden bg-gray-100">
                      <img
                        src={p.thumbnail}
                        alt={p.name}
                        className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-7 group-hover:text-lime-600 transition">
                        {p.name}
                      </h3>

                      {p.price && (
                        <p className="mt-3 text-2xl font-bold text-lime-600">
                          {Number(p.price).toLocaleString("vi-VN")}₫
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductPage;

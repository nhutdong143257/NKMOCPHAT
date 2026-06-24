import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { supabase } from "../../supabase";
import { Package, Newspaper, Users, Layers, ArrowRight } from "lucide-react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total_products: 0,
    total_posts: 0,
    total_users: 0,
    total_categories: 0,
  });
  const [recentProducts, setRecentProducts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { count: productsCount },
          { count: postsCount },
          { count: usersCount },
          { count: categoriesCount },
          { data: latestProducts },
          { data: latestPosts },
        ] = await Promise.all([
          supabase.from("products").select("*", { count: "exact", head: true }),
          supabase.from("posts").select("*", { count: "exact", head: true }),
          supabase.from("users").select("*", { count: "exact", head: true }),
          supabase
            .from("categories")
            .select("*", { count: "exact", head: true }),
          supabase
            .from("products")
            .select("id, name, slug, thumbnail, created_at")
            .order("created_at", { ascending: false })
            .limit(5),
          supabase
            .from("posts")
            .select("id, title, slug, thumbnail, created_at")
            .order("created_at", { ascending: false })
            .limit(5),
        ]);

        setStats({
          total_products: productsCount || 0,
          total_posts: postsCount || 0,
          total_users: usersCount || 0,
          total_categories: categoriesCount || 0,
        });
        setRecentProducts(latestProducts || []);
        setRecentPosts(latestPosts || []);
      } catch (err) {
        console.error("Fetch dashboard error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const cards = [
    {
      label: "Sản phẩm",
      value: stats.total_products,
      icon: Package,
      color: "text-lime-600",
      bg: "bg-lime-100",
    },
    {
      label: "Tin tức",
      value: stats.total_posts,
      icon: Newspaper,
      color: "text-lime-600",
      bg: "bg-lime-100",
    },
    {
      label: "Danh mục",
      value: stats.total_categories,
      icon: Layers,
      color: "text-lime-600",
      bg: "bg-lime-100",
    },
    {
      label: "Người dùng",
      value: stats.total_users,
      icon: Users,
      color: "text-lime-600",
      bg: "bg-lime-100",
    },
  ];

  return (
    <div className="flex min-h-screen bg-linear-to-br from-lime-50 via-gray-100 to-white">
      <Sidebar />

      <div className="flex-1 caret-transparent text-gray-800">
        <div className="p-6 md:p-8">
          {/* TITLE */}
          <div className="mb-8">
            <p className="text-sm text-gray-400 capitalize mb-1">{today}</p>
            <h2 className="text-3xl font-bold uppercase text-gray-900 mt-5">
              Công ty TNHH NK Mộc Phát
            </h2>
            <div className="w-24 h-1 bg-lime-600 mt-3 rounded-full"></div>
          </div>

          {loading ? (
            // SKELETON
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl shadow-sm animate-pulse h-28"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-200 mb-3" />
                  <div className="h-6 bg-gray-200 rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* THẺ THỐNG KÊ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((c, i) => {
                  const content = (
                    <div className="group bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center">
                      <div
                        className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-3`}
                      >
                        <c.icon className={c.color} size={24} />
                      </div>
                      <p className="text-sm text-gray-500">{c.label}</p>
                      <h3 className={`text-3xl font-bold mt-1 ${c.color}`}>
                        {c.value}
                      </h3>
                    </div>
                  );
                  return c.to ? (
                    <Link key={i} to={c.to}>
                      {content}
                    </Link>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* 2 DANH SÁCH MỚI NHẤT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* SẢN PHẨM MỚI */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">
                      Sản phẩm mới nhất
                      <div className="w-24 h-1 bg-lime-600 mt-3 rounded-full"></div>
                    </h3>
                    <Link
                      to="/admin/products"
                      className="text-xs text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Xem tất cả <ArrowRight size={14} />
                    </Link>
                  </div>

                  {recentProducts.length === 0 ? (
                    <p className="text-sm text-gray-400 py-4">
                      Chưa có sản phẩm.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {recentProducts.map((p) => (
                        <li key={p.id} className="flex items-center gap-3">
                          <img
                            src={p.thumbnail}
                            alt={p.name}
                            className="w-11 h-11 rounded-lg object-cover border border-gray-100 shrink-0"
                          />
                          <span className="text-sm text-gray-700 line-clamp-1 flex-1">
                            {p.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* TIN TỨC MỚI */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900">
                      Tin tức mới nhất
                      <div className="w-24 h-1 bg-lime-600 mt-3 rounded-full"></div>
                    </h3>
                    <Link
                      to="/admin/posts"
                      className="text-xs text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Xem tất cả <ArrowRight size={14} />
                    </Link>
                  </div>

                  {recentPosts.length === 0 ? (
                    <p className="text-sm text-gray-400 py-4">
                      Chưa có tin tức.
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {recentPosts.map((p) => (
                        <li key={p.id} className="flex items-center gap-3">
                          <img
                            src={p.thumbnail}
                            alt={p.title}
                            className="w-11 h-11 rounded-lg object-cover border border-gray-100 shrink-0"
                          />
                          <span className="text-sm text-gray-700 line-clamp-1 flex-1">
                            {p.title}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

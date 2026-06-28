import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";
import Reveal from "../components/Reveal";

export default function NewPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true; // tránh setState sau khi unmount

    const loadPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("id, slug, thumbnail, title, category, created_at") // chỉ lấy cột cần
          .order("created_at", { ascending: false });

        if (error) throw error;
        if (active) setPosts(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadPosts();
    return () => {
      active = false;
    };
  }, []);

  return (
    <Reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 caret-transparent">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-gray-900">
            Tin tức
          </h2>
          <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* ================= LOADING SKELETON ================= */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-xl overflow-hidden animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200" />
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/3 mt-3" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <p className="text-center text-gray-500">Chưa có bài viết nào.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, idx) => {
              const eager = idx < 3; // 3 ảnh đầu load ngay, tốt cho LCP
              return (
                <Link
                  key={p.id}
                  to={`/tin-tuc/${p.slug}`}
                  className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  {p.thumbnail && (
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      width="400"
                      height="192"
                      loading={eager ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={eager ? "high" : "auto"}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-4">
                    <h3 className="font-semibold text-lg line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">{p.category}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </Reveal>
  );
}

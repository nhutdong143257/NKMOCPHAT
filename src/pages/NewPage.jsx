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
      {/* Nền full width */}
      <div className="bg-linear-to-b from-lime-50 via-white to-gray-50 caret-transparent">
        {/* Nội dung giới hạn ở giữa */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="relative text-center max-w-3xl mx-auto mb-16">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 bg-lime-200/20 blur-3xl rounded-full -z-10"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lime-100 border border-lime-200 text-lime-700 text-xs font-bold uppercase tracking-[0.2em]">
              Cập nhật mới nhất
            </div>

            {/* Title */}
            <h2 className="mt-6 text-4xl sm:text-5xl font-black text-gray-900 uppercase">
              Tin tức &
              <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Kiến thức
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
              Cập nhật những thông tin mới nhất về{" "}
              <span className="font-semibold text-gray-900">in ấn</span>, chia
              sẻ kinh nghiệm lựa chọn chất liệu, kỹ thuật in và các xu hướng
              thiết kế giúp doanh nghiệp nâng cao hiệu quả truyền thông.
            </p>

            {/* Divider */}
            <div className="flex justify-center mt-8">
              <div className="w-28 h-1 rounded-full bg-linear-to-r from-lime-500 via-green-500 to-emerald-500"></div>
            </div>
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
                const eager = idx < 3;
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
                      <h3 className="text-gray-900 font-semibold text-lg line-clamp-2">
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
      </div>
    </Reveal>
  );
}

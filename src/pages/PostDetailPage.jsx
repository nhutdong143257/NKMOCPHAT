import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { ChevronRight, ArrowLeft, Calendar, Link2, Check } from "lucide-react";

export default function PostDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let active = true;
    const fetchPost = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();
      if (!active) return;
      if (error) {
        console.error(error);
        setPost(null);
      } else {
        setPost(data);
      }
      setLoading(false);
    };
    fetchPost();
    return () => {
      active = false;
    };
  }, [slug]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-8" />
        <div className="h-10 bg-gray-200 rounded w-4/5 mb-4" />
        <div className="h-10 bg-gray-200 rounded w-3/5 mb-8" />
        <div className="h-72 bg-gray-200 rounded-2xl mb-8" />
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-lg text-gray-500 mb-4">Không tìm thấy bài viết.</p>
        <Link
          to="/tin-tuc"
          className="inline-flex items-center gap-2 text-lime-700 font-medium hover:underline"
        >
          <ArrowLeft size={18} /> Về trang tin tức
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
          <Link to="/" className="hover:text-lime-700 transition">
            Trang chủ
          </Link>
          <ChevronRight size={14} />
          <Link to="/tin-tuc" className="hover:text-lime-700 transition">
            Tin tức
          </Link>
          {post.category && (
            <>
              <ChevronRight size={14} />
              <span className="text-gray-500">{post.category}</span>
            </>
          )}
        </nav>

        {/* HEADER BÀI VIẾT */}
        <header className="mb-8">
          {post.category && (
            <span className="inline-block text-xs font-semibold text-lime-700 tracking-[0.15em] uppercase mb-4">
              {post.category}
            </span>
          )}

          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mt-6 pb-6 border-b border-gray-200">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={15} className="text-lime-600" />
              {new Date(post.created_at).toLocaleDateString("vi-VN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-gray-300">•</span>
            <span>Công ty TNHH NK Mộc Phát</span>
          </div>
        </header>

        {/* THUMBNAIL */}
        {post.thumbnail && (
          <figure className="mb-10">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </figure>
        )}

        {/* NỘI DUNG */}
        <div
          className="
            text-[17px]
            text-gray-700
            leading-8

            [&_h1]:text-2xl sm:[&_h1]:text-3xl
            [&_h1]:font-bold [&_h1]:text-gray-900
            [&_h1]:mt-10 [&_h1]:mb-5 [&_h1]:tracking-tight

            [&_h2]:text-xl sm:[&_h2]:text-2xl
            [&_h2]:font-bold [&_h2]:text-gray-900
            [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight

            [&_h3]:text-lg sm:[&_h3]:text-xl
            [&_h3]:font-semibold [&_h3]:text-gray-900
            [&_h3]:mt-8 [&_h3]:mb-3

            [&_p]:mb-5 [&_p]:leading-8

            [&_ul]:list-disc [&_ul]:pl-6 sm:[&_ul]:pl-7 [&_ul]:mb-6 [&_ul]:space-y-1
            [&_ol]:list-decimal [&_ol]:pl-6 sm:[&_ol]:pl-7 [&_ol]:mb-6 [&_ol]:space-y-1
            [&_li]:leading-8

            [&_blockquote]:border-l-4 [&_blockquote]:border-l-lime-600
            [&_blockquote]:bg-lime-50/60 [&_blockquote]:pl-5 [&_blockquote]:pr-4 [&_blockquote]:py-3
            [&_blockquote]:italic [&_blockquote]:text-gray-600
            [&_blockquote]:rounded-r-lg [&_blockquote]:my-6

            [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-8 [&_img]:mx-auto

            [&_a]:text-lime-700 [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2
            hover:[&_a]:text-lime-800

            [&_hr]:my-10 [&_hr]:border-gray-200

            **:[[style*='text-align:center']]:text-center
            **:[[style*='text-align:right']]:text-right
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FOOTER BÀI VIẾT */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex items-center justify-between flex-wrap gap-4">
          <button
            onClick={() => navigate("/tin-tuc")}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-lime-700 transition"
          >
            <ArrowLeft size={18} />
            Xem các bài viết khác
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-lime-50 hover:text-lime-700 hover:border-lime-200 transition"
          >
            {copied ? <Check size={16} /> : <Link2 size={16} />}
            {copied ? "Đã sao chép" : "Chia sẻ bài viết"}
          </button>
        </div>
      </article>
    </div>
  );
}

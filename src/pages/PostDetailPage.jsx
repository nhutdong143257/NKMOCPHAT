import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";

export default function PostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      setPost(data);
    };

    fetchPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Đang tải bài viết...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Category */}
        {post.category && (
          <span className="inline-flex bg-lime-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Date */}
        <div className="flex items-center gap-3 text-gray-500 border-b pb-6 mb-8">
          <span>
            🗓️ {new Date(post.created_at).toLocaleDateString("vi-VN")}
          </span>
        </div>

        {/* Thumbnail */}
        {post.thumbnail && (
          <div className="mb-10">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full rounded-3xl shadow-xl"
            />
          </div>
        )}

        {/* Content */}
        <article
          className="
            text-base sm:text-lg
            text-slate-700

            [&_h1]:text-2xl
            sm:[&_h1]:text-4xl
            [&_h1]:font-bold
            [&_h1]:mb-6

            [&_h2]:text-xl
            sm:[&_h2]:text-3xl
            [&_h2]:font-bold
            [&_h2]:text-slate-900
            [&_h2]:mt-8
            sm:[&_h2]:mt-10
            [&_h2]:mb-5

            [&_h3]:text-lg
            sm:[&_h3]:text-2xl
            [&_h3]:font-semibold
            [&_h3]:mt-6
            sm:[&_h3]:mt-8
            [&_h3]:mb-4

            [&_p]:leading-8
            sm:[&_p]:leading-9
            [&_p]:mb-5

            [&_ul]:list-disc
            [&_ul]:pl-6
            sm:[&_ul]:pl-8
            [&_ul]:mb-6

            [&_ol]:list-decimal
            [&_ol]:pl-6
            sm:[&_ol]:pl-8
            [&_ol]:mb-6

            [&_li]:mb-2

            [&_blockquote]:border-l-4
            [&_blockquote]:border-l-lime-600
            [&_blockquote]:bg-lime-50
            [&_blockquote]:pl-5
            [&_blockquote]:py-3
            [&_blockquote]:italic
            [&_blockquote]:rounded-r-lg
            [&_blockquote]:my-6

            [&_img]:rounded-2xl
            [&_img]:shadow-lg
            [&_img]:my-8

            [&_a]:text-lime-600
            [&_a]:font-medium
            [&_a]:underline
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

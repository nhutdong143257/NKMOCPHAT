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
    return <p className="text-center mt-10">Đang tải...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Category */}
        {post.category && (
          <span className="inline-block bg-lime-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-gray-500 border-b pb-6 mb-8">
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
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        )}

        {/* Content */}
        <article
          className="
          prose
          prose-lg
          max-w-none
          prose-headings:text-gray-900
          prose-headings:font-bold
          prose-p:text-gray-700
          prose-p:leading-8
          prose-img:rounded-xl
          prose-img:shadow-md
          prose-a:text-lime-600
          prose-blockquote:border-l-lime-600
          prose-blockquote:text-gray-600
        "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}

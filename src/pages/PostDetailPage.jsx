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
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-400 text-sm mb-6">
        {new Date(post.created_at).toLocaleDateString("vi-VN")}
      </p>

      {post.thumbnail && (
        <img
          src={post.thumbnail}
          className="w-full rounded-xl mb-6"
          alt={post.title}
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostDetailPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/slug/${slug}`)
      .then((res) => res.json())
      .then(setPost);
  }, [slug]);

  if (!post) {
    return <p className="text-center mt-10">Đang tải...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">
        {post.title}
      </h1>

      {/* DATE */}
      <p className="text-gray-400 text-sm mb-6">
        {new Date(post.created_at).toLocaleDateString("vi-VN")}
      </p>

      {/* IMAGE */}
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          className="w-full rounded-xl mb-6"
        />
      )}

      {/* CONTENT */}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
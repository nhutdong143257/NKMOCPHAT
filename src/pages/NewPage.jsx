import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 caret-transparent">
      <h2 className="text-3xl text-center font-semibold mb-3 uppercase text-gray-800">
        Tin tức
      </h2>
      <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>

      <div className="grid grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link
            key={p.id}
            to={`/tin-tuc/${p.slug}`}
            className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {p.thumbnail && (
              <img src={p.thumbnail} className="w-full h-48 object-cover" />
            )}

            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{p.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

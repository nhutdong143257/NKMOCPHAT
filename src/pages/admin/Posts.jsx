import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Editor from "../../components/Editor";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [preview, setPreview] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    thumbnail: "",
    category: "",
  });

  // ================= FETCH =================
  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= AUTO SLUG =================
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""); 
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;

    setForm({
      ...form,
      title,
      slug: generateSlug(title),
    });
  };

  // ================= ADD =================
  const handleAdd = async () => {
    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("slug", form.slug);
      formData.append("content", form.content);
      formData.append("category", form.category);

      if (form.thumbnail) {
        formData.append("thumbnail", form.thumbnail);
      }

      await fetch("http://localhost:5000/api/posts", {
        method: "POST",
        body: formData, // 👈 KHÔNG set Content-Type
      });

      setForm({
        title: "",
        slug: "",
        content: "",
        thumbnail: "",
        category: "",
      });

      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
    });

    fetchData();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <h2 className="text-3xl font-bold mb-6 uppercase text-gray-800">
            Quản lý tin tức
          </h2>

          {/* ===== FORM CARD ===== */}
          <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
            <div className="grid grid-cols-1 gap-4">
              {/* TITLE */}
              <input
                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                placeholder="Tiêu đề"
                value={form.title}
                onChange={handleTitleChange}
              />

              {/* SLUG */}
              <input
                className="border bg-gray-100 p-3 rounded-lg text-gray-500"
                placeholder="Slug"
                value={form.slug}
                readOnly
              />

              {/* CATEGORY */}
              <input
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-lime-500"
                placeholder="Danh mục"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />

              {/* UPLOAD */}
              <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center hover:border-lime-500 transition">
                <input
                  type="file"
                  className="hidden"
                  id="upload"
                  onChange={(e) =>
                    setForm({ ...form, thumbnail: e.target.files[0] })
                  }
                />
                <label
                  htmlFor="upload"
                  className="cursor-pointer text-gray-500"
                >
                  📁 Chọn ảnh thumbnail
                </label>

                {form.thumbnail && (
                  <img
                    src={
                      typeof form.thumbnail === "string"
                        ? form.thumbnail
                        : URL.createObjectURL(form.thumbnail)
                    }
                    className="w-40 h-40 object-cover mx-auto mt-3 rounded-xl shadow"
                  />
                )}
              </div>

              {/* EDITOR */}
              <div className="border rounded-xl p-3">
                <Editor
                  value={form.content}
                  onChange={(html) => setForm({ ...form, content: html })}
                />
              </div>

              {/* BUTTON */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={handleAdd}
                  className="bg-lime-600 hover:bg-lime-700 text-white px-5 py-2 rounded-lg shadow transition"
                >
                  🚀 Đăng bài
                </button>

                <button
                  onClick={() => setPreview(!preview)}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
                >
                  👁 Preview
                </button>
              </div>
            </div>
          </div>

          {/* ===== PREVIEW ===== */}
          {preview && (
            <div className="bg-white p-6 rounded-2xl shadow-md mb-6">
              <h3 className="text-3xl font-bold mb-3 text-gray-800">
                {form.title || "Tiêu đề bài viết"}
              </h3>

              {form.thumbnail && (
                <img
                  src={
                    typeof form.thumbnail === "string"
                      ? form.thumbnail
                      : URL.createObjectURL(form.thumbnail)
                  }
                  className="w-full h-72 object-cover rounded-xl mb-4"
                />
              )}

              <div
                dangerouslySetInnerHTML={{ __html: form.content }}
                className="prose max-w-none"
              />
            </div>
          )}

          {/* ===== LIST ===== */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-lg mb-4">Danh sách bài viết</h3>

            <div className="space-y-3">
              {posts.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition border"
                >
                  <div className="flex items-center gap-3">
                    {p.thumbnail && (
                      <img
                        src={p.thumbnail}
                        className="w-14 h-14 object-cover rounded-lg"
                      />
                    )}

                    <div>
                      <p className="font-semibold">{p.title}</p>
                      <p className="text-sm text-gray-500">{p.category}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Xoá
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

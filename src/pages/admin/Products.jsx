import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    short_description: "",
    thumbnail: "",
    category_id: "",
    is_featured: false,
  });

  // ================= FETCH =================
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const res = await fetch("http://localhost:5000/api/categories");
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // ================= DEBOUNCE =================
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  // ================= FILTER =================
  const filteredProducts = products.filter((p) => {
    const keyword = debouncedSearch.toLowerCase();
    return (
      p.name?.toLowerCase().includes(keyword) ||
      p.category_name?.toLowerCase().includes(keyword)
    );
  });

  // ================= HANDLE =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setForm({
      ...form,
      name,
      slug: generateSlug(name),
    });
  };

  // ================= ADD =================
  const handleAdd = async () => {
    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("slug", form.slug);
    formData.append("description", form.description);
    formData.append("short_description", form.short_description);
    formData.append("category_id", form.category_id);
    formData.append("is_featured", form.is_featured);

    if (form.thumbnail) {
      formData.append("thumbnail", form.thumbnail);
    }

    await fetch("http://localhost:5000/api/products", {
      method: "POST",
      body: formData,
    });

    setForm({
      name: "",
      slug: "",
      description: "",
      short_description: "",
      thumbnail: "",
      category_id: "",
      is_featured: false,
    });

    fetchProducts();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });
    fetchProducts();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 p-6">
        {/* TITLE */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold uppercase">
            Quản lý sản phẩm
          </h2>
          <div className="w-24 h-1 bg-lime-600 mt-2 rounded-full"></div>
        </div>

        {/* ===== FORM CARD ===== */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h3 className="font-semibold mb-4 text-lg">Thêm sản phẩm</h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              className="border p-2 rounded focus:ring-2 focus:ring-lime-400"
              placeholder="Tên sản phẩm"
              value={form.name}
              onChange={handleNameChange}
            />

            <input
              className="border p-2 rounded bg-gray-100"
              placeholder="Slug"
              value={form.slug}
              readOnly
            />

            <input
              className="border p-2 rounded col-span-2"
              name="description"
              placeholder="Mô tả chi tiết"
              value={form.description}
              onChange={handleChange}
            />

            <input
              className="border p-2 rounded col-span-2"
              name="short_description"
              placeholder="Mô tả ngắn"
              value={form.short_description}
              onChange={handleChange}
            />

            {/* FILE */}
            <input
              type="file"
              className="border p-2 rounded"
              onChange={(e) =>
                setForm({ ...form, thumbnail: e.target.files[0] })
              }
            />

            {form.thumbnail && (
              <img
                src={URL.createObjectURL(form.thumbnail)}
                className="w-24 h-24 object-cover rounded border"
              />
            )}

            {/* CATEGORY */}
            <select
              className="border p-2 rounded"
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
            >
              <option value="">-- Chọn danh mục --</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            {/* CHECKBOX */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_featured"
                checked={form.is_featured}
                onChange={handleChange}
              />
              Nổi bật
            </label>
          </div>

          <button
            onClick={handleAdd}
            className="mt-4 bg-lime-600 hover:bg-lime-700 text-white px-5 py-2 rounded-lg shadow"
          >
            + Thêm sản phẩm
          </button>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="🔍 Tìm sản phẩm..."
          className="border p-2 mb-4 w-80 rounded focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* ===== TABLE ===== */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-center">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Ảnh</th>
                <th className="p-3">Tên</th>
                <th className="p-3">Danh mục</th>
                <th className="p-3">Nổi bật</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">
                    {p.thumbnail ? (
                      <img
                        src={p.thumbnail}
                        className="w-16 h-16 object-cover mx-auto rounded"
                      />
                    ) : (
                      "—"
                    )}
                  </td>

                  <td className="p-3 font-medium">{p.name}</td>
                  <td className="p-3">{p.category_name}</td>
                  <td className="p-3">{p.is_featured ? "⭐" : "-"}</td>

                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Xoá
                    </button>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-4 text-gray-400">
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
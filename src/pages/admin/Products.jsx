import { useEffect, useState, useMemo } from "react";
import Sidebar from "../../components/Sidebar";
import { supabase } from "../../supabase";
import {
  Plus,
  Search,
  Trash2,
  Star,
  ImageOff,
  X,
  Pencil,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PAGE_SIZE = 8;
const BUCKET = "uploads";

const emptyForm = {
  name: "",
  slug: "",
  description: "",
  short_description: "",
  thumbnail: "",
  category_id: "",
  is_featured: false,
};

// Lấy tên file trong bucket từ public URL để xoá ảnh
const getStoragePath = (url) => {
  if (!url || typeof url !== "string") return null;
  const marker = `/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);
  return idx === -1 ? null : url.slice(idx + marker.length);
};

const generateSlug = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [page, setPage] = useState(1);

  const [form, setForm] = useState(emptyForm);

  // Modal sửa
  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [oldThumbnail, setOldThumbnail] = useState(""); // URL ảnh cũ để xoá nếu thay ảnh

  // ================= FETCH =================
  const fetchProducts = async () => {
    const { data } = await supabase
      .from("products")
      .select("*, categories(name)")
      .order("created_at", { ascending: false });
    setProducts(data || []);
    setLoading(false);
  };

  const fetchCategories = async () => {
    const { data } = await supabase.from("categories").select("*");
    setCategories(data || []);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // ================= DEBOUNCE =================
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearch, filterCategory]);

  // ================= FILTER =================
  const filteredProducts = useMemo(() => {
    const keyword = debouncedSearch.toLowerCase();
    return products.filter((p) => {
      const matchKeyword =
        p.name?.toLowerCase().includes(keyword) ||
        p.categories?.name?.toLowerCase().includes(keyword);
      const matchCategory = filterCategory
        ? String(p.category_id) === String(filterCategory)
        : true;
      return matchKeyword && matchCategory;
    });
  }, [products, debouncedSearch, filterCategory]);

  // ================= PAGINATION =================
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE),
  );
  const pageItems = filteredProducts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  // ================= UPLOAD ẢNH =================
  const uploadThumbnail = async (file) => {
    // Làm sạch tên file: bỏ dấu, thay khoảng trắng và ký tự lạ
    const cleanName = file.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9.]/g, "-");

    const fileName = `${Date.now()}-${cleanName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(fileName, file);

    if (uploadError) {
      console.error("Upload error:", uploadError); // xem chi tiết lỗi ở đây
      throw uploadError;
    }

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
    return data.publicUrl;
  };

  // Xoá 1 ảnh trong storage theo URL
  const removeStorageImage = async (url) => {
    const path = getStoragePath(url);
    if (path) {
      await supabase.storage.from(BUCKET).remove([path]);
    }
  };

  // ================= THÊM =================
  const handleAddChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleAddNameChange = (e) => {
    const name = e.target.value;
    setForm({ ...form, name, slug: generateSlug(name) });
  };

  const handleAdd = async () => {
    if (!form.name.trim() || !form.category_id) {
      alert("Vui lòng nhập tên và chọn danh mục.");
      return;
    }

    setSaving(true);
    try {
      let thumbnailUrl = "";
      if (form.thumbnail) thumbnailUrl = await uploadThumbnail(form.thumbnail);

      const { error } = await supabase.from("products").insert({
        name: form.name,
        slug: form.slug,
        description: form.description,
        short_description: form.short_description,
        thumbnail: thumbnailUrl,
        category_id: Number(form.category_id),
        is_featured: form.is_featured,
      });
      if (error) throw error;

      setForm(emptyForm);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Thêm sản phẩm thất bại.");
    } finally {
      setSaving(false);
    }
  };

  // ================= XOÁ =================
  const handleDelete = async (p) => {
    if (!confirm("Bạn có chắc muốn xoá sản phẩm này?")) return;

    const { error } = await supabase.from("products").delete().eq("id", p.id);
    if (error) {
      console.error(error);
      alert("Xoá thất bại.");
      return;
    }
    // Xoá luôn ảnh trong storage
    await removeStorageImage(p.thumbnail);
    fetchProducts();
  };

  // ================= MỞ MODAL SỬA =================
  const openEdit = (p) => {
    setEditId(p.id);
    setOldThumbnail(p.thumbnail || "");
    setEditForm({
      name: p.name || "",
      slug: p.slug || "",
      description: p.description || "",
      short_description: p.short_description || "",
      thumbnail: p.thumbnail || "", // chuỗi URL cũ
      category_id: p.category_id || "",
      is_featured: p.is_featured || false,
    });
    setEditOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditForm({ ...editForm, [name]: type === "checkbox" ? checked : value });
  };

  const handleEditNameChange = (e) => {
    const name = e.target.value;
    setEditForm({ ...editForm, name, slug: generateSlug(name) });
  };

  // ================= LƯU SỬA =================
  const handleUpdate = async () => {
    if (!editForm.name.trim() || !editForm.category_id) {
      alert("Vui lòng nhập tên và chọn danh mục.");
      return;
    }

    setSaving(true);
    try {
      let thumbnailUrl =
        typeof editForm.thumbnail === "string" ? editForm.thumbnail : "";

      // Nếu chọn ảnh mới (File) -> upload mới và xoá ảnh cũ
      if (editForm.thumbnail && typeof editForm.thumbnail !== "string") {
        thumbnailUrl = await uploadThumbnail(editForm.thumbnail);
        if (oldThumbnail) await removeStorageImage(oldThumbnail);
      }

      const { error } = await supabase
        .from("products")
        .update({
          name: editForm.name,
          slug: editForm.slug,
          description: editForm.description,
          short_description: editForm.short_description,
          thumbnail: thumbnailUrl,
          category_id: Number(editForm.category_id),
          is_featured: editForm.is_featured,
        })
        .eq("id", editId);
      if (error) throw error;

      setEditOpen(false);
      fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Cập nhật thất bại.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-linear-to-br from-lime-50 via-green-50 to-emerald-50/50">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8">
        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold uppercase text-gray-900">
            Quản lý sản phẩm
          </h2>
          <div className="w-24 h-1 bg-lime-600 mt-3 rounded-full"></div>
        </div>

        {/* ===== FORM THÊM ===== */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
          <h3 className="font-bold text-lg text-gray-900 mb-5 flex items-center gap-2">
            <Plus size={20} className="text-lime-600" />
            Thêm sản phẩm mới
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Tên sản phẩm
              </label>
              <input
                className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                placeholder="Nhập tên sản phẩm"
                value={form.name}
                onChange={handleAddNameChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Slug (tự tạo)
              </label>
              <input
                className="w-full border border-gray-200 px-4 py-2.5 rounded-xl bg-gray-50 text-gray-500 outline-none"
                value={form.slug}
                readOnly
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mô tả chi tiết
              </label>
              <textarea
                className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition min-h-20"
                name="description"
                placeholder="Mô tả chi tiết sản phẩm"
                value={form.description}
                onChange={handleAddChange}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Mô tả ngắn
              </label>
              <input
                className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                name="short_description"
                placeholder="Mô tả ngắn gọn"
                value={form.short_description}
                onChange={handleAddChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Danh mục
              </label>
              <select
                className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition bg-white"
                name="category_id"
                value={form.category_id}
                onChange={handleAddChange}
              >
                <option value="">-- Chọn danh mục --</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Ảnh sản phẩm
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  accept="image/*"
                  className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-lime-100 file:text-lime-700 file:font-medium hover:file:bg-lime-200 file:cursor-pointer"
                  onChange={(e) =>
                    setForm({ ...form, thumbnail: e.target.files[0] })
                  }
                />
                {form.thumbnail && (
                  <div className="relative shrink-0">
                    <img
                      src={URL.createObjectURL(form.thumbnail)}
                      className="w-14 h-14 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => setForm({ ...form, thumbnail: "" })}
                      className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                name="is_featured"
                checked={form.is_featured}
                onChange={handleAddChange}
                className="w-4 h-4 accent-lime-600"
              />
              Đánh dấu sản phẩm nổi bật
            </label>

            <button
              onClick={handleAdd}
              disabled={saving}
              className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-6 py-2.5 rounded-full shadow-lg shadow-lime-600/25 transition disabled:opacity-60"
            >
              {saving ? (
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              ) : (
                <Plus size={18} />
              )}
              {saving ? "Đang thêm..." : "Thêm sản phẩm"}
            </button>
          </div>
        </div>

        {/* THANH CÔNG CỤ */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <div className="relative flex-1 min-w-55 max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Tìm theo tên hoặc danh mục..."
              className="w-full border border-gray-200 pl-11 pr-4 py-2.5 rounded-full outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border border-gray-200 px-4 py-2.5 rounded-full outline-none focus:border-lime-500 transition bg-white text-sm"
          >
            <option value="">Tất cả danh mục</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* ===== TABLE ===== */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-600 text-sm">
                <tr>
                  <th className="p-4 font-semibold">Ảnh</th>
                  <th className="p-4 font-semibold">Tên</th>
                  <th className="p-4 font-semibold">Danh mục</th>
                  <th className="p-4 font-semibold text-center">Nổi bật</th>
                  <th className="p-4 font-semibold text-center">Hành động</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {loading ? (
                  <tr>
                    <td colSpan="5" className="p-8 text-center text-gray-400">
                      Đang tải dữ liệu...
                    </td>
                  </tr>
                ) : pageItems.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="py-12">
                      <div className="flex flex-col items-center justify-center text-gray-300">
                        <ImageOff size={40} className="mb-3" />
                        <p className="text-gray-500 font-medium">
                          {filterCategory || debouncedSearch
                            ? "Không tìm thấy sản phẩm phù hợp"
                            : "Chưa có sản phẩm nào"}
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  pageItems.map((p) => (
                    <tr key={p.id} className="hover:bg-lime-50/40 transition">
                      <td className="p-4">
                        {p.thumbnail ? (
                          <img
                            src={p.thumbnail}
                            alt={p.name}
                            className="w-14 h-14 object-cover rounded-xl border border-gray-100"
                          />
                        ) : (
                          <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-300">
                            <ImageOff size={20} />
                          </div>
                        )}
                      </td>
                      <td className="p-4 font-medium text-gray-800">
                        {p.name}
                      </td>
                      <td className="p-4 text-gray-600">
                        {p.categories?.name || "—"}
                      </td>
                      <td className="p-4 text-center">
                        {p.is_featured ? (
                          <Star
                            size={18}
                            className="text-amber-400 fill-amber-400 inline"
                          />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => openEdit(p)}
                            className="inline-flex items-center gap-1.5 bg-lime-50 text-lime-700 hover:bg-lime-600 hover:text-white px-3 py-1.5 rounded-lg transition text-sm"
                          >
                            <Pencil size={15} />
                            Sửa
                          </button>
                          <button
                            onClick={() => handleDelete(p)}
                            className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg transition text-sm"
                          >
                            <Trash2 size={15} />
                            Xoá
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* PHÂN TRANG */}
          {!loading && filteredProducts.length > 0 && (
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 text-sm text-gray-500">
              <span>
                Hiển thị {(page - 1) * PAGE_SIZE + 1}–
                {Math.min(page * PAGE_SIZE, filteredProducts.length)} trên{" "}
                {filteredProducts.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                      page === i + 1
                        ? "bg-lime-600 text-white"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== MODAL SỬA ===== */}
      {editOpen && (
        <div
          onClick={() => setEditOpen(false)}
          className="fixed inset-0 z-9999 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                <Pencil size={20} className="text-lime-600" />
                Sửa sản phẩm
              </h3>
              <button
                onClick={() => setEditOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Tên sản phẩm
                </label>
                <input
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                  value={editForm.name}
                  onChange={handleEditNameChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Slug
                </label>
                <input
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl bg-gray-50 text-gray-500 outline-none"
                  value={editForm.slug}
                  readOnly
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Mô tả chi tiết
                </label>
                <textarea
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition min-h-20"
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Mô tả ngắn
                </label>
                <input
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                  name="short_description"
                  value={editForm.short_description}
                  onChange={handleEditChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Danh mục
                </label>
                <select
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition bg-white"
                  name="category_id"
                  value={editForm.category_id}
                  onChange={handleEditChange}
                >
                  <option value="">-- Chọn danh mục --</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Ảnh sản phẩm
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-lime-100 file:text-lime-700 file:font-medium hover:file:bg-lime-200 file:cursor-pointer"
                    onChange={(e) =>
                      setEditForm({ ...editForm, thumbnail: e.target.files[0] })
                    }
                  />
                  {editForm.thumbnail && (
                    <img
                      src={
                        typeof editForm.thumbnail === "string"
                          ? editForm.thumbnail
                          : URL.createObjectURL(editForm.thumbnail)
                      }
                      className="w-14 h-14 object-cover rounded-lg border border-gray-200 shrink-0"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={editForm.is_featured}
                  onChange={handleEditChange}
                  className="w-4 h-4 accent-lime-600"
                />
                Đánh dấu sản phẩm nổi bật
              </label>

              <div className="flex gap-3">
                <button
                  onClick={() => setEditOpen(false)}
                  className="px-5 py-2.5 border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition"
                >
                  Huỷ
                </button>
                <button
                  onClick={handleUpdate}
                  disabled={saving}
                  className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-6 py-2.5 rounded-full shadow-lg shadow-lime-600/25 transition disabled:opacity-60"
                >
                  {saving ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Pencil size={18} />
                  )}
                  {saving ? "Đang lưu..." : "Cập nhật"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Editor from "../../components/Editor";
import { supabase } from "../../supabase";
import { Rocket, Eye, Trash2, Upload, ImageOff, Pencil, X } from "lucide-react";

const BUCKET = "uploads";

const emptyForm = {
  title: "",
  slug: "",
  content: "",
  thumbnail: "",
  category: "",
};

const generateSlug = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

// Lấy tên file trong bucket từ public URL để xoá
const getStoragePath = (url) => {
  if (!url || typeof url !== "string") return null;
  const marker = `/object/public/${BUCKET}/`;
  const idx = url.indexOf(marker);
  return idx === -1 ? null : url.slice(idx + marker.length);
};

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(emptyForm);

  // Modal sửa
  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);
  const [oldThumbnail, setOldThumbnail] = useState("");

  // ================= FETCH =================
  const fetchData = async () => {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    setPosts(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= UPLOAD / REMOVE ẢNH =================
  const uploadThumbnail = async (file) => {
    const cleanName = file.name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9.]/g, "-");
    const fileName = `${Date.now()}-${cleanName}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET)
      .upload(fileName, file);
    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from(BUCKET).getPublicUrl(fileName);
    return data.publicUrl;
  };

  const removeStorageImage = async (url) => {
    try {
      const path = getStoragePath(url);
      if (path) {
        const { error } = await supabase.storage.from(BUCKET).remove([path]);
        if (error) console.warn("Không xoá được ảnh:", error.message);
      }
    } catch (err) {
      console.warn("Lỗi xoá ảnh:", err);
    }
  };

  // ================= ADD =================
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setForm({ ...form, title, slug: generateSlug(title) });
  };

  const handleAdd = async () => {
    if (!form.title.trim()) {
      alert("Vui lòng nhập tiêu đề.");
      return;
    }

    setSaving(true);
    try {
      let thumbnailUrl = "";
      if (form.thumbnail && typeof form.thumbnail !== "string") {
        thumbnailUrl = await uploadThumbnail(form.thumbnail);
      }

      const { error } = await supabase.from("posts").insert({
        title: form.title,
        slug: form.slug,
        content: form.content,
        thumbnail: thumbnailUrl,
        category: form.category,
      });
      if (error) throw error;

      setForm(emptyForm);
      setPreview(false);
      fetchData();
    } catch (err) {
      console.error(err);
      alert("Đăng bài thất bại.");
    } finally {
      setSaving(false);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (p) => {
    if (!confirm("Bạn có chắc muốn xoá bài viết này?")) return;
    const { error } = await supabase.from("posts").delete().eq("id", p.id);
    if (error) {
      console.error(error);
      alert("Xoá thất bại.");
      return;
    }
    await removeStorageImage(p.thumbnail);
    fetchData();
  };

  // ================= MỞ MODAL SỬA =================
  const openEdit = (p) => {
    setEditId(p.id);
    setOldThumbnail(p.thumbnail || "");
    setEditForm({
      title: p.title || "",
      slug: p.slug || "",
      content: p.content || "",
      thumbnail: p.thumbnail || "",
      category: p.category || "",
    });
    setEditOpen(true);
  };

  const handleEditTitleChange = (e) => {
    const title = e.target.value;
    setEditForm({ ...editForm, title, slug: generateSlug(title) });
  };

  // ================= UPDATE =================
  const handleUpdate = async () => {
    if (!editForm.title.trim()) {
      alert("Vui lòng nhập tiêu đề.");
      return;
    }

    setSaving(true);
    try {
      let thumbnailUrl =
        typeof editForm.thumbnail === "string" ? editForm.thumbnail : "";

      if (editForm.thumbnail && typeof editForm.thumbnail !== "string") {
        thumbnailUrl = await uploadThumbnail(editForm.thumbnail);
        if (oldThumbnail) await removeStorageImage(oldThumbnail);
      }

      const { error } = await supabase
        .from("posts")
        .update({
          title: editForm.title,
          slug: editForm.slug,
          content: editForm.content,
          thumbnail: thumbnailUrl,
          category: editForm.category,
        })
        .eq("id", editId);
      if (error) throw error;

      setEditOpen(false);
      fetchData();
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
        <div>
          {/* TITLE */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold uppercase text-gray-900">
              Quản lý tin tức
            </h2>
            <div className="w-24 h-1 bg-lime-600 mt-3 rounded-full"></div>
          </div>

          {/* ===== FORM ĐĂNG ===== */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
            <h3 className="font-bold text-lg text-gray-900 mb-5 flex items-center gap-2">
              <Rocket size={20} className="text-lime-600" />
              Đăng bài viết mới
            </h3>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Tiêu đề
                </label>
                <input
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                  placeholder="Nhập tiêu đề bài viết"
                  value={form.title}
                  onChange={handleTitleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Danh mục
                  </label>
                  <input
                    className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                    placeholder="Ví dụ: Tin công ty"
                    value={form.category}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Ảnh thumbnail
                </label>
                <div className="border-2 border-dashed border-gray-200 p-6 rounded-2xl text-center hover:border-lime-400 transition">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    id="upload"
                    onChange={(e) =>
                      setForm({ ...form, thumbnail: e.target.files[0] })
                    }
                  />
                  <label
                    htmlFor="upload"
                    className="cursor-pointer inline-flex flex-col items-center text-gray-400"
                  >
                    <Upload size={28} className="mb-2 text-lime-500" />
                    <span className="text-sm">Bấm để chọn ảnh thumbnail</span>
                  </label>

                  {form.thumbnail && (
                    <img
                      src={
                        typeof form.thumbnail === "string"
                          ? form.thumbnail
                          : URL.createObjectURL(form.thumbnail)
                      }
                      alt="preview"
                      className="w-44 h-44 object-cover mx-auto mt-4 rounded-2xl shadow border border-gray-100"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Nội dung
                </label>
                <div className="border border-gray-200 rounded-2xl p-3">
                  <Editor
                    value={form.content}
                    onChange={(html) => setForm({ ...form, content: html })}
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={handleAdd}
                  disabled={saving}
                  className="flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-white px-6 py-2.5 rounded-full shadow-lg shadow-lime-600/25 transition disabled:opacity-60"
                >
                  {saving ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Rocket size={18} />
                  )}
                  {saving ? "Đang đăng..." : "Đăng bài"}
                </button>

                <button
                  onClick={() => setPreview(!preview)}
                  className="flex items-center gap-2 border border-gray-300 text-gray-600 hover:border-lime-500 hover:text-lime-600 px-6 py-2.5 rounded-full transition"
                >
                  <Eye size={18} />
                  {preview ? "Ẩn xem trước" : "Xem trước"}
                </button>
              </div>
            </div>
          </div>

          {/* ===== PREVIEW ===== */}
          {preview && (
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 mb-8">
              <span className="text-xs font-semibold text-lime-700 bg-lime-100 px-3 py-1 rounded-full uppercase">
                Xem trước
              </span>
              <h3 className="text-3xl font-bold mt-4 mb-3 text-gray-900">
                {form.title || "Tiêu đề bài viết"}
              </h3>
              {form.category && (
                <p className="text-sm text-gray-400 mb-4">{form.category}</p>
              )}
              {form.thumbnail && (
                <img
                  src={
                    typeof form.thumbnail === "string"
                      ? form.thumbnail
                      : URL.createObjectURL(form.thumbnail)
                  }
                  alt="preview"
                  className="w-full h-72 object-cover rounded-2xl mb-5"
                />
              )}
              <div
                dangerouslySetInnerHTML={{ __html: form.content }}
                className="prose max-w-none"
              />
            </div>
          )}

          {/* ===== LIST ===== */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-gray-900 mb-5">
              Danh sách bài viết
            </h3>

            {loading ? (
              <p className="text-gray-400 text-sm py-4">Đang tải dữ liệu...</p>
            ) : posts.length === 0 ? (
              <p className="text-gray-400 text-sm py-4">
                Chưa có bài viết nào.
              </p>
            ) : (
              <div className="space-y-3">
                {posts.map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-lime-50/50 transition border border-gray-100"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {p.thumbnail ? (
                        <img
                          src={p.thumbnail}
                          alt={p.title}
                          className="w-14 h-14 object-cover rounded-xl border border-gray-100 shrink-0"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-gray-300 shrink-0">
                          <ImageOff size={20} />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-800 line-clamp-1">
                          {p.title}
                        </p>
                        <p className="text-sm text-gray-500">{p.category}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
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
                  </div>
                ))}
              </div>
            )}
          </div>
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
                Sửa bài viết
              </h3>
              <button
                onClick={() => setEditOpen(false)}
                className="w-9 h-9 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Tiêu đề
                </label>
                <input
                  className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                  value={editForm.title}
                  onChange={handleEditTitleChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    Danh mục
                  </label>
                  <input
                    className="w-full border border-gray-200 px-4 py-2.5 rounded-xl outline-none focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 transition"
                    value={editForm.category}
                    onChange={(e) =>
                      setEditForm({ ...editForm, category: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Ảnh thumbnail
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

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Nội dung
                </label>
                <div className="border border-gray-200 rounded-2xl p-3">
                  <Editor
                    value={editForm.content}
                    onChange={(html) =>
                      setEditForm({ ...editForm, content: html })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
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
      )}
    </div>
  );
}

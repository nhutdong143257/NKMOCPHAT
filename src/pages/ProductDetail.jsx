import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../supabase";
import {
  Truck,
  Zap,
  ShieldCheck,
  X,
  ChevronLeft,
  ChevronRight,
  Upload,
  FileCheck,
  Printer,
  PackageCheck,
  Share2,
  Link2,
  Check,
} from "lucide-react";
import Reveal from "../components/Reveal";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false); // mở xem ảnh lớn
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const shareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  useEffect(() => {
    let active = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setActiveImage(0);

        const [productRes, productsRes] = await Promise.all([
          supabase
            .from("products")
            .select("*, categories(id, name)")
            .eq("slug", slug)
            .single(),
          supabase
            .from("products")
            .select("id, name, slug, thumbnail, category_id"),
        ]);

        if (productRes.error) throw productRes.error;
        if (productsRes.error) throw productsRes.error;

        if (!active) return;
        setProduct(productRes.data);
        setProducts(productsRes.data || []);
      } catch (err) {
        console.error(err);
        if (active) setProduct(null);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchData();
    return () => {
      active = false;
    };
  }, [slug]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products
      .filter(
        (p) => p.category_id === product.category_id && p.id !== product.id,
      )
      .slice(0, 4);
  }, [products, product]);

  const otherProducts = useMemo(() => {
    if (!product) return [];
    return [...products]
      .filter((p) => p.id !== product.id) // bỏ sản phẩm đang xem
      .sort(() => Math.random() - 0.5) // xáo trộn ngẫu nhiên
      .slice(0, 4);
  }, [products, product]);

  const images = useMemo(() => {
    if (!product) return [];
    return product.images?.length ? product.images : [product.thumbnail];
  }, [product]);

  // Đóng zoom bằng phím Esc + chuyển ảnh bằng phím mũi tên
  useEffect(() => {
    if (!zoomOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setZoomOpen(false);
      if (e.key === "ArrowRight")
        setActiveImage((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveImage((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomOpen, images.length]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gray-200 h-125 rounded-3xl"></div>
          <div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-40 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-24 text-center text-gray-500 text-lg">
        Không tìm thấy sản phẩm.
      </div>
    );
  }

  const goPrev = () =>
    setActiveImage((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setActiveImage((i) => (i + 1) % images.length);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* LEFT — GALLERY */}
            <div className="lg:sticky lg:top-6">
              {/* Ảnh chính: bấm vào để zoom */}
              <div
                onClick={() => setZoomOpen(true)}
                className="relative bg-gray-100 rounded-3xl overflow-hidden group cursor-zoom-in"
              >
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-137 object-cover transition duration-500 group-hover:scale-105"
                />
                {/* gợi ý zoom */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                  Bấm để phóng to
                </div>

                {/* mũi tên đổi ảnh (chỉ khi nhiều ảnh) */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
                      aria-label="Ảnh trước"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow flex items-center justify-center transition"
                      aria-label="Ảnh sau"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* THUMBNAILS */}
              {images.length > 1 && (
                <div className="flex gap-4 mt-5 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shrink-0 transition ${
                        activeImage === index
                          ? "border-lime-600 ring-2 ring-lime-600/30"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Ảnh ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — THÔNG TIN */}
            <div>
              {/* Nhãn danh mục */}
              {product.categories?.name && (
                <span className="inline-block text-xs font-semibold text-lime-700 bg-lime-100 px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                  {product.categories.name}
                </span>
              )}

              <h1 className="text-4xl font-bold leading-tight text-gray-900">
                {product.name}
              </h1>
              <div className="w-20 h-1 bg-lime-600 rounded-full mt-4"></div>

              <p className="text-gray-600 leading-8 text-[16px] mt-6">
                {product.description ||
                  "Sản phẩm chất lượng cao, thiết kế hiện đại và độ bền vượt trội. Được chế tác kỹ lưỡng để mang lại trải nghiệm tốt nhất."}
              </p>

              {/* CAM KẾT (dòng ngang gọn) */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8 pb-8 border-b-2 border-gray-300">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Zap size={18} className="text-lime-600" />
                  In nhanh, in gấp
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Truck size={18} className="text-lime-600" />
                  Miễn phí giao hàng
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <ShieldCheck size={18} className="text-lime-600" />
                  Kiểm tra kỹ trước in
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://zalo.me/0908409075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 transition shadow-sm"
                >
                  Liên hệ để được tư vấn & đặt in
                </a>
              </div>

              {/* CHIA SẺ */}
              <div className="flex items-center gap-3 mt-6 pb-8 border-b-2 border-gray-300">
                <span className="text-sm text-gray-500">Chia sẻ:</span>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 h-10 px-4 rounded-full border border-gray-200 text-sm text-gray-600 hover:bg-lime-50 hover:text-lime-600 hover:border-lime-200 transition"
                >
                  {copied ? <Check size={16} /> : <Link2 size={16} />}
                  {copied ? "Đã sao chép" : "Sao chép liên kết"}
                </button>
              </div>

              {/* MÔ TẢ CHI TIẾT (nếu có short_description) */}
              {product.short_description && (
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase">
                    Thông tin thêm về sản phẩm
                  </h3>
                  <p className="text-gray-600 leading-8 text-[15px] text-justify">
                    {product.short_description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* ===== QUY TRÌNH ĐẶT IN ===== */}
        <Reveal>
          <div className="mt-15 max-w-5xl mx-auto uppercase">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
              Quy trình đặt in
            </h2>
            <div className="w-20 h-1 bg-lime-600 rounded-full mx-auto mb-12"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Upload,
                  title: "Gửi file & yêu cầu",
                  desc: "Gửi file thiết kế cùng yêu cầu về số lượng, chất liệu, kích thước.",
                },
                {
                  icon: FileCheck,
                  title: "Báo giá & duyệt",
                  desc: "Kiểm tra file, tư vấn chỉnh sửa nếu cần và báo giá nhanh chóng.",
                },
                {
                  icon: Printer,
                  title: "Tiến hành in",
                  desc: "In sắc nét, đúng tiến độ với hệ thống máy in hiện đại.",
                },
                {
                  icon: PackageCheck,
                  title: "Giao hàng",
                  desc: "Đóng gói cẩn thận và giao tận nơi đúng hẹn.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-lime-200 transition"
                >
                  <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-lime-600 text-white text-sm font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </span>
                  <step.icon className="text-lime-600 mb-4" size={30} />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ===== FAQ ===== */}
        <Reveal>
          <div className="mt-15 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
              Câu hỏi thường gặp
            </h2>
            <div className="w-20 h-1 bg-lime-600 rounded-full mx-auto mb-12"></div>

            <div className="space-y-3">
              {[
                {
                  q: "In nhanh mất bao lâu?",
                  a: "Tùy số lượng và chất liệu, đơn in nhanh có thể hoàn thành trong vài giờ đến 1 ngày. Vui lòng liên hệ để được báo thời gian cụ thể.",
                },
                {
                  q: "Cần chuẩn bị file như thế nào?",
                  a: "File nên ở định dạng PDF, AI hoặc ảnh độ phân giải cao (300 DPI). Nếu chưa có file, đội ngũ có thể hỗ trợ thiết kế.",
                },
                {
                  q: "Có giao hàng tận nơi không?",
                  a: "Có. Chúng tôi hỗ trợ giao hàng tận nơi, miễn phí trong khu vực nội thành và các khu vực hỗ trợ.",
                },
                {
                  q: "Có nhận in số lượng ít không?",
                  a: "Có. Chúng tôi nhận cả đơn lẻ và đơn số lượng lớn, phù hợp nhiều nhu cầu khác nhau.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group border border-gray-100 rounded-2xl px-5 py-4 hover:border-lime-200 transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-800 list-none uppercase">
                    {item.q}
                    <ChevronRight
                      size={20}
                      className="text-lime-600 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ===== SẢN PHẨM KHÁC ===== */}
        {otherProducts.length > 0 && (
          <Reveal>
            <div className="mt-15">
              <div className="mt-15 max-w-5xl mx-auto uppercase">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">
                  Các sản phẩm khác
                </h2>
                <div className="w-20 h-1 bg-lime-600 rounded-full mx-auto mb-12"></div>

                <button
                  onClick={() => navigate("/san-pham")}
                  className="text-sm font-medium hover:underline hover:text-lime-600 transition"
                >
                  Xem tất cả
                </button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/san-pham/${item.slug}`)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gray-100 rounded-3xl overflow-hidden mb-4">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-lime-600 transition">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Sản phẩm liên quan
              </h2>
              <button
                onClick={() => navigate("/san-pham")}
                className="text-sm font-medium hover:underline hover:text-lime-600 transition"
              >
                Xem tất cả
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/san-pham/${item.slug}`)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gray-100 rounded-3xl overflow-hidden mb-4">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-lime-600 transition">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== LIGHTBOX ZOOM ẢNH ===== */}
      {zoomOpen && (
        <div
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-9999 bg-black/90 flex items-center justify-center p-4"
        >
          {/* Nút đóng */}
          <button
            onClick={() => setZoomOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>

          {/* Ảnh lớn */}
          <img
            src={images[activeImage]}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />

          {/* Điều hướng khi nhiều ảnh */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                aria-label="Ảnh trước"
              >
                <ChevronLeft size={26} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                aria-label="Ảnh sau"
              >
                <ChevronRight size={26} />
              </button>

              {/* Đếm số ảnh */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm bg-white/10 px-3 py-1 rounded-full">
                {activeImage + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetail;

import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "../supabase";
import {
  Truck,
  Zap,
  ShieldCheck,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevR,
  Upload,
  FileCheck,
  Printer,
  PackageCheck,
  Link2,
  Check,
  Phone,
} from "lucide-react";
import Reveal from "../components/Reveal";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
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
      .filter((p) => p.id !== product.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);
  }, [products, product]);

  const images = useMemo(() => {
    if (!product) return [];
    return product.images?.length ? product.images : [product.thumbnail];
  }, [product]);

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
          <div className="bg-gray-200 h-125 rounded-sm"></div>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* BREADCRUMB */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 flex-wrap">
          <Link to="/" className="hover:text-lime-700 transition">
            Trang chủ
          </Link>
          <ChevR size={14} />
          <Link to="/san-pham" className="hover:text-lime-700 transition">
            Sản phẩm
          </Link>
          {product.categories?.name && (
            <>
              <ChevR size={14} />
              <span className="text-gray-500">{product.categories.name}</span>
            </>
          )}
          <ChevR size={14} />
          <span className="text-gray-700 font-medium line-clamp-1">
            {product.name}
          </span>
        </nav>

        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* LEFT — GALLERY */}
            <div className="lg:sticky lg:top-6">
              <div
                onClick={() => setZoomOpen(true)}
                className="relative bg-gray-50 rounded-sm overflow-hidden group cursor-zoom-in border border-gray-200"
              >
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-72 sm:h-96 lg:h-137 object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-3 py-1.5 rounded-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition tracking-wide">
                  Bấm để phóng to
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                      }}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition"
                      aria-label="Ảnh trước"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center transition"
                      aria-label="Ảnh sau"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-sm overflow-hidden border shrink-0 transition ${
                        activeImage === index
                          ? "border-lime-600 ring-1 ring-lime-600/40"
                          : "border-gray-200 hover:border-gray-400"
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
              {product.categories?.name && (
                <span className="inline-block text-xs font-semibold text-lime-700 tracking-[0.15em] uppercase mb-4">
                  {product.categories.name}
                </span>
              )}

              <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold leading-tight text-gray-900 tracking-tight">
                {product.name}
              </h1>
              <div className="w-16 h-0.5 bg-lime-600 mt-5"></div>

              <p className="text-gray-600 leading-8 text-[15px] mt-6">
                {product.description ||
                  "Sản phẩm chất lượng cao, thiết kế hiện đại và độ bền vượt trội. Được chế tác kỹ lưỡng để mang lại trải nghiệm tốt nhất."}
              </p>

              {/* CAM KẾT */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Zap size={17} className="text-lime-600 shrink-0" />
                  In nhanh, in gấp
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Truck size={17} className="text-lime-600 shrink-0" />
                  Miễn phí giao hàng
                </div>
                <div className="flex items-center gap-2.5 text-sm text-gray-700">
                  <ShieldCheck size={17} className="text-lime-600 shrink-0" />
                  Kiểm tra kỹ trước in
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://zalo.me/0908409075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 bg-lime-700 text-white font-semibold rounded-sm hover:bg-lime-800 transition tracking-wide"
                >
                  Liên hệ tư vấn & đặt in
                </a>
                <a
                  href="tel:0942574386"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-gray-300 text-gray-800 font-semibold rounded-sm hover:border-lime-600 hover:text-lime-700 transition"
                >
                  <Phone size={18} />
                  Gọi ngay
                </a>
              </div>

              {/* CHIA SẺ */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
                <span className="text-sm text-gray-500">Chia sẻ:</span>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 h-9 px-4 rounded-sm border border-gray-200 text-sm text-gray-600 hover:bg-lime-50 hover:text-lime-700 hover:border-lime-200 transition"
                >
                  {copied ? <Check size={16} /> : <Link2 size={16} />}
                  {copied ? "Đã sao chép" : "Sao chép liên kết"}
                </button>
              </div>

              {/* THÔNG TIN THÊM */}
              {product.short_description && (
                <div className="mt-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-3 tracking-widest uppercase">
                    Thông tin thêm
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
          <div className="mt-20 sm:mt-28 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-lime-700 tracking-[0.2em] uppercase">
                Qui trình làm việc
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 tracking-tight uppercase">
                Đặt in trong 4 bước
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-lime-200 transition"
                >
                  <span className="text-xs font-bold text-lime-700 tracking-widest">
                    0{i + 1}
                  </span>
                  <step.icon className="text-lime-600 my-4" size={26} />
                  <h3 className="font-semibold text-gray-900 mb-2 text-[15px]">
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
          <div className="mt-20 sm:mt-28 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold text-lime-700 tracking-[0.2em] uppercase">
                Giải đáp
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 tracking-tight uppercase">
                Câu hỏi thường gặp
              </h2>
            </div>

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
                  className="group bg-white border border-gray-100 rounded-2xl px-6 py-4 hover:border-lime-200 transition"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-800 list-none text-[15px]">
                    {item.q}
                    <ChevR
                      size={18}
                      className="text-lime-600 transition-transform group-open:rotate-90 shrink-0 ml-4"
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
            <div className="mt-20 sm:mt-28">
              <div className="flex items-end justify-between mb-8 border-b border-gray-200 pb-4">
                <div>
                  <span className="text-xs font-semibold text-lime-700 tracking-[0.2em] uppercase">
                    Khám phá thêm
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 tracking-tight">
                    Sản phẩm khác
                  </h2>
                </div>
                <button
                  onClick={() => navigate("/san-pham")}
                  className="text-sm font-medium text-gray-600 hover:text-lime-700 transition shrink-0"
                >
                  Xem tất cả
                </button>
              </div>

              <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 scrollbar-none [-ms-overflow-style:none]">
                {otherProducts.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/san-pham/${item.slug}`)}
                    className="group cursor-pointer snap-start shrink-0 w-[70%] sm:w-auto"
                  >
                    <div className="bg-gray-50 rounded-sm overflow-hidden mb-4 border border-gray-200">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-semibold text-[15px] line-clamp-2 text-gray-800 group-hover:text-lime-700 transition">
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
          <div className="mt-20 sm:mt-28">
            <div className="flex items-end justify-between mb-8 border-b border-gray-200 pb-4">
              <div>
                <span className="text-xs font-semibold text-lime-700 tracking-[0.2em] uppercase">
                  Cùng danh mục
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 tracking-tight">
                  Sản phẩm liên quan
                </h2>
              </div>
              <button
                onClick={() => navigate("/san-pham")}
                className="text-sm font-medium text-gray-600 hover:text-lime-700 transition shrink-0"
              >
                Xem tất cả
              </button>
            </div>

            <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-visible sm:mx-0 sm:px-0 sm:pb-0 scrollbar-none [-ms-overflow-style:none]">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/san-pham/${item.slug}`)}
                  className="group cursor-pointer snap-start shrink-0 w-[70%] sm:w-auto"
                >
                  <div className="bg-gray-50 rounded-sm overflow-hidden mb-4 border border-gray-200">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-[15px] line-clamp-2 text-gray-800 group-hover:text-lime-700 transition">
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
          <button
            onClick={() => setZoomOpen(false)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
            aria-label="Đóng"
          >
            <X size={24} />
          </button>

          <img
            src={images[activeImage]}
            alt={product.name}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
          />

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

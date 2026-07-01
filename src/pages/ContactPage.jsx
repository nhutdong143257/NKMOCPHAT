import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import Reveal from "../components/Reveal";

const HexItem = ({ c }) => {
  const inner = (
    <div className="hexagon w-36 h-40 sm:w-44 sm:h-48 bg-linear-to-br from-lime-400 to-lime-700 flex items-center justify-center p-2 transition-all duration-300 group-hover:scale-105 group-hover:z-10 relative">
      <div className="hexagon w-full h-full bg-white flex flex-col items-center justify-center text-center px-3 group-hover:bg-lime-50/60 transition-colors">
        <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center mb-1.5 group-hover:bg-lime-600 transition-colors">
          <c.icon
            className="text-lime-600 group-hover:text-white transition-colors"
            size={18}
          />
        </div>
        <span className="text-[10px] font-semibold text-lime-700 uppercase tracking-wide">
          {c.label}
        </span>
        <span className="text-xs font-medium text-gray-800 mt-0.5 leading-snug line-clamp-2">
          {c.value}
        </span>
      </div>
    </div>
  );

  return c.href ? (
    <a
      href={c.href}
      target={c.href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group block"
    >
      {inner}
    </a>
  ) : (
    <div className="group">{inner}</div>
  );
};

const ContactPage = () => {
  const address = "86/25E Ông Ích Khiêm, Phường Hoà Bình, TP.HCM";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;

  const contacts = [
    {
      icon: Phone,
      label: "Điện thoại",
      value: "0942 574 386",
      href: "tel:0942574386",
    },
    {
      icon: Mail,
      label: "Email",
      value: "Gửi email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=tranphung.qnco@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "Zalo",
      value: "Chat ngay",
      href: "https://zalo.me/0908409075",
    },
    { icon: MapPin, label: "Địa chỉ", value: "P. Hoà Bình, TP.HCM" },
    { icon: Clock, label: "Giờ làm", value: "T2–T7: 8h–17h" },
  ];

  // cột ngoài: 2 ô (Địa chỉ, Giờ làm) — cột trong: 3 ô (ĐT, Email, Zalo)
  const outer = [contacts[3], contacts[4]];
  const inner = [contacts[0], contacts[1], contacts[2]];

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Đốm nền trang trí */}
      <div className="absolute -top-32 -right-24 w-96 h-96 bg-lime-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-lime-100/40 rounded-full blur-3xl pointer-events-none" />

      <style>{`
        .hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* TITLE */}
        <Reveal>
          <div className="relative text-center max-w-4xl mx-auto mb-24 ">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-80 h-80 bg-linear-to-b from-lime-50 via-white to-gray-50 rounded-full -z-10"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lime-100 border border-lime-200 text-lime-700 text-xs font-bold uppercase tracking-[0.2em]">
              Luôn sẵn sàng hỗ trợ
            </div>

            {/* Title */}
            <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tight leading-tight">
              Chúng tôi luôn sẵn sàng <br />
              <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                đồng hành cùng bạn
              </span>
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
              Đội ngũ của chúng tôi luôn sẵn sàng tư vấn, báo giá và hỗ trợ bạn
              lựa chọn giải pháp in ấn phù hợp nhất.
              <span className="block mt-2 text-sm text-gray-500">
                Phản hồi nhanh chỉ trong khoảng 5 phút.
              </span>
            </p>

            {/* Divider */}
            <div className="flex justify-center mt-10">
              <div className="w-32 h-1 rounded-full bg-linear-to-r from-lime-500 via-green-500 to-emerald-500"></div>
            </div>
          </div>
        </Reveal>

        {/* GRID: hexagon trái + bản đồ phải */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== HEXAGON TỔ ONG (2 cột xen kẽ, đứng) ===== */}
          <Reveal>
            <div className="flex justify-center items-center">
              {/* CỘT NGOÀI: 2 ô */}
              <div className="flex flex-col gap-10">
                {outer.map((c, i) => (
                  <HexItem key={i} c={c} />
                ))}
              </div>
              {/* CỘT TRONG: 3 ô, thụt sang trái cho khít + lệch nửa ô lên */}
              <div className="flex flex-col gap-5 ml-11 sm:ml-12 -mt-18 sm:-mt-20">
                {inner.map((c, i) => (
                  <HexItem key={i} c={c} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* ===== BẢN ĐỒ ===== */}
          <div className="relative">
            <Reveal>
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl h-96 lg:h-150">
                <iframe
                  title="Bản đồ NK Mộc Phát"
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </Reveal>

            {/* Thẻ địa chỉ nổi trên bản đồ */}
            <Reveal>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-lime-100 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-lime-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">
                    NK Mộc Phát
                  </p>
                  <p className="text-xs text-gray-500 leading-snug">
                    {address}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto shrink-0 inline-flex items-center gap-1 text-xs font-medium text-lime-700 hover:text-lime-800 transition"
                >
                  <Navigation size={13} />
                  Chỉ đường
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* CTA cuối - 2 flip card */}
        <Reveal>
          <div className="mt-20 grid sm:grid-cols-2 gap-6">
            {/* ==================== ZALO ==================== */}
            <div
              className="flip-card w-full h-72 cursor-pointer"
              onClick={(e) => e.currentTarget.classList.toggle("flipped")}
            >
              <div className="flip-card-inner rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* ================= FRONT ================= */}
                <div className="flip-card-front relative rounded-3xl bg-linear-to-br from-emerald-50 via-green-50 to-lime-100 border border-emerald-200 overflow-hidden">
                  {/* Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-200/20 rounded-full blur-3xl" />

                  {/* Badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wide shadow-lg">
                      ⚡ Phản hồi ~5 phút
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center px-8 py-8 gap-4">
                    <div className="relative inline-flex p-2 w-16 h-16 rounded-lg bg-white items-center justify-center shadow-md">
                      <MessageCircle size={30} className="text-emerald-600" />
                      <span className="absolute inset-0 rounded-lg ring-4 ring-emerald-500/20"></span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Nhắn Zalo nhận báo giá ngay
                    </h3>

                    <p className="text-sm text-gray-600 leading-7 max-w-xs">
                      Gửi hình ảnh, file thiết kế hoặc yêu cầu in ấn. Chúng tôi
                      sẽ tư vấn phương án phù hợp và báo giá nhanh chóng hoàn
                      toàn miễn phí.
                    </p>

                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                      Đang trực tuyến
                    </div>
                  </div>
                </div>

                {/* ================= BACK ================= */}
                <div className="flip-card-back relative rounded-3xl bg-linear-to-br from-emerald-500 via-green-500 to-lime-500 text-white overflow-hidden">
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                  <div className="relative h-full flex flex-col items-center justify-center text-center px-8 py-8 gap-4">
                    <div className="inline-flex p-2 w-14 h-14 rounded-2xl bg-white items-center justify-center shadow-lg">
                      <MessageCircle size={28} className="text-emerald-600" />
                    </div>

                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-100">
                      ZALO HỖ TRỢ
                    </p>

                    <h2 className="text-4xl font-black leading-none">
                      0908 409 075
                    </h2>

                    <div className="space-y-2 text-sm text-emerald-50">
                      <p>✓ Báo giá trong vài phút</p>
                      <p>✓ Nhận file thiết kế 24/7</p>
                    </div>

                    <a
                      href="https://zalo.me/0908409075"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-emerald-700 shadow-lg transition hover:scale-105 hover:shadow-xl"
                    >
                      <MessageCircle size={18} />
                      Chat ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== HOTLINE ==================== */}
            <div
              className="flip-card w-full h-72 cursor-pointer"
              onClick={(e) => e.currentTarget.classList.toggle("flipped")}
            >
              <div className="flip-card-inner rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* ================= FRONT ================= */}
                <div className="flip-card-front relative rounded-3xl bg-linear-to-br from-orange-50 via-amber-50 to-yellow-100 border border-orange-200 overflow-hidden">
                  {/* Glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl" />

                  {/* Badge */}
                  <div className="absolute top-5 right-5 z-10">
                    <span className="px-3 py-1 rounded-full bg-orange-600 text-white text-[10px] font-bold uppercase tracking-wide shadow-lg">
                      🔥 Hỗ trợ tức thì
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center px-8 py-8 gap-4">
                    <div className="relative inline-flex p-2 w-16 h-16 rounded-2xl bg-white items-center justify-center shadow-md">
                      <Phone size={30} className="text-orange-600" />
                      <span className="absolute inset-0 rounded-2xl ring-4 ring-orange-500/20"></span>
                    </div>

                    <h3 className="text-2xl font-extrabold text-gray-900">
                      Cần gấp? Gọi ngay!
                    </h3>

                    <p className="text-sm text-gray-600 leading-7 max-w-xs">
                      Trao đổi trực tiếp với chuyên viên để được tư vấn về chất
                      liệu, kích thước, số lượng và thời gian hoàn thành đơn
                      hàng.
                    </p>

                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold text-orange-700">
                      ☎ Luôn sẵn sàng hỗ trợ
                    </div>
                  </div>
                </div>

                {/* ================= BACK ================= */}
                <div className="flip-card-back relative rounded-3xl bg-linear-to-br from-orange-500 via-amber-500 to-yellow-500 text-white overflow-hidden">
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

                  <div className="relative h-full flex flex-col items-center justify-center text-center px-8 py-8 gap-4">
                    <div className="inline-flex p-2 w-14 h-14 rounded-2xl bg-white items-center justify-center shadow-lg">
                      <Phone size={28} className="text-orange-600" />
                    </div>

                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-orange-100">
                      HOTLINE
                    </p>

                    <h2 className="text-4xl font-black leading-none">
                      0942 574 386
                    </h2>

                    <div className="space-y-2 text-sm text-orange-50">
                      <p>✓ Tư vấn trực tiếp</p>
                      <p>✓ Báo giá tức thì</p>
                    </div>

                    <a
                      href="tel:0942574386"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-orange-700 shadow-lg transition hover:scale-105 hover:shadow-xl"
                    >
                      <Phone size={18} />
                      Gọi ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactPage;

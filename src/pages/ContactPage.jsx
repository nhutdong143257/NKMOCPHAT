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

        {/* CTA cuối - 2 card */}
        <Reveal>
          <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
            {/* ZALO */}
            <div className="rounded-2xl border border-gray-200 p-5 sm:p-8 text-center flex flex-col items-center gap-2 sm:gap-3">
              <MessageCircle
                size={24}
                className="text-emerald-500 sm:w-7 sm:h-7"
              />
              <h3 className="text-base sm:text-xl font-bold text-gray-800">
                Nhắn Zalo nhận báo giá
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Phản hồi nhanh trong 5 phút
              </p>
              <a
                href="https://zalo.me/0908409075"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 sm:mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-emerald-600 transition"
              >
                <MessageCircle size={16} />
                Chat ngay
              </a>
            </div>

            {/* HOTLINE */}
            <div className="rounded-2xl border border-gray-200 p-5 sm:p-8 text-center flex flex-col items-center gap-2 sm:gap-3">
              <Phone size={24} className="text-orange-500 sm:w-7 sm:h-7" />
              <h3 className="text-base sm:text-xl font-bold text-gray-800">
                Cần gấp? Gọi ngay
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                Hỗ trợ tư vấn trực tiếp
              </p>
              <a
                href="tel:0942574386"
                className="mt-1 sm:mt-2 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-orange-600 transition"
              >
                <Phone size={16} />
                Gọi ngay
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default ContactPage;

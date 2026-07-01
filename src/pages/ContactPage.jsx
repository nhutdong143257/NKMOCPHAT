import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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
      value: "tranphung.qnco@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=tranphung.qnco@gmail.com",
      short: "Gửi email",
    },
    {
      icon: MessageCircle,
      label: "Zalo",
      value: "Chat Zalo",
      href: "https://zalo.me/0908409075",
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "86/25E Ông Ích Khiêm, P. Hoà Bình, TP.HCM",
      short: "Xem bản đồ",
    },
    {
      icon: Clock,
      label: "Giờ làm việc",
      value: "T2–T7: 8h–17h",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <style>{`
        .hexagon {
          clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* TITLE */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-lime-700 tracking-[0.2em] uppercase">
            Kết nối với chúng tôi
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 uppercase mt-2">
            Liên hệ
          </h1>
          <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
            Mọi thắc mắc về in ấn, báo giá hay đặt hàng, hãy liên hệ với NK Mộc
            Phát — chúng tôi luôn sẵn sàng hỗ trợ bạn.
          </p>
          <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* GRID: hexagon trái + bản đồ phải */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* ===== HEXAGON TỔ ONG ===== */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-6">
            {contacts.map((c, i) => {
              const inner = (
                <div className="hexagon w-40 h-44 sm:w-48 sm:h-52 bg-linear-to-br from-lime-500 to-lime-700 flex items-center justify-center p-1 transition-transform duration-300 hover:scale-105">
                  <div className="hexagon w-full h-full bg-white flex flex-col items-center justify-center text-center px-4">
                    <c.icon className="text-lime-600 mb-2" size={26} />
                    <span className="text-xs font-semibold text-lime-700 uppercase tracking-wide">
                      {c.label}
                    </span>
                    <span className="text-[13px] text-gray-700 mt-1 leading-snug line-clamp-2">
                      {c.value}
                    </span>
                  </div>
                </div>
              );

              // Đẩy so le hàng dưới cho giống tổ ong
              const stagger = i >= 3 ? "sm:-mt-8" : "";

              return c.href ? (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`block ${stagger}`}
                >
                  {inner}
                </a>
              ) : (
                <div key={i} className={stagger}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* ===== BẢN ĐỒ HÌNH CHỮ NHẬT ĐỨNG ===== */}
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-lg h-96 lg:h-128">
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
        </div>

        {/* CTA cuối */}
        <div className="text-center mt-14">
          <p className="text-gray-600 mb-5">
            Cần tư vấn nhanh? Nhắn Zalo để được hỗ trợ ngay.
          </p>
          <a
            href="https://zalo.me/0908409075"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 transition shadow-lg shadow-lime-600/25 hover:-translate-y-0.5 duration-200"
          >
            <MessageCircle size={18} />
            Liên hệ qua Zalo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

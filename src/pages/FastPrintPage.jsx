import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  Zap,
  FileCheck,
  Upload,
  Printer,
  PackageCheck,
  Clock,
  Award,
  Users,
} from "lucide-react";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";

const FastPrintPage = () => {
  const [showQR, setShowQR] = useState(false);

  const features = [
    {
      icon: Zap,
      title: "In nhanh, in gấp",
      desc: "Hỗ trợ xử lý và in ấn trong thời gian cực nhanh, phù hợp cho các đơn hàng gấp như sự kiện, hội thảo, khai trương hoặc chiến dịch marketing. Cam kết đảm bảo tiến độ nhưng vẫn giữ chất lượng in sắc nét, rõ ràng và ổn định.",
    },
    {
      icon: Truck,
      title: "Giao hàng nhanh",
      desc: "Hỗ trợ giao hàng tận nơi trên toàn khu vực, đảm bảo đóng gói cẩn thận, vận chuyển an toàn và đúng thời gian cam kết. Khách hàng có thể yên tâm nhận sản phẩm mà không cần lo lắng về tiến độ giao nhận.",
    },
    {
      icon: FileCheck,
      title: "Kiểm tra kỹ lưỡng",
      desc: "Trước khi in, đội ngũ kỹ thuật sẽ kiểm tra file thiết kế, nội dung và chất lượng hình ảnh để đảm bảo không xảy ra sai sót. Đồng thời hỗ trợ tư vấn chỉnh sửa nếu cần thiết để sản phẩm đạt chất lượng tốt nhất.",
    },
  ];

  const steps = [
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
  ];

  const stats = [
    {
      icon: Clock,
      value: 4,
      prefix: "2-",
      suffix: "h",
      label: "Thời gian in nhanh",
    },
    { icon: Users, value: 200, suffix: "+", label: "Khách hàng tin tưởng" },
    { icon: Award, value: 100, suffix: "%", label: "Cam kết chất lượng" },
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden bg-linear-to-b from-lime-50 to-gray-100">
        {/* đốm trang trí mờ */}
        <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-lime-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase">
              Dịch vụ <span className="text-lime-600">In Nhanh - In Gấp</span>
            </h1>
          </Reveal>

          <Reveal>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Chúng tôi cung cấp dịch vụ in ấn nhanh chóng, đáp ứng các đơn hàng
              gấp cho sự kiện, marketing và nhu cầu phát sinh. Cam kết chất
              lượng sắc nét, đúng tiến độ và hỗ trợ tận tâm.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => setShowQR(true)}
                className="px-7 py-3.5 bg-lime-600 font-semibold text-white rounded-full hover:bg-lime-700 transition shadow-lg shadow-lime-600/25 hover:shadow-lime-600/40 hover:-translate-y-0.5 duration-200"
              >
                Liên hệ ngay
              </button>

              <Link to="/san-pham">
                <button className="px-7 py-3.5 border font-semibold border-gray-800 rounded-full hover:border-lime-600 hover:text-lime-600 transition">
                  Xem sản phẩm
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* STATS */}
      <Reveal>
        <div className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center py-8 px-4">
                <s.icon className="text-lime-600 mb-3" size={28} />
                <span className="text-3xl font-bold text-gray-900">
                  <CountUp
                    end={s.value}
                    prefix={s.prefix || ""}
                    suffix={s.suffix || ""}
                  />
                </span>
                <span className="text-sm text-gray-500 mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* FEATURES */}
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:border-lime-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-lime-100 flex items-center justify-center mb-5 group-hover:bg-lime-600 transition-colors">
                <f.icon
                  className="text-lime-600 group-hover:text-white transition-colors"
                  size={26}
                />
              </div>
              <h3 className="font-bold text-xl mb-3 uppercase text-gray-900">
                {f.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* QUY TRÌNH */}
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center uppercase">
            Quy trình đặt in
          </h2>
          <div className="w-20 h-1 bg-lime-600 rounded-full mx-auto mt-4 mb-12"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
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

      {/* CTA CUỐI */}
      <div className="bg-linear-to-r from-lime-50 to-lime-500/20 mb-5">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-gray-900">
              Cần in gấp? Chúng tôi luôn sẵn sàng hỗ trợ bạn
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dù bạn cần in nhanh trong vài giờ hay in số lượng lớn cho chiến
              dịch quan trọng, đội ngũ của chúng tôi luôn sẵn sàng tư vấn miễn
              phí, báo giá nhanh chóng và hỗ trợ xử lý đơn hàng một cách tối ưu
              nhất
            </p>
          </Reveal>

          <Reveal>
            <button
              onClick={() => setShowQR(true)}
              className="px-8 py-3.5 bg-white text-gray-900 font-semibold rounded-full hover:bg-lime-200 transition shadow-lg hover:-translate-y-0.5 duration-200"
            >
              Liên hệ tư vấn ngay
            </button>
          </Reveal>
        </div>
      </div>

      {/* POPUP QR ZALO */}
      {showQR && (
        <div
          onClick={() => setShowQR(false)}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 animate-[fadeIn_0.2s_ease-out]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-[popIn_0.25s_ease-out]"
          >
            {/* Nút đóng */}
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-gray-700 transition"
              aria-label="Đóng"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Kết bạn Zalo để được tư vấn
            </h3>
            <p className="text-sm text-gray-500 mb-5">
              Quét mã QR bên dưới để liên hệ nhanh
            </p>

            {/* Khung viền cho QR nổi bật */}
            <div className="inline-block p-3 rounded-2xl border-2 border-lime-100 bg-lime-50/50">
              <img
                src="/QRZalo.jpg"
                alt="Mã QR Zalo"
                className="w-56 h-56 object-contain mx-auto"
              />
            </div>

            <p className="text-sm text-gray-500 mt-5">
              Mở Zalo, bấm quét QR để kết bạn và nhắn tin
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FastPrintPage;

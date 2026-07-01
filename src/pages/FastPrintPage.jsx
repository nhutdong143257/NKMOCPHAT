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

  /* ================= FEATURES ================= */

  const features = [
    {
      icon: Zap,
      title: "In nhanh - In gấp",
      desc: "Đáp ứng các đơn hàng cần hoàn thành trong thời gian ngắn với chất lượng in sắc nét, màu sắc chính xác và tiến độ đúng cam kết.",
    },
    {
      icon: Truck,
      title: "Giao hàng tận nơi",
      desc: "Đóng gói cẩn thận và giao hàng nhanh chóng, giúp khách hàng nhận sản phẩm đúng hẹn mà không cần mất thời gian di chuyển.",
    },
    {
      icon: FileCheck,
      title: "Kiểm tra file miễn phí",
      desc: "Đội ngũ kỹ thuật kiểm tra file thiết kế trước khi in, hỗ trợ chỉnh sửa cơ bản nhằm hạn chế sai sót và đảm bảo thành phẩm đẹp nhất.",
    },
  ];

  /* ================= QUY TRÌNH ================= */

  const steps = [
    {
      icon: Upload,
      title: "Tiếp nhận yêu cầu",
      desc: "Tiếp nhận file thiết kế cùng các yêu cầu về số lượng, kích thước và chất liệu in.",
    },
    {
      icon: FileCheck,
      title: "Tư vấn & Báo giá",
      desc: "Kiểm tra file, tư vấn phương án phù hợp và gửi báo giá nhanh chóng.",
    },
    {
      icon: Printer,
      title: "Sản xuất",
      desc: "Tiến hành in bằng hệ thống máy hiện đại, đảm bảo chất lượng và tiến độ.",
    },
    {
      icon: PackageCheck,
      title: "Bàn giao sản phẩm",
      desc: "Kiểm tra thành phẩm, đóng gói cẩn thận và giao tận nơi theo đúng cam kết.",
    },
  ];

  /* ================= THỐNG KÊ ================= */

  const stats = [
    {
      icon: Clock,
      value: 4,
      prefix: "2-",
      suffix: "h",
      label: "Hoàn thành đơn gấp",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Khách hàng tin tưởng",
    },
    {
      icon: Award,
      value: 100,
      suffix: "%",
      label: "Cam kết chất lượng",
    },
  ];

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-b from-lime-50 via-white to-gray-50">
        {/* Background */}
        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-lime-200/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-105 h-105 rounded-full bg-green-100/40 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center rounded-full bg-lime-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
                Dịch vụ in nhanh chuyên nghiệp
              </span>
            </Reveal>

            <Reveal>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900 uppercase">
                In Nhanh - In Gấp
                <br />
                <span className="bg-linear-to-r from-lime-500 via-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Hoàn Thành Đúng Hẹn
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-8 text-gray-600">
                NK Mộc Phát cung cấp giải pháp in ấn nhanh cho doanh nghiệp và
                cá nhân. Từ danh thiếp, tờ rơi, brochure đến tem nhãn, decal...
                tất cả đều được sản xuất với chất lượng cao, báo giá minh bạch
                và giao đúng tiến độ.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => setShowQR(true)}
                  className="rounded-full bg-lime-600 px-8 py-4 text-white font-semibold shadow-xl shadow-lime-500/30 transition hover:-translate-y-1 hover:bg-lime-700"
                >
                  Nhận báo giá miễn phí
                </button>

                <Link to="/san-pham">
                  <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:border-lime-600 hover:text-lime-600 hover:shadow-lg">
                    Khám phá sản phẩm
                  </button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <Reveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
          <div className="grid sm:grid-cols-3 rounded-3xl border border-gray-100 bg-white shadow-2xl overflow-hidden">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center px-6 py-10 border-b sm:border-b-0 sm:border-r last:border-r-0 border-gray-100"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
                  <item.icon size={30} className="text-lime-600" />
                </div>

                <div className="text-4xl font-black text-gray-900">
                  <CountUp
                    end={item.value}
                    prefix={item.prefix || ""}
                    suffix={item.suffix || ""}
                  />
                </div>

                <p className="mt-2 text-center text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      {/* ================= FEATURES ================= */}

      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex rounded-full bg-lime-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-700">
                Vì sao chọn NK Mộc Phát
              </span>

              <h2 className="mt-5 text-3xl lg:text-4xl font-black text-gray-900">
                Giải pháp in ấn
                <span className="text-lime-600">
                  {" "}
                  nhanh chóng & chuyên nghiệp
                </span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Chúng tôi không chỉ mang đến những sản phẩm in chất lượng, mà
                còn đồng hành cùng khách hàng trong suốt quá trình từ tư vấn,
                kiểm tra file đến giao hàng tận nơi.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Reveal key={index}>
                <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-lime-200 hover:shadow-2xl">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-100/40 blur-2xl transition group-hover:scale-125"></div>

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100 transition group-hover:bg-lime-600">
                    <feature.icon
                      size={30}
                      className="text-lime-600 group-hover:text-white transition"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-gray-500 leading-7">{feature.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= QUY TRÌNH ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-700 border border-lime-100">
                Quy trình làm việc
              </span>

              <h2 className="mt-5 text-3xl lg:text-4xl font-black text-gray-900">
                Chỉ với
                <span className="text-lime-600"> 4 bước đơn giản</span>
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Quy trình được tối ưu giúp khách hàng tiết kiệm thời gian, dễ
                dàng theo dõi tiến độ và nhận sản phẩm đúng hẹn.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Reveal key={index}>
                <div className="relative rounded-3xl bg-white border border-gray-100 p-8 hover:shadow-xl hover:border-lime-200 transition">
                  <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-lime-600 text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-100">
                    <step.icon size={30} className="text-lime-600" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-gray-500 leading-7">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}

      <section className="relative overflow-hidden py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-lime-50 via-white to-gray-50"></div>

        <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-105 h-105 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center text-gray-900">
          <Reveal>
            <span className="inline-flex rounded-full bg-white/15 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]">
              Sẵn sàng bắt đầu?
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-black leading-tight">
              Hãy để NK Mộc Phát
              <br />
              đồng hành cùng bạn
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-lime-800">
              Từ tư vấn, báo giá đến hoàn thiện sản phẩm, đội ngũ của chúng tôi
              luôn sẵn sàng hỗ trợ nhanh chóng, tận tâm và chuyên nghiệp.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => setShowQR(true)}
                className="rounded-full bg-lime-700 px-8 py-4 font-bold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              >
                Nhận báo giá ngay
              </button>

              <button className="rounded-full border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:-translate-y-1 hover:shadow-2xl">
                Hotline: 0909 123 456
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= QR POPUP ================= */}

      {showQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowQR(false)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}

            <button
              onClick={() => setShowQR(false)}
              className="absolute right-5 top-5 h-10 w-10 rounded-full bg-gray-100 text-gray-600 transition hover:bg-red-500 hover:text-white"
            >
              ✕
            </button>

            <div className="text-center">
              <h3 className="mt-6 text-3xl font-black text-gray-900">
                Quét mã QR
              </h3>

              <p className="mt-3 text-gray-500 leading-7">
                Mở Zalo và quét mã QR bên dưới để nhận tư vấn, báo giá nhanh
                hoặc gửi file thiết kế.
              </p>

              <div className="mt-8 flex justify-center">
                <img
                  src="/QRZalo.jpg"
                  alt="QR Zalo"
                  className="h-64 w-64 rounded-2xl border border-gray-200 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FastPrintPage;

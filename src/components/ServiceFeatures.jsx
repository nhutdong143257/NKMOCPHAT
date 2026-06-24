import React from "react";

const features = [
  {
    icon: <img src="/icon/zap.png" alt="zap" className="w-9 h-9" />,
    title: "In nhanh, lấy liền",
    desc: "Đảm bảo tiến độ nhanh chóng, hỗ trợ in gấp trong ngày mà vẫn giữ chất lượng tốt nhất.",
  },
  {
    icon: <img src="/icon/money.png" alt="dollar" className="w-9 h-9" />,
    title: "Giá thành cạnh tranh",
    desc: "Tối ưu chi phí cho cá nhân và doanh nghiệp với nhiều gói in linh hoạt, phù hợp ngân sách.",
  },
  {
    icon: <img src="/icon/quality.png" alt="shield" className="w-9 h-9" />,
    title: "Chất lượng đảm bảo",
    desc: "Sử dụng công nghệ in hiện đại, màu sắc sắc nét, bền đẹp theo thời gian.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="mt-24">
      {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">
          Tại sao chọn chúng tôi
        </h2>

        <p className="text-gray-500 mt-4 leading-relaxed">
          Chúng tôi không chỉ cung cấp dịch vụ in ấn mà còn mang đến giải pháp
          toàn diện giúp bạn xây dựng hình ảnh chuyên nghiệp và nổi bật trên thị
          trường.
        </p>

        <div className="w-24 h-1 bg-lime-600 mx-auto mt-5 rounded-full"></div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {features.map((item, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-lime-200 hover:-translate-y-1.5 transition-all duration-300 text-center overflow-hidden"
          >
            {/* số thứ tự mờ trang trí */}
            <span className="absolute top-4 right-6 text-6xl font-bold text-gray-50 select-none pointer-events-none">
              0{index + 1}
            </span>

            {/* ICON */}
            <div className="relative flex justify-center mb-5">
              <div className="p-5 bg-lime-100 rounded-2xl group-hover:bg-lime-600 group-hover:scale-110 transition-all duration-300">
                <div className="group-hover:brightness-0 group-hover:invert transition">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* TITLE */}
            <h3 className="relative text-lg font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="relative text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* gạch chân lime trượt vào khi hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-lime-600 group-hover:w-2/3 transition-all duration-300 rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;

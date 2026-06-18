import React from "react";

const features = [
  {
    icon: <img src="/icon/zap.png" alt="zap" className="w-10 h-10" />,
    title: "In nhanh, lấy liền",
    desc: "Đảm bảo tiến độ nhanh chóng, hỗ trợ in gấp trong ngày mà vẫn giữ chất lượng tốt nhất.",
  },
  {
    icon: <img src="/icon/money.png" alt="dollar" className="w-10 h-10" />,
    title: "Giá thành cạnh tranh",
    desc: "Tối ưu chi phí cho cá nhân và doanh nghiệp với nhiều gói in linh hoạt, phù hợp ngân sách.",
  },
  {
    icon: <img src="/icon/quality.png" alt="shield" className="w-10 h-10" />,
    title: "Chất lượng đảm bảo",
    desc: "Sử dụng công nghệ in hiện đại, màu sắc sắc nét, bền đẹp theo thời gian.",
  },
];

const ServiceFeatures = () => {
  return (
    <section className="mt-24">
      {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          Tại sao chọn chúng tôi
        </h2>

        <p className="text-gray-500 mt-4">
          Chúng tôi không chỉ cung cấp dịch vụ in ấn mà còn mang đến giải pháp
          toàn diện giúp bạn xây dựng hình ảnh chuyên nghiệp và nổi bật trên thị
          trường
        </p>

        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {features.map((item, index) => (
          <div
            key={index}
            className="group p-8 bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 text-center"
          >
            {/* ICON */}
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-lime-100 rounded-full group-hover:scale-110 transition">
                {item.icon}
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;

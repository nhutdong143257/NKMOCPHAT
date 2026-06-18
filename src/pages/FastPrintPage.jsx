import React from "react";
import { Link } from "react-router-dom";
import { Truck, Zap, FileCheck, PhoneCall } from "lucide-react";

const FastPrintPage = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight uppercase">
          Dịch vụ <span className="text-lime-600">In Nhanh - In Gấp</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Chúng tôi cung cấp dịch vụ in ấn nhanh chóng, đáp ứng các đơn hàng gấp
          cho sự kiện, marketing và nhu cầu phát sinh. Cam kết chất lượng sắc
          nét, đúng tiến độ và hỗ trợ tận tâm.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 bg-lime-600 font-semibold text-white rounded-full hover:bg-lime-700 transition">
            Liên hệ ngay
          </button>

          <Link to="/san-pham">
            <button className="px-6 py-3 border font-semibold border-gray-800 rounded-full hover:border-lime-600 hover:text-lime-600 transition">
              Xem sản phẩm
            </button>
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        <div className="border rounded-2xl p-6 hover:shadow-lg transition">

          <h3 className="flex justify-center font-semibold text-xl mb-2 uppercase">In nhanh <span className="ml-1 text-lime-800">in gấp</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Hỗ trợ xử lý và in ấn trong thời gian cực nhanh, phù hợp cho các đơn
            hàng gấp như sự kiện, hội thảo, khai trương hoặc chiến dịch
            marketing. Cam kết đảm bảo tiến độ nhưng vẫn giữ chất lượng in sắc
            nét, rõ ràng và ổn định
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          
          <h3 className="flex justify-center font-semibold text-xl mb-2 uppercase">Giao hàng <span className="ml-1 text-lime-800">nhanh</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Hỗ trợ giao hàng tận nơi trên toàn khu vực, đảm bảo đóng gói cẩn
            thận, vận chuyển an toàn và đúng thời gian cam kết. Khách hàng có
            thể yên tâm nhận sản phẩm mà không cần lo lắng về tiến độ giao nhận
          </p>
        </div>

        <div className="border rounded-2xl p-6 hover:shadow-lg transition">
          
          <h3 className="flex justify-center font-semibold text-xl mb-2 uppercase">Kiểm tra <span className="ml-1 text-lime-800">kỹ lưỡng</span></h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Trước khi in, đội ngũ kỹ thuật sẽ kiểm tra file thiết kế, nội dung
            và chất lượng hình ảnh để đảm bảo không xảy ra sai sót. Đồng thời hỗ
            trợ tư vấn chỉnh sửa nếu cần thiết để sản phẩm đạt chất lượng tốt
            nhất
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Cần in gấp? Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </h2>

          <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dù bạn cần in nhanh trong vài giờ hay in số lượng lớn cho chiến dịch
            quan trọng, đội ngũ của chúng tôi luôn sẵn sàng tư vấn miễn phí, báo
            giá nhanh chóng và hỗ trợ xử lý đơn hàng một cách tối ưu nhất.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
            <PhoneCall size={18} />
            Gọi ngay để được tư vấn
          </button>
        </div>
      </div>
    </div>
  );
};

export default FastPrintPage;

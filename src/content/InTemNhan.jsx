import React from "react";
import temnhan from "../assets/image/service/temnhan.webp";

const InTemNhan = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Tem Nhãn: Giải Pháp Nhận Diện Sản Phẩm Chuyên Nghiệp
      </h2>

      {/* INTRO */}
      <p>
        In tem nhãn là yếu tố quan trọng giúp sản phẩm của bạn trở nên chuyên
        nghiệp và dễ nhận diện trên thị trường. Một chiếc tem nhãn được thiết kế
        đẹp mắt, thông tin rõ ràng sẽ giúp khách hàng nhanh chóng ghi nhớ thương
        hiệu của bạn.
      </p>

      <p>
        Không chỉ cung cấp thông tin sản phẩm, tem nhãn còn góp phần nâng cao
        giá trị và uy tín, tạo sự khác biệt so với các đối thủ cạnh tranh.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Tem Nhãn Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Nhận diện thương hiệu:</strong> Logo và thiết kế giúp khách
          hàng dễ nhớ sản phẩm.
        </li>
        <li>
          <strong>Cung cấp thông tin:</strong> Hiển thị thành phần, hướng dẫn sử
          dụng, nguồn gốc.
        </li>
        <li>
          <strong>Tăng độ tin cậy:</strong> Sản phẩm có tem nhãn rõ ràng tạo cảm
          giác chuyên nghiệp.
        </li>
        <li>
          <strong>Hỗ trợ bán hàng:</strong> Thu hút sự chú ý và thúc đẩy quyết
          định mua.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={temnhan}
        alt="In tem nhãn"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tem Nhãn Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in tem nhãn với nhiều chất liệu như decal
        giấy, decal nhựa, decal trong suốt, decal xi bạc… phù hợp với từng loại
        sản phẩm và môi trường sử dụng. Công nghệ in hiện đại giúp tem có độ bền
        cao, chống nước và không bong tróc.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Đa dạng chất liệu và kích thước</li>
        <li>Chống nước, chống trầy xước</li>
        <li>Thiết kế theo yêu cầu</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tem Nhãn
      </h3>

      <p>
        Tem nhãn được sử dụng rộng rãi trong các ngành như thực phẩm, mỹ phẩm,
        dược phẩm, thời trang và hàng tiêu dùng. Đây là công cụ không thể thiếu
        để giúp sản phẩm nổi bật và chuyên nghiệp hơn.
      </p>

      <p>
        Nếu bạn muốn nâng cao hình ảnh thương hiệu và gia tăng khả năng cạnh
        tranh, in tem nhãn chính là giải pháp hiệu quả.
      </p>
    </div>
  );
};

export default InTemNhan;
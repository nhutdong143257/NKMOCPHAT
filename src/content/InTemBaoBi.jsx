import React from "react";
import nhanbaobi from "../assets/image/service/nhanbaobi.jpg";

const InTemBaoBi = () => {
  return (
    <div className="space-y-4 leading-relaxed text-gray-700">
      {/* TITLE */}
      <h2 className="text-2xl font-bold text-lime-700 uppercase">
        In Tem Bao Bì: Giải Pháp Nhận Diện & Bảo Vệ Thương Hiệu Hiệu Quả
      </h2>

      {/* INTRO */}
      <p>
        In tem bao bì là bước quan trọng giúp sản phẩm trở nên chuyên nghiệp và
        đáng tin cậy hơn trong mắt khách hàng. Tem không chỉ cung cấp thông tin
        cần thiết mà còn là yếu tố nhận diện thương hiệu giúp sản phẩm nổi bật
        trên thị trường.
      </p>

      <p>
        Một mẫu tem được thiết kế đẹp, in sắc nét và bền màu sẽ góp phần nâng cao
        giá trị sản phẩm, đồng thời tạo sự khác biệt so với đối thủ cạnh tranh.
      </p>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Tại Sao Tem Bao Bì Quan Trọng?
      </h3>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Nhận diện thương hiệu:</strong> Logo và màu sắc giúp khách hàng
          ghi nhớ sản phẩm.
        </li>
        <li>
          <strong>Cung cấp thông tin:</strong> Hiển thị thành phần, hướng dẫn sử
          dụng, hạn sử dụng.
        </li>
        <li>
          <strong>Tăng tính chuyên nghiệp:</strong> Giúp sản phẩm trông chỉn chu
          và đáng tin hơn.
        </li>
        <li>
          <strong>Bảo vệ sản phẩm:</strong> Có thể tích hợp tem niêm phong hoặc
          chống giả.
        </li>
      </ul>

      {/* IMAGE */}
      <img
        src={nhanbaobi}
        alt="In tem bao bì"
        className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
      />

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Lợi Ích Khi In Tem Bao Bì Tại Chúng Tôi
      </h3>

      <p>
        Chúng tôi cung cấp dịch vụ in tem bao bì với nhiều chất liệu như decal
        giấy, decal nhựa, decal trong, decal xi bạc… phù hợp với từng loại sản
        phẩm và môi trường sử dụng. Công nghệ in hiện đại giúp tem có độ bền cao,
        chống nước và không bong tróc.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>In sắc nét, màu chuẩn</li>
        <li>Đa dạng chất liệu và kiểu dáng</li>
        <li>Thiết kế theo yêu cầu</li>
        <li>Chống nước, chống trầy xước</li>
      </ul>

      {/* SECTION */}
      <h3 className="text-2xl font-bold text-lime-700 mt-6 uppercase">
        Ứng Dụng Của Tem Bao Bì
      </h3>

      <p>
        Tem bao bì được sử dụng rộng rãi trong các ngành thực phẩm, mỹ phẩm,
        dược phẩm, điện tử và hàng tiêu dùng. Đây là giải pháp quan trọng giúp
        sản phẩm được nhận diện rõ ràng và tăng độ tin cậy với khách hàng.
      </p>

      <p>
        Nếu bạn muốn sản phẩm nổi bật và chuyên nghiệp hơn trên thị trường, in
        tem bao bì chính là lựa chọn không thể thiếu.
      </p>
    </div>
  );
};

export default InTemBaoBi;
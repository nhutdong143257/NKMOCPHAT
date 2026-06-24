import React, { useState } from "react";
import { serviceContentMap } from "../content";
import { ChevronDown } from "lucide-react";

const ServiceDescription = ({ slug }) => {
  const [expanded, setExpanded] = useState(false);

  const ContentComponent = serviceContentMap[slug];

  return (
    <div className="mt-20">
      {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-gray-900 uppercase">
          Mô tả chi tiết
        </h2>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="bg-linear-to-b from-gray-50 to-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
        {/* KHUNG NỘI DUNG (lớp mờ chỉ nằm trong đây) */}
        <div className="relative">
          <div
            className={`prose prose-gray max-w-none transition-all duration-500 ease-in-out overflow-hidden ${
              expanded ? "max-h-[5000px]" : "max-h-52"
            }`}
          >
            {ContentComponent ? (
              <ContentComponent />
            ) : (
              <p className="text-gray-500">Đang cập nhật nội dung...</p>
            )}
          </div>

          {/* Lớp mờ dần ở đáy khi đang thu gọn - phủ sát đáy phần text */}
          {!expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-gray-50 to-transparent pointer-events-none" />
          )}
        </div>

        {/* NÚT (tách riêng, nằm dưới phần text nên không bị lớp mờ che) */}
        <div className="text-center mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-lime-600 text-lime-600 font-medium rounded-full hover:bg-lime-600 hover:text-white transition group"
          >
            {expanded ? "Thu gọn" : "Xem thêm chi tiết"}
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;

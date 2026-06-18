import React, { useState } from "react";
import { serviceContentMap } from "../content";

const ServiceDescription = ({ slug }) => {
  const [expanded, setExpanded] = useState(false);

  const ContentComponent = serviceContentMap[slug];
  console.log("slug:", slug);

  return (
    <div className="mt-20">
      {/* TITLE */}

      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-3xl font-bold text-gray-800 uppercase">
          MÔ TẢ CHI TIẾT
        </h2>

        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg border">
        <div className={`${expanded ? "" : "max-h-48 overflow-hidden"}`}>
          {ContentComponent ? (
            <ContentComponent />
          ) : (
            <p>Đang cập nhật nội dung...</p>
          )}
        </div>

        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-2 border border-lime-600 text-lime-600 rounded-full hover:bg-lime-600 hover:text-white transition"
          >
            {expanded ? "Thu gọn" : "Xem thêm chi tiết"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;

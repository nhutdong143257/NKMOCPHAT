import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ChevronRight,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [productRes, productsRes] = await Promise.all([
          fetch(`http://localhost:5000/api/products/${id}`),
          fetch(`http://localhost:5000/api/products`),
        ]);

        const productData = await productRes.json();
        const productsData = await productsRes.json();

        setProduct(productData);
        setProducts(productsData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];

    return products
      .filter(
        (p) => p.category_id === product.category_id && p.id !== product.id,
      )
      .slice(0, 4);
  }, [products, product]);

  const images = useMemo(() => {
    if (!product) return [];

    return product.images?.length ? product.images : [product.thumbnail];
  }, [product]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 animate-pulse">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gray-200 h-125 rounded-3xl"></div>

          <div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-8 bg-gray-200 rounded w-40 mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-24 text-center text-gray-500 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT */}
          <div>
            <div className="bg-gray-100 rounded-3xl overflow-hidden group">
              <img
                src={images[activeImage]}
                alt={product.name}
                className="w-full h-137 object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-4 mt-5 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 shrink-0 transition ${
                    activeImage === index
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h1 className="text-4xl font-bold leading-tight text-lime-800 mb-3">
              {product.name}
            </h1>

            <div className="w-full h-1 bg-lime-600 mx-auto rounded-full"></div>

            <p className="text-gray-600 leading-8 text-[16px] mb-10 mt-3">
              {product.description ||
                "Premium quality product with modern design and excellent durability. Carefully crafted for the best user experience."}
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border rounded-2xl p-5">
                <Truck className="mb-3 mx-auto" size={30} />
                <h4 className="flex justify-center text-lg text-lime-700 font-semibold mb-1 uppercase">
                  In nhanh in gấp
                </h4>
                <p className="text-sm text-gray-500 text-justify leading-relaxed">
                  Hỗ trợ in ấn nhanh chóng trong thời gian ngắn, đáp ứng các đơn
                  hàng gấp cho sự kiện, chiến dịch marketing hoặc nhu cầu phát
                  sinh đột xuất. Đảm bảo tiến độ nhưng vẫn giữ chất lượng ổn
                  định và sắc nét.
                </p>
              </div>

              <div className="border rounded-2xl p-5">
                <Truck className="mb-3 mx-auto" size={30} />
                <h4 className="flex justify-center text-lg text-lime-700 font-semibold mb-1 uppercase">
                  Miễn phí giao hàng
                </h4>
                <p className="text-sm text-gray-500 text-justify leading-relaxed">
                  Hỗ trợ giao hàng tận nơi hoàn toàn miễn phí trong khu vực nội
                  thành và các khu vực hỗ trợ. Đảm bảo đóng gói cẩn thận, giao
                  đúng hẹn và an toàn đến tay khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Related Products
              </h2>

              <button
                onClick={() => navigate("/san-pham")}
                className="text-sm font-medium hover:underline"
              >
                View All
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/san-pham/${item.id}`)}
                  className="group cursor-pointer"
                >
                  <div className="bg-gray-100 rounded-3xl overflow-hidden mb-4">
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-lime-600 transition">
                    {item.name}
                  </h3>

                  <p className="font-bold text-lime-600 text-xl">
                    {Number(item.price).toLocaleString("vi-VN")}₫
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { supabase } from "../../supabase";

// export default function Dashboard() {
//   const [stats, setStats] = useState({
//     total_products: 0,
//     total_posts: 0,
//     total_users: 0,
//   });

//   const [loading, setLoading] = useState(true);

//   // ================= FETCH =================
//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/dashboard/stats");
//         const data = await res.json();
//         setStats(data);
//       } catch (err) {
//         console.error("Fetch stats error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />

//       <div className="flex-1 caret-transparent font-semibold text-gray-800">
//         <div className="p-6">
//           {/* TITLE */}
//           <div className="mb-6">
//             <h2 className="text-3xl uppercase text-gray-800">
//               Công ty TNHH NK Mộc Phát
//             </h2>
//             <div className="w-24 h-1 bg-lime-600 mt-3 rounded-full"></div>
//           </div>

//           {/* LOADING */}
//           {loading ? (
//             <p className="text-gray-500">Đang tải dữ liệu...</p>
//           ) : (
//             <div className="grid grid-cols-3 gap-6">
//               {/* PRODUCTS */}
//               <div className="bg-white border border-gray-800 p-5 rounded-xl shadow-sm">
//                 <p className="text-gray-500">Sản phẩm</p>
//                 <h3 className="text-3xl font-bold mt-2 text-lime-600">
//                   {stats.total_products}
//                 </h3>
//               </div>

//               {/* POSTS */}
//               <div className="bg-white border border-gray-800 p-5 rounded-xl shadow-sm">
//                 <p className="text-gray-500">Tin tức</p>
//                 <h3 className="text-3xl font-bold mt-2 text-blue-600">
//                   {stats.total_posts}
//                 </h3>
//               </div>

//               {/* USERS */}
//               <div className="bg-white border border-gray-800 p-5 rounded-xl shadow-sm">
//                 <p className="text-gray-500">Người dùng</p>
//                 <h3 className="text-3xl font-bold mt-2 text-purple-600">
//                   {stats.total_users}
//                 </h3>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }


export default function Dashboard() {
  const [stats, setStats] = useState({
    total_products: 0,
    total_posts: 0,
    total_users: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [
          { count: productsCount },
          { count: postsCount },
          { count: usersCount },
        ] = await Promise.all([
          supabase.from("products").select("*", { count: "exact", head: true }),

          supabase.from("posts").select("*", { count: "exact", head: true }),

          supabase.from("users").select("*", { count: "exact", head: true }),
        ]);

        setStats({
          total_products: productsCount || 0,
          total_posts: postsCount || 0,
          total_users: usersCount || 0,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);
}

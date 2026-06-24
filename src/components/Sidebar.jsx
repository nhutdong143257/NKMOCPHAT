import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Newspaper,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    const ok = confirm("Bạn có chắc muốn đăng xuất không?");
    if (!ok) return;

    localStorage.removeItem("token");
    localStorage.removeItem("admin"); // trang Login lưu key "admin"
    navigate("/admin/login");
  };

  const menu = [
    { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/products", label: "Sản phẩm", icon: Package },
    { to: "/admin/posts", label: "Tin tức", icon: Newspaper },
  ];

  return (
    <div className="w-64 h-screen sticky top-0 bg-white border-r border-gray-100 shadow-sm p-4 font-semibold caret-transparent flex flex-col">
      {/* LOGO */}
      <div className="mb-8 flex flex-col items-center text-center pt-2">
        <Link to="/admin/dashboard">
          <img
            className="w-32 brightness-125"
            src="/MocPhatLogo.png"
            alt="MocPhatLogo"
          />
        </Link>
        <div className="w-24 h-1 bg-lime-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {menu.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
                active
                  ? "bg-lime-600 text-white shadow-md shadow-lime-600/25"
                  : "text-gray-600 hover:bg-lime-50 hover:text-lime-700"
              }`}
            >
              <item.icon size={20} className="shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* LOGOUT */}
      <button
        onClick={handleLogout}
        className="mt-auto flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition"
      >
        <LogOut size={18} />
        Đăng xuất
      </button>
    </div>
  );
}
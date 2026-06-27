import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabase";
import { Mail, Lock, Eye, EyeOff, LogIn, ArrowLeft } from "lucide-react";

export default function Login() {
  const [form, setForm] = useState({});
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let err = {};
    if (!form.email?.trim()) err.email = "Nhập email";
    if (!form.password?.trim()) err.password = "Nhập mật khẩu";
    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    setLoading(true);

    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (authError) {
        setError({ general: "Sai email hoặc mật khẩu" });
        return;
      }

      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      setError({ general: "Đăng nhập thất bại" });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-lime-100 via-gray-100 to-lime-50 px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* LEFT */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-linear-to-br from-lime-600 to-lime-700 p-10 text-center">
          <img
            className="w-56 mb-6 drop-shadow-lg"
            src="/MocPhatLogo.png"
            alt="MocPhatLogo"
          />
          <h3 className="text-white text-xl font-bold uppercase">
            Trang quản trị
          </h3>
          <p className="text-lime-50 text-sm mt-2 leading-relaxed">
            Hệ thống quản lý nội dung Công ty TNHH NK Mộc Phát
          </p>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 flex flex-col justify-center px-8 sm:px-12 py-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center uppercase">
            Đăng <span className="text-lime-700">nhập</span>
          </h2>
          <p className="text-sm text-gray-400 text-center mb-8">
            Vui lòng nhập thông tin để tiếp tục
          </p>

          {/* EMAIL */}
          <div className="mb-1">
            <div className="flex items-center gap-3 px-4 h-12 rounded-full bg-gray-100 border-2 border-transparent focus-within:border-lime-500 focus-within:bg-white transition">
              <Mail size={18} className="text-gray-400 shrink-0" />
              <input
                type="email"
                placeholder="Email..."
                value={form.email || ""}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-sm text-gray-700"
              />
            </div>
            {error.email && (
              <p className="text-red-500 text-xs mt-1 ml-4">{error.email}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div className="mt-4 mb-1">
            <div className="flex items-center gap-3 px-4 h-12 rounded-full bg-gray-100 border-2 border-transparent focus-within:border-lime-500 focus-within:bg-white transition">
              <Lock size={18} className="text-gray-400 shrink-0" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Mật khẩu..."
                value={form.password || ""}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent outline-none text-sm text-gray-700"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="text-gray-400 hover:text-gray-600 shrink-0"
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {error.password && (
              <p className="text-red-500 text-xs mt-1 ml-4">{error.password}</p>
            )}
          </div>

          {/* ERROR CHUNG */}
          {error.general && (
            <p className="text-red-500 text-sm mt-3 text-center bg-red-50 py-2 rounded-lg">
              {error.general}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="mt-6 flex items-center justify-center gap-2 bg-lime-600 text-white font-semibold py-3 rounded-full hover:bg-lime-700 transition shadow-lg shadow-lime-600/25 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <LogIn size={18} />
                Đăng nhập
              </>
            )}
          </button>

          <Link
            to="/"
            className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mt-6 hover:text-lime-600 transition"
          >
            <ArrowLeft size={14} />
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}

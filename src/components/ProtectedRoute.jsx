import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../supabase";

export default function ProtectedRoute() {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    // Kiểm tra session hiện tại
    supabase.auth.getSession().then(({ data }) => {
      setAuthed(!!data.session);
      setChecking(false);
    });

    // Lắng nghe đăng nhập/đăng xuất để cập nhật ngay
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthed(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Đang kiểm tra session -> chưa quyết định, hiện loading nhẹ
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Đang kiểm tra đăng nhập...
      </div>
    );
  }

  if (!authed) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}

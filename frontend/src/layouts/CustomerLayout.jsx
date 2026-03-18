import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ToolBar from "../components/ToolBar";
import Footer from "../components/Footer";
export default function CustomerLayout() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  // Nếu là trang login/register -> ẩn toolbar và footer
    if (hideLayout) {
        return <Outlet />;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <ToolBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
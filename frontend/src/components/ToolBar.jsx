import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import NavBar from "./NavBar";
import Login from "./Login";
import {
    MenuOutlined,
    CloseOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function ToolBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            {/* HEADER */}
            <div className="bg-white fixed top-0 left-0 right-0 h-18 flex items-center justify-between shadow-md z-50 px-6 relative">

                {/* LEFT: MENU BUTTON */}
                <div className="flex items-center">
                    <button
                        className="w-10 h-10 md:hidden flex items-center justify-center"
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <span className="text-xl">
                            {showMenu ? <CloseOutlined /> : <MenuOutlined />}
                        </span>
                    </button>
                </div>

                {/* LOGO */}
                <img
                    src={logo}
                    alt="Logo"
                    className="
            w-14 h-12 object-cover cursor-pointer
            absolute left-1/2 -translate-x-1/2   /* mobile: center */
            md:static md:translate-x-0 md:ml-0 md:left-0 md:translate-x-0 /* desktop: left */
          "
                />

                {/* CENTER MENU (DESKTOP) */}
                <div className="hidden md:flex gap-8 font-medium text-gray-700 mx-auto">
                    <button className="relative group">
                        TRANG CHỦ
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                    </button>

                    <button className="relative group"
                        onClick={() => navigate("/products")}
                    >
                        SẢN PHẨM CHO THUÊ
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                    </button>

                    <button className="relative group">
                        BLOG
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
                    </button>
                </div>

                {/* RIGHT ICONS */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setOpenLogin(!openLogin)}
                        className="text-xl"
                    >
                        {openLogin ? <CloseOutlined /> : <UserOutlined />}
                    </button>

                    <button className="text-xl">
                        <ShoppingCartOutlined />
                    </button>
                </div>
            </div>

            {/* SIDEBAR (MOBILE) */}
            <div
                className={`fixed top-16 left-0 z-40 transform transition-transform duration-300 md:hidden
        ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <NavBar onClose={() => setShowMenu(false)} />
            </div>

            {/* LOGIN PANEL */}
            <div
                className={`fixed top-16 right-0 z-40 transform transition-transform duration-300
        ${openLogin ? "translate-x-0" : "translate-x-full"}`}
            >
                <Login onClose={() => setOpenLogin(false)} />
            </div>

            {/* OVERLAY */}
            {(showMenu || openLogin) && (
                <div
                    className="fixed inset-0 bg-black/30 z-30"
                    onClick={() => {
                        setShowMenu(false);
                        setOpenLogin(false);
                    }}
                ></div>
            )}
        </>
    );
}

export default ToolBar;
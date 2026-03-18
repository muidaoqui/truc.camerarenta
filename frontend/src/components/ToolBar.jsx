import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import NavBar from "./NavBar";
import {
    MenuOutlined,
    CloseOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from "@ant-design/icons";
import { Input } from "antd";

function ToolBar() {
    const { Search } = Input;
    const [showMenu, setShowMenu] = useState(false);

    const onSearch = (value) => console.log(value);

    return (
        <>
            {/* HEADER */}
            <div className="bg-white fixed top-0 left-0 right-0 h-16 flex items-center justify-between shadow-md z-50">

                {/* MENU BUTTON */}
                <button
                    className="w-16 h-16 transition-all duration-300"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <span className={`${showMenu ? "rotate-180" : ""} inline-block transition-transform duration-300`}>
                        {showMenu ? <CloseOutlined /> : <MenuOutlined />}
                    </span>
                </button>

                <img src={logo} alt="Logo" className="w-16 h-16" />

                <div className="flex">
                    <button className="w-10 h-16">
                        <UserOutlined />
                    </button>
                    <button className="w-10 h-16">
                        <ShoppingCartOutlined />
                    </button>
                </div>
            </div>

            {/* OVERLAY */}
            {showMenu && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-30"
                    onClick={() => setShowMenu(false)}
                />
            )}

            {/* SIDEBAR */}
            <div
                className={`fixed top-16 left-0 z-40 transform transition-transform duration-300
                ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <NavBar onClose={() => setShowMenu(false)} />
            </div>

            {/* SEARCH */}
            <div className="w-auto px-4 py-2 mt-16">
                <Search
                    placeholder="Tìm kiếm sản phẩm..."
                    onSearch={onSearch}
                />
            </div>
        </>
    );
}

export default ToolBar;
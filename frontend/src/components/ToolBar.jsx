import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import NavBar from "./NavBar";
import Login from "./Login";
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
    const [openLogin, setOpenLogin] = useState(false);
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
                    <button
                        className="w-10 h-16"
                        onClick={() => setOpenLogin(!openLogin)}
                    >
                        <span className={`${openLogin ? "rotate-180" : ""} inline-block transition-transform duration-300`}>
                            {openLogin ? <CloseOutlined /> : <UserOutlined />}
                        </span>
                    </button>
                    <button className="w-10 h-16">
                        <ShoppingCartOutlined />
                    </button>
                </div>
            </div>


            {/* SIDEBAR */}
            <div
                className={`fixed top-16 left-0 z-40 transform transition-transform duration-300
                ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
            >
                <NavBar onClose={() => setShowMenu(false)} />
            </div>
            <div
                className={`fixed top-16 right-0 z-40 transform transition-transform duration-300
    ${openLogin ? "translate-x-0" : "translate-x-full"}`}
            >
                <Login onClose={() => setOpenLogin(false)} />
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
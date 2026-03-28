import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

function NavBar({ onClose }) {
    const navigate = useNavigate();
    const menuItems = [
        "TRANG CHỦ",
        "SẢN PHẨM CHO THUÊ",
        "BLOG",
    ];

    const handleMenuItemClick = (item) => {
        switch (item) {
            case "TRANG CHỦ":
                navigate("/");
                break;
            case "SẢN PHẨM CHO THUÊ":
                navigate("/products");
                break;
            default:
                break;
        }

        if (onClose) onClose();
    };

    return (
        <div className="w-72 bg-gray-100 h-screen shadow-lg">

            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center px-4 py-4 border-b cursor-pointer hover:bg-gray-200"
                    onClick={() => handleMenuItemClick(item)}
                >
                    <span className="font-semibold text-gray-700">{item}</span>
                    <RightOutlined />
                </div>
            ))}

        </div>
    );
}

export default NavBar;
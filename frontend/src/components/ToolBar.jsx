import React from "react";
import logo from "../assets/logo.jpg";
import { MenuOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

function ToolBar() {
    return (
        <div className="bg-white fixed top-0 left-0 right-0 h-16 flex items-center justify-between  shadow-md z-50">   
            <button className="w-16 h-16"><MenuOutlined /></button>
            <img src={logo} alt="Logo" className="bg-white w-16 h-16" />
            <div className="flex ">
                <button className="w-8 h-16"><UserOutlined /></button>
                <button className="w-8 h-16"><ShoppingCartOutlined /></button>
            </div>
        </div>
    );
}

export default ToolBar;
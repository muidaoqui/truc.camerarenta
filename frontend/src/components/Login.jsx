import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import logo from "../assets/logo.jpg";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
    const API = import.meta.env.VITE_API_URL;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await axios.post(`${API}/api/auth/login`, {
                email,
                password,
            });

            const { token, user, message } = res.data;

            if (!user || !token) {
                toast.error(message || "Đăng nhập thất bại");
                setError(message || "Đăng nhập thất bại");
                setLoading(false);
                return;
            }

            // check banned
            if (user.status === "banned") {
                toast.error("Tài khoản của bạn đã bị khóa.");
                setError("Tài khoản của bạn đã bị khóa.");
                setLoading(false);
                return;
            }

            // lưu dữ liệu
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            toast.success("Đăng nhập thành công!");

            // điều hướng
            switch (user.role) {
                case "admin":
                    navigate("/admin/dashboard");
                    break;
                case "recruiter":
                    navigate("/recruiter/dashboard");
                    break;
                default:
                    navigate("/");
            }

        } catch (err) {
            console.error("Login error:", err);
            const msg = err.response?.data?.message || "Đăng nhập thất bại";
            toast.error(msg);
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex justify-center items-center bg-gradient-to-b from-[#FCF4F3] to-[#F8EAEA] px-4 min-h-screen">
            <div className="flex flex-col md:flex-row w-full max-w-2xl overflow-hidden rounded-xl shadow-lg bg-white">

                {/* LEFT */}
                <div className="flex flex-col justify-center items-center p-6 md:p-10 text-cyan-700">
                    <img src={logo} alt="Logo" className="w-auto h-40 rounded-xl mb-4" />
                    <p className="text-center mt-4">
                        Máy ảnh chuyên nghiệp cho cuộc sống hiện đại
                    </p>
                </div>

                {/* RIGHT FORM */}
                <div className="flex flex-col justify-center w-full p-6 md:p-10">
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        
                        <h1 className="text-3xl font-bold text-center text-cyan-400">
                            Đăng Nhập
                        </h1>

                        {/* EMAIL */}
                        <div>
                            <label className="block mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                placeholder="Nhập email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className="block mb-1">Mật khẩu</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    placeholder="Nhập mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <FaRegEye />
                                </span>
                            </div>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="bg-cyan-400 hover:bg-cyan-500 text-white h-10 rounded-lg font-semibold disabled:opacity-50"
                            disabled={loading}
                        >
                            {loading ? "Đang đăng nhập..." : "Đăng Nhập"}
                        </button>

                        {/* ERROR */}
                        {error && (
                            <p className="text-sm text-red-600 text-center">{error}</p>
                        )}

                        {/* LINKS */}
                        <p className="text-center text-sm">
                            <Link to="/forgot-password" className="text-cyan-600 hover:underline">
                                Quên mật khẩu?
                            </Link>
                        </p>

                        <p className="text-center text-sm">
                            Chưa có tài khoản?{" "}
                            <Link to="/register" className="text-cyan-600 hover:underline">
                                Đăng ký
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";


// Dữ liệu mẫu, đồng bộ với Products.jsx
const menuItems = [
    {
        name: "Canon R50",
        price: "128.000đ",
        img: "https://images.openai.com/static-rsc-4/HLuhnzIlVAeMapmeFChcW0cKA4_FmFs7oyUEA71S6yGN_2EHaywlYNxyBUbev9njmOVReE1IaTyqIvwHWApGF0pVUlXUwEZS9_HedSx8Gjrq5xMeSqMX3wiDy7WhU8bpMJLDZrN7ep14ZsOTv-hRAsLSPZFR6uq_vijHDa445IE?purpose=inline",
        desc: "Máy ảnh Canon R50 nhỏ gọn, cảm biến APS-C 24.2MP, quay phim 4K, phù hợp du lịch và vlog.",
    },
    {
        name: "Canon M10",
        price: "54.000đ",
        img: "https://images.openai.com/static-rsc-4/Ktv0aWTGIbDybnplnJXpEDGzXlNVF6XketP65ZrKPJhUV4dKwVj5WhRaEnggSQFTA_yfTRqgfDOtm_yzyfWNr2rj3hxT3No_fkAnaEAQLxgWrKD-cqu79Y0erftNAYzTe7OR_QNhiBfRYSPOx5HZDATIa1VDyvEKsksdB1pocLs?purpose=inline",
        desc: "Canon M10 nhỏ gọn, cảm biến 18MP, màn hình lật, phù hợp chụp ảnh đời thường.",
    },
    // ... (các sản phẩm khác, chỉ demo 2 mẫu)
];

function ProductDetail() {
    const { name } = useParams();
    const decodedName = name ? decodeURIComponent(name) : "";
    const navigate = useNavigate();
    // Tìm sản phẩm theo tên
    const product = menuItems.find(item => item.name === decodedName);

    if (!product) {
        return (
            <div className="max-w-2xl mx-auto mt-10 text-center">
                <h2 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h2>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => navigate(-1)}>Quay lại</button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto mt-10 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
                <img src={product.img} alt={product.name} className="rounded-lg w-full h-72 object-contain" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    <p className="text-yellow-500 text-xl font-semibold mb-4">{product.price}/ngày</p>
                    <p className="text-gray-700 mb-6">{product.desc || "Mô tả sản phẩm đang cập nhật."}</p>
                </div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-lg transition">Đặt thuê ngay</button>
                <button className="mt-4 w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg" onClick={() => navigate(-1)}>Quay lại danh sách</button>
            </div>
        </div>
    );
}

export default ProductDetail;
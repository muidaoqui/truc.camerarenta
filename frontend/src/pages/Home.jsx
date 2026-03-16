import React from "react";
import procedure from "../assets/procedure.jpg";
import { Input } from "antd";
import { motion } from "framer-motion";

function Home() {
    const { Search } = Input;

    const onSearch = (value) => console.log(value);

    return (
        <div>
            {/* SEARCH */}
            <div className="w-auto h-18 px-4 py-2">
                <Search
                    placeholder="Tìm kiếm sản phẩm..."
                    onSearch={onSearch}
                />
            </div>

            {/* HERO VIDEO */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="h-[500px] overflow-hidden relative"
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover"
                >
                    <source
                        src="https://image.uniqlo.com/UQ/ST3/vn/imagesother/26SS_UV/2026_UVcut26SS_15s_generic_16_9.mp4"
                        type="video/mp4"
                    />
                </video>

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* slogan */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Simple Made Better
                    </h1>
                    <p className="text-lg mt-2">
                        Máy ảnh chuyên nghiệp cho cuộc sống hiện đại
                    </p>
                </div>
            </motion.div>

            {/* FEATURED PRODUCTS */}
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-2xl text-center mt-8 font-bold">
                    Sản phẩm nổi bật
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="border p-4 rounded hover:shadow-lg transition">
                            <img
                                src="https://cdn.tgdd.vn/Products/Images/42/248322/Camera-DJI-Osmo-Pocket-2-Black-400x400.jpg"
                                alt="DJI Osmo Pocket 2"
                                className="w-full h-48 object-cover"
                            />
                            <h2 className="text-lg font-semibold mt-2">
                                DJI Osmo Pocket 2
                            </h2>
                            <p className="text-gray-500 mt-1">
                                Giá: 9.990.000 VND
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* PROCEDURE IMAGE */}
            <div className="px-auto bg-gray-100 py-10 mt-10">
                <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="mt-10">
                        <img
                            src={procedure}
                            alt="Quy trình thuê máy ảnh"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* PROCEDURE CONTENT */}
                    <div className="max-w-5xl px-auto px-4 mt-8 text-justify">
                        <h2 className="text-2xl font-bold mb-4">
                            QUY TRÌNH THUÊ THIẾT BỊ
                        </h2>

                        <p>
                            Tại truc.camerarental, quy trình thuê thiết bị bao gồm các bước sau:
                        </p>

                        <h3 className="font-semibold mt-4">
                            1. Tìm hiểu nhu cầu và tư vấn
                        </h3>
                        <p>
                            Nhân viên tư vấn sẽ trao đổi với bạn để hiểu rõ nhu cầu về máy ảnh,
                            máy quay hoặc phụ kiện và thời gian thuê.
                        </p>

                        <h3 className="font-semibold mt-4">
                            2. Báo giá và hợp đồng
                        </h3>
                        <p>
                            Chúng tôi sẽ gửi báo giá chi tiết và hợp đồng thuê thiết bị với các
                            điều khoản cụ thể.
                        </p>

                        <h3 className="font-semibold mt-4">
                            3. Thanh toán trước
                        </h3>
                        <p>
                            Khách hàng thanh toán trước 50% tổng giá trị thuê để giữ lịch thiết bị.
                        </p>

                        <h3 className="font-semibold mt-4">
                            4. Nhận thiết bị
                        </h3>
                        <p>
                            Khách hàng đến cửa hàng nhận thiết bị, kiểm tra tình trạng máy và
                            thanh toán phần còn lại.
                        </p>

                        <h3 className="font-semibold mt-4">
                            5. Hỗ trợ khách hàng
                        </h3>
                        <p>
                            Chúng tôi sẽ hướng dẫn sử dụng cơ bản và hỗ trợ trong quá trình sử dụng.
                        </p>

                        <h3 className="font-semibold mt-4">
                            6. Thu hồi thiết bị
                        </h3>
                        <p>
                            Sau khi hết thời gian thuê, khách hàng trả thiết bị và chúng tôi sẽ
                            kiểm tra lại tình trạng máy.
                        </p>

                        <h3 className="font-semibold mt-4">
                            7. Hoàn trả đặt cọc
                        </h3>
                        <p>
                            Nếu thiết bị không bị hư hỏng, tiền đặt cọc sẽ được hoàn trả đầy đủ.
                        </p>
                    </div>

                </div>
                <div className="pt-10 max-w-7xl mx-auto bg-gray-100 px-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">
                        ĐIỀU KIỆN ĐỂ THUÊ THIẾT BỊ
                    </h2>
                    <h3 className="font-semibold mt-4 text-center">
                        Để thuê thiết bị tại truc.camerarental, khách hàng cần đáp ứng các điều kiện sau:
                    </h3>
                    <ol className="list-decimal list-inside mt-2 text-justify max-w-3xl mx-auto">
                        <li>
                            Có CMND/CCCD hoặc giấy tờ tùy thân hợp lệ
                        </li>
                        <li>
                            Đặt cọc theo quy định (thường là 50% giá trị thiết bị)
                        </li>
                        <li>
                            Ký hợp đồng thuê thiết bị
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Home;
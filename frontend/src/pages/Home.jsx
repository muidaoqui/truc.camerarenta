import React from "react";
import procedure from "../assets/procedure.jpg";

import { motion } from "framer-motion";
import MenuSection from "../components/MenuSection";
import HeroScroll from "../components/HeroScroll";
function Home() {
    

    return (
        <div>
            
            <HeroScroll />
            {/* FEATURED PRODUCTS */}
            <div className=" mx-auto ">
                <MenuSection />
            </div>

            {/* PROCEDURE IMAGE */}
            <div className="px-auto bg-gray-100 ">
                <div className="  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="">
                        <img
                            src={procedure}
                            alt="Quy trình thuê máy ảnh"
                            className="w-full "
                        />
                    </div>

                    {/* PROCEDURE CONTENT */}
                    <div className=" px-auto px-4 text-justify flex flex-col gap-4">
                        <h2 className="text-2xl font-bold ">
                            Tại truc.camerarental, quy trình thuê thiết bị bao gồm các bước sau:
                        </h2>

                        <h3 className="font-semibold mt-4 text-xl">
                            1. Tìm hiểu nhu cầu và tư vấn
                        </h3>
                        <p>
                            Nhân viên tư vấn sẽ trao đổi với bạn để hiểu rõ nhu cầu về máy ảnh,
                            máy quay hoặc phụ kiện và thời gian thuê.
                        </p>

                        <h3 className="font-semibold mt-4 text-xl">
                            2. Báo giá và hợp đồng
                        </h3>
                        <p>
                            Chúng tôi sẽ gửi báo giá chi tiết và hợp đồng thuê thiết bị với các
                            điều khoản cụ thể.
                        </p>

                        <h3 className="font-semibold mt-4 text-xl">
                            3. Thanh toán trước
                        </h3>
                        <p>
                            Khách hàng thanh toán trước 50% tổng giá trị thuê để giữ lịch thiết bị.
                        </p>

                        <h3 className="font-semibold mt-4 text-xl">
                            4. Nhận thiết bị
                        </h3>
                        <p>
                            Khách hàng đến cửa hàng nhận thiết bị, kiểm tra tình trạng máy và
                            thanh toán phần còn lại.
                        </p>

                        <h3 className="font-semibold mt-4 text-xl">
                            5. Hỗ trợ khách hàng
                        </h3>
                        <p>
                            Chúng tôi sẽ hướng dẫn sử dụng cơ bản và hỗ trợ trong quá trình sử dụng.
                        </p>

                        <h3 className="font-semibold mt-4 text-xl">
                            6. Thu hồi thiết bị
                        </h3>
                        <p>
                            Sau khi hết thời gian thuê, khách hàng trả thiết bị và chúng tôi sẽ
                            kiểm tra lại tình trạng máy.
                        </p>

                        <h3 className="font-semibold mt-4 text-xl">
                            7. Hoàn trả đặt cọc
                        </h3>
                        <p>
                            Nếu thiết bị không bị hư hỏng, tiền đặt cọc sẽ được hoàn trả đầy đủ.
                        </p>
                    </div>

                </div>
                <div className=" max-w-7xl mx-auto bg-gray-100 px-4 py-10">
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
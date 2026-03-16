import React from "react";
import { FacebookOutlined, YoutubeOutlined, PhoneFilled } from "@ant-design/icons";
import { EnvironmentFilled } from "@ant-design/icons";

function Footer() {
  return (
    <footer className="bg-gray-200 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10">

        {/* COLUMN 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">truc.camerarental</h2>
          <p className="text-gray-600 text-sm">
            Cho Thuê Máy Ảnh, Máy Quay Phim, Thiết Bị Live,...
          </p>

          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Da-thong-bao-bo-cong-thuong.png"
            alt="Đã thông báo bộ công thương"
            className="w-32 mt-4"
          />

          <div className="flex gap-3 mt-4">
            <button className="border p-2 rounded hover:bg-white">
              <FacebookOutlined />
            </button>
            <button className="border p-2 rounded hover:bg-white">
              <YoutubeOutlined />
            </button>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Thông tin liên hệ</h2>

          <div className="flex items-start gap-2 text-gray-600 text-sm">
            <EnvironmentFilled className="mt-1" />
            <p>
              truc.camerarental, 265 Đường số 8 phường 11 Gò Vâps, Ho Chi Minh City, Vietnam
            </p>
          </div>

          <div className="flex items-center gap-2 mt-3 text-gray-600 text-sm">
            <PhoneFilled />
            <p>0795 398 839</p>
          </div>
        </div>

        {/* COLUMN 3 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Liên kết</h2>

          <ul className="text-gray-600 text-sm space-y-2">
            <li className="hover:text-black cursor-pointer">Điều Kiện Thuê</li>
            <li className="hover:text-black cursor-pointer">
              Quy Trình Thuê và Thanh Toán
            </li>
            <li className="hover:text-black cursor-pointer">
              Chính Sách Vận Chuyển
            </li>
            <li className="hover:text-black cursor-pointer">
              Chính Sách Bảo Mật
            </li>
            <li className="hover:text-black cursor-pointer">
              Chính Sách Cọc & Thế Chấp
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">DỊCH VỤ</h2>

          <ul className="text-gray-600 text-sm space-y-2">
            <li className="hover:text-black cursor-pointer">Trang chủ</li>
            <li className="hover:text-black cursor-pointer">Sản Phẩm Cho Thuê</li>
            <li className="hover:text-black cursor-pointer">Thuê Theo Nhu Cầu</li>
            <li className="hover:text-black cursor-pointer">Thuê Theo Tháng</li>
            <li className="hover:text-black cursor-pointer">Sản Xuất Video</li>
            <li className="hover:text-black cursor-pointer">Chia Sẻ Kinh Nghiệm</li>
            <li className="hover:text-black cursor-pointer">Liên Hệ</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t text-center py-4 text-gray-600 text-sm">
        Copyright © 2026 truc.camerarental. Powered by muidaoqui
      </div>

      {/* FLOAT CONTACT */}
      <div className="fixed right-4 bottom-24 flex flex-col gap-3">
        <a
          href="tel:0766120590"
          className="bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
        >
          <PhoneFilled />
        </a>

        <a
          href="https://zalo.me"
          className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
        >
          Z
        </a>

        <a
          href="https://maps.google.com"
          className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
        >
          <EnvironmentFilled />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
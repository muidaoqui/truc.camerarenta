import React from "react";
import { FacebookOutlined, YoutubeOutlined, PhoneFilled } from "@ant-design/icons";
import { EnvironmentFilled } from "@ant-design/icons";

function Footer() {
  return (
    <footer className="bg-gray-200 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-10">

        {/* COLUMN 1 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">truc.camerarental</h2>
          <p className="text-gray-600 text-sm">
            THUÊ MÁY ẢNH KHU VỰC TPHCM
          </p>
        </div>

        {/* COLUMN 2 */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Thông tin liên hệ</h2>
          <div className="flex items-start gap-2 text-gray-600 text-sm">
            <EnvironmentFilled className="mt-1" />
            <p>
              truc.camerarental, 20 Trần Khắc Chân, Phường 15, Phú Nhuận, Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div className="flex items-start gap-2 text-gray-600 text-sm">
            <EnvironmentFilled className="mt-1" />
            <p>
              truc.camerarental, 265 Đường số 8 phường 11 Gò Vấp, Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div className="flex items-center gap-2 mt-3 text-gray-600 text-sm">
            <PhoneFilled />
            <p>0795 398 839</p>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t text-center py-4 text-gray-600 text-sm">
        Copyright © 2026 truc.camerarental. Powered by muidaoqui
      </div>

      {/* FLOAT CONTACT */}
      <div className="fixed right-4 bottom-24 flex flex-col gap-3">

        <a
          href="https://www.google.com/maps/place/TRUC.CAMERARENTAL+-+CHO+THU%C3%8A+M%C3%81Y+%E1%BA%A2NH/@10.7975649,106.6775126,17z/data=!4m15!1m8!3m7!1s0x317528d6ee4b9417:0x5f98cdaeed611573!2zMjAgVHLhuqduIEto4bqvYyBDaMOibiwgUGjGsOG7nW5nIDE1LCBD4bqndSBLaeG7h3UsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!3b1!8m2!3d10.7975596!4d106.6800875!16s%2Fg%2F11wbknscwf!3m5!1s0x317529d3386f79a9:0x428eb2715a6b9b5b!8m2!3d10.7975596!4d106.6800875!16s%2Fg%2F11z1vw0ts2?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D"
          className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
        >
          <EnvironmentFilled />
        </a>
        <a
          href="https://www.google.com/maps?q=TRUC.CAMERARENTAL+-+CHO+THUÊ+MÁY+ẢNH,+265+Đ.+Số+8,+Phường+11,+Gò+Vấp,+Thành+phố+Hồ+Chí+Minh+700000&ftid=0x3175290059501195:0x46b2a87b85755583&entry=gps&lucs=,94297699,94275415,94284469,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTksOTQyNzU0MTUsOTQyODQ0NjksOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAlZO&skid=ad4147a1-605b-4b44-9e05-40f9cebd252f&g_st=ic"
          className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg"
        >
          <EnvironmentFilled />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
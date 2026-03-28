import React, { useEffect, useState } from "react";

export default function HeroScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 500, 1);

  const scale = 1 + progress * 0.5;
  const textMove = progress * 200;
  const opacity = 1 - progress;

  return (
    <div className="h-[200vh]">
      {/* sticky để giữ màn hình */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* TEXT */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20"
            style={{
              transform: `translateY(-${textMove}px)`,
              opacity: opacity,
            }}
          >
            <h1 className="text-5xl font-bold text-black">truc.camerarental</h1>
            <p className="mt-2 text-black text-xl">THUÊ MÁY ẢNH KHU VỰC TP.HCM</p>
          </div>
        {/* 🔻 BACKGROUND */}
        <img
          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/484972726_1184578906557326_7020907453184790745_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=HcUEByUR8MEQ7kNvwGIgnLX&_nc_oc=AdoD9Mm9v4_Ah0J6vSfq652Ph--iz2gVDHH19C8ditoINk3iRn375p0fFvciocHQMSa8Vk_4XeU0RDcIqij2B0tB&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=BNoJveTUiRvyvQIcZdjuww&_nc_ss=7a32e&oh=00_Afz_fXBTrzki1ZpW5VEYeRVlqCb6NHJ3gI-vdO-0ndh3yw&oe=69CD42AA"
          className="absolute inset-0 w-full h-full object-cover blur-sm brightness-50"
          style={{
            transform: `scale(${1 + progress * 0.2})`, // nền zoom nhẹ
          }}
        />

        {/* 🔺 MAIN IMAGE */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <img
            src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/484526639_1184578909890659_5721009379199865239_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=xent2Zr1RqYQ7kNvwGRjYBF&_nc_oc=AdruAHiDSt-TtJyBk7p23IZSPhxl-UF28Ma5ivke92sPC-kqhf8_OxE16IqSDzmQs_PiJJ44xFb0Yj-YYcJSoLTf&_nc_zt=23&_nc_ht=scontent.fsgn2-3.fna&_nc_gid=BNoJveTUiRvyvQIcZdjuww&_nc_ss=7a32e&oh=00_AfxWJtgu_xut2plee2K0ZP95MpMovPsToQ7VlTPa_GS0_w&oe=69CD492A"
            className="w-[80%] max-w-md rounded-2xl shadow-2xl"
            style={{
              transform: `scale(${scale})`,
            }}
          />

          
        </div>
      </div>
    </div>
  );
}
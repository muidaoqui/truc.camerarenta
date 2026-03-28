import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// fake data (bạn thay bằng data thật)
const menuItems = [
    {
        name: "Canon R50",
        price: "128.000đ",
        img: "https://images.openai.com/static-rsc-4/HLuhnzIlVAeMapmeFChcW0cKA4_FmFs7oyUEA71S6yGN_2EHaywlYNxyBUbev9njmOVReE1IaTyqIvwHWApGF0pVUlXUwEZS9_HedSx8Gjrq5xMeSqMX3wiDy7WhU8bpMJLDZrN7ep14ZsOTv-hRAsLSPZFR6uq_vijHDa445IE?purpose=inline",
    },
    {
        name: "Canon M10",
        price: "54.000đ",
        img: "https://images.openai.com/static-rsc-4/Ktv0aWTGIbDybnplnJXpEDGzXlNVF6XketP65ZrKPJhUV4dKwVj5WhRaEnggSQFTA_yfTRqgfDOtm_yzyfWNr2rj3hxT3No_fkAnaEAQLxgWrKD-cqu79Y0erftNAYzTe7OR_QNhiBfRYSPOx5HZDATIa1VDyvEKsksdB1pocLs?purpose=inline",
    },
    {
        name: "Canon G7X Mark II",
        price: "120.000đ",
        img: "https://images.openai.com/static-rsc-4/FDs6jboFoDB3EbAtIxGsmRJt84j5VwSPzvRmMg8OzACCykjUL6-Fy6qyuh4LoRThdiaujqC2owoXcnty2g63N_5KqixSZ-Yhq1cBWsLSPMw1LCOgbWxlEm7-upjK9MJ0lHmmxNk294KuQ3_lliObfjt4OrRhb_5qqhdKFiT8GuY?purpose=inline",
    },
    {
        name: "Canon G7X Mark III",
        price: "136.000đ",
        img: "https://images.openai.com/static-rsc-4/4k4IV8xvJ7PJ2OkOrnF3sBnMDygcClLzEFHPsvS2mKRYia3Y7AISFzCtsVljM3h17n8UYH6Lpaxr4Zn4oNbW3T6hLaOJYPvEJw9-EWiV9EwAwcvLGhdBWNaNeqj7yyN9c484Iue8kG1ocEeZ7D9RRSvtcKDNGdxAm5lnUAWs0EU?purpose=inline",
    },
    {
        name: "Canon M100",
        price: "88.000đ",
        img: "https://images.openai.com/static-rsc-4/S3ldJiGHYQ9W0BU08aX1zE5R-PQfMIc2b0WNXQp3LDtF-FLjRDM1ostLosvXiLlILZnusxlEa2PVIpZ4g8QMjDFFnEkBW7deWMkkAEXIac_u7PQ40dfqt_UkJLVeqBQBm2TCgTrA4oLu1DNPe-tZXY1ccp-uL_zereMNhDIguS8?purpose=inline",
    },
    {
        name: "Canon M50",
        price: "104.000đ",
        img: "https://images.openai.com/static-rsc-4/2evwmx6PnhErXK51u5dPCah4yVCY_XW3ltG7lqbb2GMRBOSywzcon6z9fNorIitIbchgnzApaq_HMAVLi9jvkAHzAtulnU0VEy1V23tS2XQYam90Yk7GqBqcqc-oFWO-Daq0m7OYnIMWtrvYdAJj9ohG3pyHVOmWc19fbt4nL0U?purpose=inline",
    },
    {
        name: "Fujifilm XA3",
        price: "72.000đ",
        img: "https://images.openai.com/static-rsc-4/yzHEf-Ie8H0OztTx6_f1TPIzq-v5tIq4k6hUI_u2rGYFU-QBecIlknrHTn_ILMUEyTbsgWY8fsP92JzYHUAgajgk3tj_4C-a6T_VuIZNJh6rbNQmnsyKds2SrmOrPVHPDSxRFeW63iilduBe7BIGvbDaSggq062YFjMQFsBZrxY?purpose=inline",
    },
    {
        name: "Fujifilm X-A5",
        price: "112.000đ",
        img: "https://images.openai.com/static-rsc-4/ukIasVAzvx6gSGq_zPPTji9I8l4jtkQJx-eIF9bq7vnouTq0TyoD0QaKNzDPKyzI4KBl5zc4jCs2jPY7jH5_9pt9rNEavFytmPNEE3zjDNGq_hbRh4SC5bNj118RP2CjNkLnDE_dugaInKmOKyo7VC1lzQm3lpaVyZSsGk3wq0Q?purpose=inline",
    },
    {
        name: "Fujifilm XA10",
        price: "64.000đ",
        img: "https://images.openai.com/static-rsc-4/aseWFQ-Fvo_vKQvlAia9I_qkDHTD3Bb9y4k1czKi1q5Hl3cD51SsCXx4CmkeTzDbWCtXtVtJ5cTfZNtWCBOd7c-MkQyE0geNx0yiqxQyaNMlxJtdSeNxoJv-ttjpB3qzjGYCSOVPY3lxZXlzxIgu5hqojHqiK_-QI4oRRxg5sOg?purpose=inline",
    },
    {
        name: "Fujifilm X-T10",
        price: "88.000đ",
        img: "https://images.openai.com/static-rsc-4/GWVGjgyRaAnZUc02wO131TjmYAu2HAbrO7HewXRV2OYaMSz9Pvj6jmJC2yb39LXfd6VB2orBS5PD8pskCCuPrC729P4X_yMBHtpPfAam0uaUtgYkJ1eHzSIpii2Jl3SVUxQQttTxdQJrY3B5Uam-ypSLtXp2Ck0MyMrWKRTwRNU?purpose=inline",
    },
    {
        name: "Fujifilm X-T20",
        price: "120.000đ",
        img: "https://images.openai.com/static-rsc-4/yHD2aoJ1dsapgJfwSRJ-vi_Eq25EE2i0A7kDJ9ka2Ook_X_Br0KVZ4VvAK6l0LRsDKqeRD7sjO6V6HE2Y6iAn3qkwrNkY0mitqZ8EvjjtDkDAif4kc9C6Rmf6r62K5VzYJ_WjDCfqmlirzu3LjuWk1jT_TasUBDIRyQlsf6CuRo?purpose=inline",
    },
    {
        name: "Fujifilm X-T30",
        price: "152.000đ",
        img: "https://images.openai.com/static-rsc-4/0U_YUFt6okFoaXfOtKpbgy3Yx10v_W0VHj-448uZZLczX3sDm6vWfvB98HSHomUkNL_0ahs6Lt3SaQiPHH2JRXnnEWA_KBDJ82H_OZdZ3_pB-H6V8ZFtt1cvg5DKaVqCLsduBk5aDp_PpgcqczmPkj0RCwaSmYMRscg31qc0IFo?purpose=inline",
    },
    {
        name: "Fujifilm X-T100",
        price: "120.000đ",
        img: "https://images.openai.com/static-rsc-4/v9EJayo350MyyjlB7Z2-S-RdNAL-LBBaN8dBOMJzs-fChtcWbNQRdUCr7L35liHdorVzRCdmPsxXgxgSLM1k4qEe1mVgb1aVDvUoQAbqOUOGiz1X-_0vdneYh1Thyn-Tz6ymGA9-zBFoVI_lkRsd6rfi0Ey7OVjp_eslR2n7gR0?purpose=inline",
    },
    {
        name: "Fujifilm X-S10",
        price: "160.000đ",
        img: "https://images.openai.com/static-rsc-4/ntUeWFmeJ2EWkTnMVMGjW8ypUt1NNLQuLapfV6tnNcRcY2m73Ik0nH5rB51Ou7ObOYF6qAlDnZhOrr6HLlhycHw5OExsHfA11NqanXa75CSQ5Py7mvLvhbBe5KKt3I9TGG6mfmijeU0Jcfjeuly_PDCNKBOHJuI_0_Gd1eC2Fyk?purpose=inline",
    },
    {
        name: "Fujifilm X-S20",
        price: "200.000đ",
        img: "https://images.openai.com/static-rsc-4/udhQrCXpfdrYceUOatInCt89ak_fwGgHeEpL6W3E3dsJyYiN5KS5odpww31uVR4Dbqx8lyHF1UFwlvj_a1Y3942qWRGmY4QpyF7lCsiHZfv2UgO9R6bRFfO4Gnd_69aY-EjX8Qam0dcry3d2YrL0dSIoKiyVMcovXU4DyKMYWBo?purpose=inline",
    },
    {
        name: "Fujifilm X100VI",
        price: "320.000đ",
        img: "https://images.openai.com/static-rsc-4/PGPQ3l3-Gpr0YQI-daBLwH0hE0hm2Iz-K9M2TaCTl7Lo58IV97ZQgU565c9wRbPHf1sRRF1bjCcgFJOrogYNL4OD5RE6tSHLV0mNcWX-YhHU_dgg0b7GxhTLuxuMkpHqCx_gUrVC1fmVF4MCn3B4MtjKeLhB9T_Q5jXa0yR3I5k?purpose=inline",
    },
];

const loopData = [...menuItems, ...menuItems];


function Card({ item }) {

    return (
        <div className="
  w-[80vw] sm:w-[60vw] md:w-[300px] lg:w-[350px]
  aspect-[4/3]
  relative rounded-xl overflow-hidden
">
            <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* text */}
            <div className="absolute bottom-3 left-3 text-white">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-yellow-400 text-sm">{item.price}</p>
            </div>
        </div>
    );
}

function MenuSection() {
    const navigate = useNavigate();
    const { cameraId } = useParams();
    const [selectedCamera, setSelectedCamera] = useState(null);
    return (
        <div className="bg-gradient-to-b from-[#FCF4F3] to-[#F8EAEA]  overflow-hidden h-screen flex flex-col justify-center">
            {/* Title */}
            <div className="text-center text-[#4b1c1c] mb-10">
                <h2 className="text-4xl font-bold">MÁY ẢNH NỔI BẬT</h2>
                <p className="text-sm opacity-80 mt-2">
                    Chạm vào máy ảnh để xem chi tiết và đặt ngay
                </p>
            </div>

            {/* ROW 1 - chạy trái */}
            {/* ROW 1 */}
            <div className="relative mt-6">
                {/* ROW */}
                <div className="flex gap-6 w-max animate-scroll-left">
                    {loopData.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>

                {/* Fade LEFT */}
                <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#FCF4F3] to-transparent" />

                {/* Fade RIGHT */}
                <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#FCF4F3] to-transparent" />
            </div>

            {/* ROW 2 */}
            <div className="relative mt-6">
                <div className="flex gap-6 w-max animate-scroll-right">
                    {loopData.map((item, index) => (
                        <Card key={index} item={item} />
                    ))}
                </div>

                <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-[#FCF4F3] to-transparent" />
                <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-[#FCF4F3] to-transparent" />
            </div>

            {/* Button */}
            <div className="text-center mt-20">
                <button className="px-6 py-3 border border-orange-400 text-[#4b1c1c] rounded-full hover:bg-orange-500 transition"
                    onClick={() => navigate("/products")}
                >
                    XEM TẤT CẢ MÁY ẢNH →
                </button>
            </div>
        </div>
    );
}

export default MenuSection;
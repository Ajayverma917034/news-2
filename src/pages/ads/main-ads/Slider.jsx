"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../../../assets/errorimg1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./slider.css";
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { AdvertisementSkelton1 } from "../../../skeleton/Advertisement.skeltons";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

export default async function Slider() {
  const { loading, error, detailAds } = useSelector((state) => state.ads);

  return (
    <Swiper
      spaceBetween={20}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="w-full h-[400px] relative" // Set the height of Swiper
    >
      {!loading
        ? detailAds.length > 0
          ? detailAds.map((ad, index) => (
              <SwiperSlide
                key={index}
                className="relative w-full h-full w-[20rem]"
              >
                <Image
                  src={ad.banner.url}
                  width={800}
                  height={400}
                  sizes={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt="news"
                />
              </SwiperSlide>
            ))
          : [0, 0, 0].map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full lg:h-52 lg:w-[20rem]"
              >
                <Image
                  src={banner}
                  width={800}
                  height={400}
                  sizes={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </SwiperSlide>
            ))
        : [0, 0, 0].map((item, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <AdvertisementSkelton1 />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}

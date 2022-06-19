import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-blood-banner relative bg-no-repeat px-3 bg-cover w-full min-h-screen flex justify-center items-center z-0">
            <div className="banner-inner bg-white bg-opacity-90 lg:bg-opacity-80 lg:w-3/5">
              <div className="p-10 flex flex-col justify-center items-center">
                <p className="text-center uppercase font-bold text-gray-600 text-xl tracking-widest">
                  Donate blood , save life !
                </p>
                <p className="text-center uppercase font-bold text-gray-600 text-xl lg:text-3xl my-10 lg:leading-[20px]">
                  YOUR donation can bring smile at others face
                </p>
                <button className="button">
                  <>
                    <span>Donate Now</span>
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blood-banner relative z-0 bg-no-repeat px-3 bg-cover w-full min-h-screen flex justify-center items-center">
            <div className="banner-inner bg-white bg-opacity-90 lg:bg-opacity-80 lg:w-3/5">
              <div className="p-10 flex flex-col justify-center items-center">
                <p className="text-center  uppercase font-bold text-gray-600 text-xl tracking-widest">
                  Donate blood , save life !
                </p>
                <p className="text-center uppercase font-bold text-gray-600 text-xl lg:text-3xl my-10 lg:leading-[20px]">
                  Donate Your Blood And Inspires to others
                </p>
                <button className="button">
                  <span>join with us</span>
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

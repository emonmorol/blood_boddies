import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

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
          <div className="bg-blood-banner bg-no-repeat bg-cover w-full min-h-screen flex justify-center items-center">
            <div className="relative bg-white bg-opacity-80 w-3/5">
              <div className="absolute bottom-0 left-0 w-40 h-40 border-b-[6px] border-l-[6px] border-primary"></div>
              <div className="absolute top-0 right-0 w-40 h-40 border-t-[6px] border-r-[6px] border-primary"></div>
              <div className="p-16 flex flex-col justify-center items-center">
                <p className="text-center uppercase font-bold text-black text-4xl tracking-widest">
                  Donate blood , save life !
                </p>
                <p className="text-center uppercase font-bold text-black text-6xl my-10 leading-[80px]">
                  YOUR donation can bring smile at others face
                </p>
                <button className="btn btn-primary font-bold ">
                  <span>Donate Now</span>
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blood-banner bg-no-repeat bg-cover w-full min-h-screen flex justify-center items-center">
            <div className="relative bg-white bg-opacity-80 w-3/5">
              <div className="absolute bottom-0 left-0 w-40 h-40 border-b-[6px] border-l-[6px] border-primary"></div>
              <div className="absolute top-0 right-0 w-40 h-40 border-t-[6px] border-r-[6px] border-primary"></div>
              <div className="p-16 flex flex-col justify-center items-center">
                <p className="text-center  uppercase font-bold text-black text-4xl tracking-widest">
                  Donate blood , save life !
                </p>
                <p className="text-center uppercase font-bold text-black text-6xl my-10 leading-[80px]">
                  Donate Your Blood And Inspires to others
                </p>
                <button className="btn btn-primary font-bold ">
                  <span>join with us</span>
                  <i class="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="bg-blood-banner bg-no-repeat bg-cover w-full min-h-screen flex justify-center items-center">
            <div className="relative bg-white bg-opacity-80 w-3/5">
              <div className="absolute bottom-0 left-0 w-40 h-40 border-b-[6px] border-l-[6px] border-primary"></div>
              <div className="absolute top-0 right-0 w-40 h-40 border-t-[6px] border-r-[6px] border-primary"></div>
              <div className="p-16 uppercase font-bold">
                <p className="text-center text-black text-4xl tracking-widest">
                  Donate blood , save life !
                </p>
                <p>

                </p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;

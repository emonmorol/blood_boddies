import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sponsor1 from "../../../Images/sponsor/logo_1.jpg";
import sponsor2 from "../../../Images/sponsor/logo_2.jpg";
import sponsor3 from "../../../Images/sponsor/logo_3.jpg";
import sponsor4 from "../../../Images/sponsor/logo_4.jpg";
import sponsor5 from "../../../Images/sponsor/logo_5.jpg";
import sponsor6 from "../../../Images/sponsor/logo_6.jpg";
import sponsor7 from "../../../Images/sponsor/logo_7.jpg";
import sponsor8 from "../../../Images/sponsor/logo_8.jpg";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto my-24 flex flex-col items-center w-full">
      <div className="flex flex-col -mb-10">
        <h2 class="text-5xl font-bold text-gray-600 uppercase text-center">
          OUR SPONSORS
        </h2>
        <hr className="border w-[10%] my-3 border-primary  mx-auto" />
        <span className="my-3 text-center">
          The sponsors who give their valuable amount to fulfill our mission.
        </span>
      </div>
      <div class="card-body w-full">
        <div>
          <Swiper
            slidesPerView={6}
            spaceBetween={20}
            loop={true}
            breakpoints={{
              1054: {
                width: 1054,
                slidesPerView: 4,
              },
              768: {
                width: 768,
                slidesPerView: 3,
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },
              200: {
                width: 200,
                slidesPerView: 1,
              },
            }}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
            }}
            loopedSlides={9999}
            scrollbar={{ draggable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={sponsor1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={sponsor8} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

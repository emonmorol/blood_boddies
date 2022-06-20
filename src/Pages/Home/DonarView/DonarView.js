import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Views from "./Views";
import viewImage from "../../../Images/member-view-img.jpg";
import { useQuery } from "react-query";
import baseAxios from "../../../Api/instance";
import Spinner from "../../../components/Spinner/Spinner";

const DonarView = () => {
  const { data: membersView, isLoading } = useQuery("reviewData", () =>
    baseAxios.get("/reviews")
  );

  if (isLoading) {
    return <Spinner />;
  }
  console.log(membersView.data);

  return (
    <div className="">
      <div className="relative flex flex-col items-center justify-center bg-blood-donar bg-fixed bg-cover min-h-[70vh]">
        <h2 className="text-2xl text-white">Awesome Words From Donors</h2>
        <hr className="border w-[5%] my-3 border-primary" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white md:mb-20 lg:mb-10 text-center">
          JOIN WITH US AND SAVE LIFE
        </h2>
        <div className="absolute top-full -translate-y-[35%] md:-translate-y-1/2 lg:-translate-y-1/2 w-full lg:w-1/2 p-3 lg:p-0">
          <div className="card lg:card-side flex-col-reverse lg:flex-row bg-base-100 shadow-xl">
            <figure className="w-1/2 h-full">
              <img
                className="hidden lg:flex h-full object-cover"
                src={viewImage}
                alt="Album"
              />
            </figure>
            <div className="relative card-body w-full lg:w-1/2">
              <div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {membersView?.data?.map((view) => (
                    <SwiperSlide key={view._id}>
                      <Views view={view} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end bg-gray-100 bg-fixed bg-cover min-h-[65vh] md:min-h-[50vh] lg:min-h-[40vh]">
        <div className="">
          <button className="button mb-5 text-xl">Share your opinion</button>
        </div>
      </div>
    </div>
  );
};

export default DonarView;

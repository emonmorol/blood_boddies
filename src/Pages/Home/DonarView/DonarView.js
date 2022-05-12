import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import Views from "./Views";
import viewImage from "../../../Images/member-view-img.jpg";

const DonarView = () => {
  const membersView = [
    {
      _id: 1,
      memberType: "Donor",
      viewContext:
        "I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind.",
      image: "https://randomuser.me/api/portraits/women/90.jpg",
      name: "Megan Diaz",
      email: "megan.diaz@email.com",
    },
    {
      _id: 2,
      memberType: "Donor",
      viewContext:
        "I proudly donate blood on a regular basis because it gives others something they desperately need to survive. Just knowing I can make a difference in someone else's life makes me feel great!",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      name: "Leonard Murray",
      email: "leonard.murray@email.com",
    },
    {
      _id: 3,
      memberType: "Donor",
      viewContext:
        "I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Lance Meyer",
      email: "lance.meyer@email.com",
    },
    {
      _id: 4,
      memberType: "Donor",
      viewContext:
        "I proudly donate blood on a regular basis because it gives others something they desperately need to survive. Just knowing I can make a difference in someone else's life makes me feel great!",
      image: "https://randomuser.me/api/portraits/women/35.jpg",
      name: "Noah Sanchez",
      email: "noah.sanchez@email.com",
    },
    {
      _id: 5,
      memberType: "Donor",
      viewContext:
        "I have been a donor since high school. Although I have not been a donor every year, I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind.",
      image: "https://randomuser.me/api/portraits/men/99.jpg",
      name: "Ross Williams",
      email: "ross.williams@email.com",
    },
  ];

  return (
    <div className="">
      <div className="relative flex flex-col items-center justify-center bg-blood-donar bg-fixed bg-cover min-h-[70vh]">
        <h2 className="text-2xl text-white">Awesome Words From Donors</h2>
        <hr className="border w-[5%] my-3 border-primary" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white md:mb-20 lg:mb-10 text-center">
          JOIN WITH US AND SAVE LIFE
        </h2>
        <div className="absolute top-full -translate-y-[35%] md:-translate-y-1/2 lg:-translate-y-1/2 w-full lg:w-1/2 p-3 lg:p-0">
          <div class="card lg:card-side flex-col-reverse lg:flex-row bg-base-100 shadow-xl">
            <figure className="w-1/2 h-full">
              <img
                className="hidden lg:flex h-full object-cover"
                src={viewImage}
                alt="Album"
              />
            </figure>
            <div class="relative card-body w-full lg:w-1/2">
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
                  {membersView.map((view) => (
                    <SwiperSlide>
                      <Views key={view._id} view={view} />
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
          <button className="btn mb-5 rounded-full text-xl font-medium uppercase text-gray-200 px-10 btn-black hover:text-white  hover:bg-primary hover:border-primary transition-all duration-300">
            Share your opinion
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonarView;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import CampaignCard from "./CampaignCard";
import event1 from "../../../Images/event_1.png";
import event2 from "../../../Images/event_2.png";
import event3 from "../../../Images/event_3.png";
import event4 from "../../../Images/event_4.png";

const Campaigns = () => {
  const campaigns = [
    {
      _id: 1,
      title: "Opening Donation Day",
      detail:
        "I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind.",
      image: event1,
      time: "10.00 - 3.00",
      date: "14 January, 2018",
      place: "Dhaka,Bangladesh",
    },
    {
      _id: 2,
      title: "Free Group Checking",
      detail:
        "I proudly donate blood on a regular basis because it gives others something they desperately need to survive.",
      image: event2,
      time: "10.00 - 3.00",
      date: "14 January, 2018",
      place: "Dhaka,Bangladesh",
    },
    {
      _id: 3,
      title: "Blood Group Collection",
      detail:
        "I always want to give to the human race. I love to help others! Moreover it gives a real peace in my mind.",
      image: event3,
      time: "10.00 - 3.00",
      date: "14 January, 2018",
      place: "Dhaka,Bangladesh",
    },
    {
      _id: 4,
      title: "Blood Donation Camp",
      detail:
        "I proudly donate blood on a regular basis because it gives others something they desperately need to survive.",
      image: event4,
      time: "10.00 - 3.00",
      date: "14 January, 2018",
      place: "Dhaka,Bangladesh",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-24 flex items-center">
      <div className="flex flex-col">
        <h2 class="text-5xl font-bold text-gray-600 uppercase">
          Our Campaigns
        </h2>
        <hr className="border w-[10%] my-5 border-primary" />
        <span className="my-5 w-[50ch]">
          Blood Buddies is for public donation center with blood donation
          members in the changing health care system.
        </span>
        <button className=" w-2/3 btn mb-5 rounded-full text-xl font-medium uppercase px-10 text-white  btn-primary transition-all duration-300">
          Load All campaigns
        </button>
      </div>
      <div class="relative card-body w-1/2">
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
            {campaigns.map((campaign) => (
              <SwiperSlide>
                <CampaignCard key={campaign._id} campaign={campaign} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;

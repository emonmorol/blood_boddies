import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import CampaignCard from "./CampaignCard";
import event1 from "../../../Images/event_1.jpg";
import event2 from "../../../Images/event_2.jpg";
import event3 from "../../../Images/event_3.jpg";
import event4 from "../../../Images/event_4.jpg";

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
    <div className="max-w-7xl mx-auto my-24 flex flex-col items-center">
      <div className="flex flex-col -mb-10">
        <h2 class="text-5xl font-bold text-gray-600 uppercase text-center">
          Our Campaigns
        </h2>
        <hr className="border w-[10%] my-3 border-primary  mx-auto" />
        <span className="my-3 text-center">
          Encourage new donors to join and continue to give blood. We have total
          sixty thousands donor centers and visit thousands of other venues on
          various occasions.
        </span>
      </div>
      <div class="relative card-body w-full">
        <div>
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
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
      <button className="btn mb-5 border-0 rounded-full text-xl font-medium uppercase px-20 text-white  btn-primary hover:bg-gray-600 transition-all duration-300">
        Load All campaigns
      </button>
    </div>
  );
};

export default Campaigns;

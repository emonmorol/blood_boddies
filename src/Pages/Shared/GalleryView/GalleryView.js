import React from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../../../components/Spinner/Spinner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./GalleryView.module.css";

import { EffectCoverflow, Pagination } from "swiper";
import useGallery from "../../../Hooks/useGallery";

Modal.setAppElement("#root");
const GalleryView = ({ modalIsOpen, closeModal }) => {
  const [photos, isLoading] = useGallery();
  if (isLoading) {
    return <Spinner />;
  }
  console.log(photos);
  return (
    <Modal
      isOpen={modalIsOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      //   style={customStyles}
      contentLabel="Example Modal"
      className="relative w-full mt-20"
    >
      <button
        onClick={closeModal}
        class="bg-black p-2 rounded-full text-white absolute right-2 top-2 z-50"
      >
        <svg
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper z-10"
      >
        {photos?.data?.map((photo) => (
          <SwiperSlide key={photo._id}>
            <img src={photo.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Modal>
  );
};

export default GalleryView;

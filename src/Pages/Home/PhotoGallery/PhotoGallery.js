import React, { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { createTheme, useMediaQuery } from "@mui/material";
import useGallery from "../../../Hooks/useGallery";
import { Link } from "react-router-dom";
import GalleryView from "../../Shared/GalleryView/GalleryView";

const PhotoGallery = () => {
  const [photos, isLoading] = useGallery();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        lg: 1200,
      },
    },
  });
  const matchesXs = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  if (isLoading) {
    return <p>Loading ..</p>;
  }

  const itemData = photos?.data?.slice(0, 11);

  return (
    <div className="relative">
      <div className="bg-gray-100 w-full flex flex-col justify-center py-20">
        <div className="flex flex-col my-10 ">
          <h2 className="text-5xl font-bold text-gray-600 uppercase text-center">
            PHOTO GALLERY
          </h2>
          <hr className="border w-[10%] my-3 border-primary  mx-auto" />
          <span className="my-3 text-center">
            Campaign photos of different parts of world and our prestigious
            voluntary work
          </span>
        </div>
        <div className="mx-auto">
          <Box
            sx={
              (matchesLg && { width: 1050, minHeight: 829 }) ||
              (matchesSm && { width: 600, minHeight: 400 }) ||
              (matchesXs && { width: 320, minHeight: 300 })
            }
          >
            <Masonry
              columns={(matchesLg && 3) || (matchesSm && 2) || (matchesXs && 1)}
              spacing={2}
            >
              {itemData?.map((item, index) => (
                <div
                  key={index}
                  onClick={openModal}
                  className="bg-gray-600 rounded-2xl cursor-grab"
                >
                  <div className="rounded-2xl overflow-hidden shadow opacity-100 hover:opacity-40 transition-all duration-400">
                    <img
                      src={`${item.img}?w=162&auto=format`}
                      srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      style={{
                        borderBottomLeftRadius: 4,
                        borderBottomRightRadius: 4,
                        display: "block",
                        width: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </Box>
        </div>
        <Link className="block mx-auto mt-6" to="/dashboard/gallery">
          <button className="button text-lg">See All Images</button>
        </Link>
      </div>
      {modalIsOpen && (
        <GalleryView modalIsOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default PhotoGallery;

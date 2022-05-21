import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BackupIcon from "@mui/icons-material/Backup";
import axios from "axios";
import baseAxios from "../../Api/instance";
import { toast } from "react-toastify";
import useGallery from "../../Hooks/useGallery";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { createTheme, useMediaQuery } from "@mui/material";

const AllGallery = () => {
  const { handleSubmit, register, reset } = useForm();
  const [isUploading, setIsUploading] = useState(false);
  const [photos, isLoading, refetch] = useGallery();
  console.log(photos);

  const onSubmit = (data) => {
    console.log(data.image[0]);
    const formData = new FormData();
    formData.set("image", data.image[0]);
    if (data.image[0]) {
      setIsUploading(true);
    }
    if (!data.image[0]) {
      toast.warning("Please Upload an image");
    }
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=1294a833c606fe6a53cbf96a2033073a`,
        formData
      )
      .then((res) => {
        if (res.data.data.url) {
          baseAxios.post("/photo", { img: res.data.data.url }).then((res) => {
            if (res.data.acknowledged) {
              toast.success("Image Uploaded Successfully");
              refetch();
            } else {
              toast.success("Image Upload Failed");
            }
            setIsUploading(false);
            reset();
          });
        }
      })
      .catch((error) => console.log(error));
  };

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

  return (
    <div className="relative">
      <form
        className="relative flex justify-center items-center gap-5 border p-10 rounded-3xl shadow-2xl mx-auto w-full lg:w-1/2 z-20"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={`border-2 shadow rounded-lg`}
          id="image-field"
          type="file"
          {...register("image")}
        />
        <button
          type="submit"
          className={`btn btn-primary text-white font-bold uppercase px-16 flex justify-center items-center gap-2 ${
            isUploading && "loading"
          }`}
          //   disabled={photo}
        >
          <BackupIcon />{" "}
          <span>{isUploading ? "Uploading" : "Upload"} Image</span>
        </button>
      </form>
      <div className="relative bg-gray-100 w-full flex flex-col justify-center pb-20 z-10">
        <div className="flex flex-col my-10 ">
          <h2 class="text-5xl font-bold text-gray-600 uppercase text-center">
            PHOTO GALLERY
          </h2>
          <hr className="border w-[10%] my-3 border-primary  mx-auto" />
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
              {photos?.data?.map((item, index) => (
                <div
                  key={index}
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
                    {/* <Label className="py-2">{item.title}</Label> */}
                  </div>
                </div>
              ))}
            </Masonry>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AllGallery;

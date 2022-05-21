import React, { useState } from "react";
import { useForm } from "react-hook-form";
import BackupIcon from "@mui/icons-material/Backup";
import axios from "axios";
import baseAxios from "../../Api/instance";
import { toast } from "react-toastify";
import { useQuery } from "react-query";

const AllGallery = () => {
  const { handleSubmit, register, reset } = useForm();
  const [isUploading, setIsUploading] = useState(false);
  //   const [photo, setPhoto] = useState(true);
  console.log(isUploading);

  const { data, isLoading } = useQuery();

  const onSubmit = (data) => {
    console.log(data.image[0]);
    const formData = new FormData();
    formData.set("image", data.image[0]);
    if (data.image[0]) {
      //   setPhoto(false);
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
            } else {
              toast.success("Image Upload Failed");
            }
            setIsUploading(false);
            reset();
            // setPhoto(true);
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form
        className="flex justify-center items-center gap-5 border p-10 rounded-3xl shadow-2xl mx-auto w-full lg:w-1/2"
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
    </div>
  );
};

export default AllGallery;

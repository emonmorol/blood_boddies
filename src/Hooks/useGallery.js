import { useQuery } from "react-query";
import baseAxios from "../Api/instance";

const useGallery = () => {
  const {
    data: photos,
    isLoading,
    refetch,
  } = useQuery("photoGallary", () => baseAxios.get("/photo"));
  console.log(photos);
  return [photos, isLoading, refetch];
};

export default useGallery;

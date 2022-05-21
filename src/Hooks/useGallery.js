import { useQuery } from "react-query";
import baseAxios from "../Api/instance";

const useGallery = () => {
  const { data: photos, isLoading } = useQuery("photoGallary", () =>
    baseAxios.get("/photo")
  );
  console.log(data);
  return;
};

export default useGallery;

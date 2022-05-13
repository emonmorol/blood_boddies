import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import { createTheme, useMediaQuery } from "@mui/material";

const PhotoGallery = () => {
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

  const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }));

  const itemData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyXMvtIk7nis1sQ1lisIcUOqIRGrm2nYJRnw&usqp=CAU",
      title: "Fern",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6fVVDPrcmpAW6YhkoRU4yIY-OcZJuSTs0w&usqp=CAU",
      title: "Snacks",
    },
    {
      img: "https://templates.bwlthemes.com/blood_donation/images/gallery_3.jpg",
      title: "Mushrooms",
    },
    {
      img: "https://img.freepik.com/free-photo/you-can-help-give-welfare-donate-concept_53876-121039.jpg?size=626&ext=jpg&ga=GA1.2.478927660.1652399878",
      title: "Tower",
    },
    {
      img: "https://templates.bwlthemes.com/blood_donation/images/gallery_2.jpg",
      title: "Sea star",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQozFekJAOhHkQKVZl8_wNQGe2xyU_wleXIAAlimnQ2euZG3lckR_gBVNiyIa6zpyoJal0&usqp=CAU",
      title: "Honey",
    },
    {
      img: "https://templates.bwlthemes.com/blood_donation/images/gallery_1.jpg",
      title: "Basketball",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCKn3Bm_IMMqBW5pdrMLFRDGsToHv0nN6CmQ&usqp=CAU",
      title: "Breakfast",
    },
    {
      img: "https://templates.bwlthemes.com/blood_donation/images/gallery_6.jpg",
      title: "Tree",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMFZzP9BVQHKohaeZYNJvQw5SESQ9sNHJsQ&usqp=CAU",
      title: "Burger",
    },
    {
      img: "https://templates.bwlthemes.com/blood_donation/images/gallery_5.jpg",
      title: "Camera",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRie2iDvGEy6DNn919j11WOYeeXp2YqcHCazg&usqp=CAU",
      title: "Coffee",
    },
    {
      img: "https://templates.bwlthemes.com/blood_donation/images/gallery_4.jpg",
      title: "Camping Car",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4hGEOrY6psxPruCKhbeB1eWmXuhqh4s9Tg&usqp=CAU",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",
      title: "Mountain",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  return (
    <div className="bg-gray-100 w-full flex flex-col justify-center py-20">
      <div className="flex flex-col my-10 ">
        <h2 class="text-5xl font-bold text-gray-600 uppercase text-center">
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
            {itemData.map((item, index) => (
              <div className="rounded-2xl overflow-hidden shadow" key={index}>
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
                <Label className="py-2">{item.title}</Label>
              </div>
            ))}
          </Masonry>
        </Box>
      </div>
    </div>
  );
};

export default PhotoGallery;

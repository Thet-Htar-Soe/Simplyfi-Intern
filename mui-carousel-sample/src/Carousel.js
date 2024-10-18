import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the description for Slide 1.",
    img: "https://via.placeholder.com/600x300?text=Slide+1",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the description for Slide 2.",
    img: "https://via.placeholder.com/600x300?text=Slide+2",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the description for Slide 3.",
    img: "https://via.placeholder.com/600x300?text=Slide+3",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ textAlign: "center", padding: 2 }}>
            <img src={slide.img} alt={slide.title} style={{ width: "100%", borderRadius: "8px" }} />
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              {slide.title}
            </Typography>
            <Typography variant="body1">{slide.description}</Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;

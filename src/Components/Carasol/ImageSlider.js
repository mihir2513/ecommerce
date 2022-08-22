import { Carousel } from "react-carousel-minimal";
import img from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
const images = [
  {
    image: img,
    caption: "JBL",
  },
  {
    image: img2,
    caption: "Boat",
  },
];
const captionStyle = {
  fontSize: "2em",
  fontWeight: "bold",
};
const slideNumberStyle = {
  fontSize: "20px",
  fontWeight: "bold",
};
const ImageSlider = () => {
  return (
    <Carousel
      data={images}
      radius="10px"
      time={2000}
      width="100%"
      height="100%"
      captionStyle={captionStyle}
      slideNumber={true}
      slideNumberStyle={slideNumberStyle}
      captionPosition="bottom"
      dots={true}
      pauseIconColor="white"
      pauseIconSize="40px"
      slideBackgroundColor="darkgrey"
      slideImageFit="cover"
      thumbnailWidth="100px"
      style={{
        textAlign: "center",
        margin: "40px auto",
        width: "100%",
      }}
    />
  );
};

export default ImageSlider;

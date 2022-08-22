import img1 from "../../assets/1_1.jpg";
import img2 from "../../assets/1_2.jpg";
import img3 from "../../assets/1_3.jpg";
import img4 from "../../assets/1_4.jpg";
import { Carousel } from "react-carousel-minimal";
const ProductImage = () => {
  const data = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
  ];
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <Carousel
        data={data}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          margin: "40px auto",
        }}
      />
    </div>
  );
};

export default ProductImage;

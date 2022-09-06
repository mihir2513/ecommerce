import { Carousel } from "react-carousel-minimal";
const ProductImage = (props) => {
  const data = [
    {
      image: `http://localhost:5000/public/images/product/${props.productImage}`,
    },
    {
      image: `http://localhost:5000/public/images/product/${props.image1}`,
    },
    {
      image: `http://localhost:5000/public/images/product/${props.image2}`,
    },
    {
      image: `http://localhost:5000/public/images/product/${props.image3}`,
    },
    {
      image: `http://localhost:5000/public/images/product/${props.image4}`,
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

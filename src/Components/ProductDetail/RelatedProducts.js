import { Box, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../Collection/ProductCard";
import img from "../../assets/copy.jpg";
import { makeStyles } from "@material-ui/core";
const containerStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  title: {
    margin: "auto",
    justifyContent: "center",
    display: "flex",
    position: "relative",
    fontWeight:"800"
  },
  productContainer: {
    margin: "auto",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
  productCard: {
    margin: "15px",
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),

    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
}));
const RelatedProducts = () => {
  const classes = containerStyle();
  const data = [
    {
      img: img,
      title: "Round Neck T-Shirt",
      price: "$25.00",
    },
    {
      img: img,
      title: "Round Neck T-Shirt",
      price: "$25.00",
    },
    {
      img: img,
      title: "Round Neck T-Shirt",
      price: "$25.00",
    },
  ];
  return (
    <>
      <Box className={classes.container}>
        <Typography
          className={classes.title}
          variant="h4"
          component="div"
          gutterBottom
        >
          Related Products
        </Typography>
        <Typography
          className={classes.title}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Browse The Collection of Top Products
        </Typography>
        <Box className={classes.productContainer}>
          {data.map((item, i) => (
            <ProductCard
              key={i}
              className={classes.productCard}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default RelatedProducts;

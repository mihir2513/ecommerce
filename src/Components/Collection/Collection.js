import { Box, Grid, Tab, Typography } from "@material-ui/core";
import React from "react";
import CollectionStyle from "./CollectionStyle";
import ProductCard from "./ProductCard";
import img from "./2copy.jpg";
const Collection = () => {
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
  const classes = CollectionStyle();
  return (
    <>
      <Box className={classes.container}>
        <Typography
          className={classes.title}
          variant="h5"
          component="div"
          gutterBottom
        >
          Our Top Collection
        </Typography>
        <Typography
          className={classes.title}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          Browse The Collection of Top Products
        </Typography>
        <Box className={classes.headerBottom}>
          <Grid container>
            <Grid item xs={4} />
            <Grid item xs={1}>
              <Tab label="For All" />
            </Grid>
            <Grid item xs={1}>
              <Tab label="For Man" />
            </Grid>
            <Grid item xs={1}>
              <Tab label="For Women" />
            </Grid>
            <Grid item xs={1}>
              <Tab label="For Childern" />
            </Grid>
          </Grid>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs md sm />
          {data.map((item, i) => (
            <ProductCard
              key={i}
              id={item.id}
              className={classes.productCard}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
          <Grid item xs md sm />
        </Grid>
      </Box>
    </>
  );
};

export default Collection;

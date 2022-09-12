import { Box, Tab, Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import CollectionStyle from "./CollectionStyle";
import ProductCard from "./ProductCard";
import img from "./2copy.jpg";
import { Topsellingproduct } from "../../service/ProductService";
const Collection = () => {
  const [topSellingData, setTopSellingData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await Topsellingproduct();
      console.log(data);
      setTopSellingData(data);
    };
    getData();
  }, []);
  const classes = CollectionStyle();
  return (
    <>
      {/* <Box className={classes.container}> */}
      {/* <Typography
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
        </Typography> */}
      {/* <Box className={classes.headerBottom}>
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
        </Box> */}
      {/* <Box style={{ height: "500px" }}> */}
      {/* <Grid container spacing={0}>
          <Grid item xs md sm />
          <Grid xs={5} md={5} sm={5}>
            {topSellingData.map((index) => (
              <Fragment key={index.productId_fk}>
                <ProductCard
                  id={index.productId_fk}
                  img={index.productImage}
                  title={index.productName}
                  price={index.productPrice}
                  colors={index.productColor}
                />
              </Fragment>
            ))}
          </Grid>
          <Grid item xs md sm />
        </Grid>{" "} */}
      {/* </Box> */}
      {/* </Box> */}
      <Grid container spacing={2}>
        <Grid item xs md sm />
        <Grid
          item
          xs={8}
          md={6}
          sm={6}
          container
          direction="column"
          spacing={3}
        >
          <Box
            sx={{
              pt: 5,
              pb: 5,
            }}
          >
            <Grid item xs md sm>
              {/* <ListTop /> */}
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
            </Grid>
          </Box>
          <Box style={{ height: "55vh" }}>
            <Grid item container spacing={2}>
              {topSellingData.map((index) => (
                <Fragment key={index.productId}>
                  <ProductCard
                    id={index.productId_fk}
                    img={index.productImage}
                    title={index.productName}
                    price={index.productPrice}
                    colors={index.productColor}
                  />
                </Fragment>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs md sm />
      </Grid>
    </>
  );
};

export default Collection;

import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import ListTop from "./ListTop";
import ProductCard from "../Collection/ProductCard";
import { getProduct } from "../../service/ProductService";
const Products = () => {
  const [productData, setProductData] = useState([]);
  // const data = [
  //   {
  //     title: "Belgian Chocolate",
  //     category: "Ice-cream shop",
  //     price: "$12",
  //     colors: [
  //       (theme) => theme.palette.secondary.main,
  //       (theme) => theme.palette.primary.main,
  //     ],
  //     img: s1,
  //     id: 1,
  //     star: [1, 2, 3, 4, 5],
  //   },
  //   {
  //     title: "Fresh Organic Tomato",
  //     category: "Vegitables shop",
  //     price: "$30",
  //     colors: [
  //       (theme) => theme.palette.success.main,
  //       (theme) => theme.palette.secondary.main,
  //     ],
  //     img: s2,
  //     id: 2,
  //     star: [1, 2, 3, 4],
  //   },
  //   {
  //     title: "Toys for Children",
  //     category: "Toy shop",
  //     price: "$10",
  //     colors: [
  //       (theme) => theme.palette.primary.main,
  //       (theme) => theme.palette.secondary.main,
  //     ],
  //     img: s3,
  //     id: 3,
  //     star: [1, 2, 3],
  //   },
  //   {
  //     title: "Digital Motion Lamp",
  //     category: "AtoZ shop",
  //     price: "$250",
  //     colors: [
  //       (theme) => theme.palette.error.main,
  //       (theme) => theme.palette.warning.main,
  //     ],
  //     img: s4,
  //     id: 4,
  //     star: [1, 2, 3, 4, 5],
  //   },
  //   {
  //     title: "B Natural Mixed Fruit",
  //     category: "Ice-cream shop",
  //     price: "$50",
  //     colors: [
  //       (theme) => theme.palette.secondary.main,
  //       (theme) => theme.palette.primary.main,
  //     ],
  //     img: s5,
  //     id: 5,
  //     star: [1, 2, 3, 4, 5],
  //   },
  // ];
  useEffect(() => {
    const getData = async () => {
      const data = await getProduct();
      console.log(data);
      setProductData(data);
      // localStorage.setItem('',)
    };
    getData();
  }, []);
  return (
    <>
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
              <ListTop />
            </Grid>
          </Box>
          <Grid item container spacing={2}>
            {productData.map((index) => (
              <Fragment key={index.productId}>
                <ProductCard
                  id={index.productId}
                  img={index.productImage}
                  title={index.productName}
                  price={index.productPrice}
                  colors={index.productColor}
                />
              </Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs md sm />
      </Grid>
    </>
  );
};

export default Products;

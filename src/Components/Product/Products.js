import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import ListTop from "./ListTop";
import s1 from "../../assets/1_1.jpg";
import s2 from "../../assets/1_2.jpg";
import s3 from "../../assets/1_3.jpg";
import s4 from "../../assets/1_4.jpg";
import s5 from "../../assets/1_4.jpg";
import ProductCard from "../Collection/ProductCard";
const Products = () => {
  const data = [
    {
      title: "Belgian Chocolate",
      category: "Ice-cream shop",
      price: "$12",
      colors: [
        (theme) => theme.palette.secondary.main,
        (theme) => theme.palette.primary.main,
      ],
      img: s1,
      id: 1,
      star: [1, 2, 3, 4, 5],
    },
    {
      title: "Fresh Organic Tomato",
      category: "Vegitables shop",
      price: "$30",
      colors: [
        (theme) => theme.palette.success.main,
        (theme) => theme.palette.secondary.main,
      ],
      img: s2,
      id: 2,
      star: [1, 2, 3, 4],
    },
    {
      title: "Toys for Children",
      category: "Toy shop",
      price: "$10",
      colors: [
        (theme) => theme.palette.primary.main,
        (theme) => theme.palette.secondary.main,
      ],
      img: s3,
      id: 3,
      star: [1, 2, 3],
    },
    {
      title: "Digital Motion Lamp",
      category: "AtoZ shop",
      price: "$250",
      colors: [
        (theme) => theme.palette.error.main,
        (theme) => theme.palette.warning.main,
      ],
      img: s4,
      id: 4,
      star: [1, 2, 3, 4, 5],
    },
    {
      title: "B Natural Mixed Fruit",
      category: "Ice-cream shop",
      price: "$50",
      colors: [
        (theme) => theme.palette.secondary.main,
        (theme) => theme.palette.primary.main,
      ],
      img: s5,
      id: 5,
      star: [1, 2, 3, 4, 5],
    },
  ];
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
            {data.map((index) => (
              <>
                <ProductCard
                  id={index.id}
                  img={index.img}
                  title={index.title}
                  category={index.category}
                  price={index.price}
                  star={index.star}
                  colors={index.colors}
                />
              </>
            ))}
          </Grid>
        </Grid>
        <Grid item xs md sm />
      </Grid>
    </>
  );
};

export default Products;

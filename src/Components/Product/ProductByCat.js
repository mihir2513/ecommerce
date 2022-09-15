import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import ListTop from "./ListTop";
import ProductCard from "../Collection/ProductCard";
import { getproductbycatid } from "../../service/ProductService";
import { useParams } from "react-router-dom";

const ProductByCat = () => {
  const [productData, setProductData] = useState([]);
  const catid = useParams();
  useEffect(() => {
    const getData = async (id) => {
      const data = await getproductbycatid(id).then((res) =>
        setProductData(res)
      );
    };
    getData(catid.id);
  }, [catid]);
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
          <Box style={{ height: "95vh" }}>
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
          </Box>
        </Grid>
        <Grid item xs md sm />
      </Grid>
    </>
  );
};

export default ProductByCat;

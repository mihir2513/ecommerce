import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getImagesByProductId,
  getProductbyid,
} from "../../service/ProductService";
import Details from "./Details";
import ProductImage from "./ProductImage";
import RelatedProducts from "./RelatedProducts";
import TabNavigation from "./TabNavigation";

export default function ProductDetails() {
  const productId = useParams();
  console.log(productId.id);
  const [productData, setProductData] = useState([]);
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    const getData = async (id) => {
      await getProductbyid(id).then((res) => {
        console.log(res);
        setProductData(res[0]);
      });
      await getImagesByProductId(id).then((res) => setImageData(res[0]));
    };
    getData(productId.id);
  }, [productId]);
  console.log(imageData);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs md sm />
        <Grid item xs={8} md={6} sm={6}>
          <Grid item container spacing={2}>
            <Grid item xs md sm>
              <ProductImage
                productImage={productData.productImage}
                image1={imageData.image1}
                image2={imageData.image2}
                image3={imageData.image3}
                image4={imageData.image4}
              />
            </Grid>
            <Grid item xs={12} md sm container>
              <Grid
                item
                xs
                md
                sm
                container
                direction="column"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={2} md={1} sm={1} />
                <Grid item xs={12} md={10} sm={10}>
                  <Details
                    productPrice={productData.productPrice}
                    productDecription={productData.productDecription}
                    productName={productData.productName}
                    productId={productData.productId}
                    productImage={productData.productImage}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              <TabNavigation
                productDecription={productData.productDecription}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs md sm />
      </Grid>
      <RelatedProducts />
    </>
  );
}

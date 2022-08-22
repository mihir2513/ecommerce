import { Grid } from "@material-ui/core";
import Details from "./Details";
import ProductImage from "./ProductImage";
import RelatedProducts from "./RelatedProducts";
import TabNavigation from "./TabNavigation";

export default function ProductDetails() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs md sm />
        <Grid item xs={8} md={6} sm={6}>
          <Grid item container spacing={2}>
            <Grid item xs md sm>
              <ProductImage />
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
                  <Details />
                </Grid>
              </Grid>
            </Grid>
            <Grid item container>
              <TabNavigation />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs md sm />
      </Grid>
      <RelatedProducts />
    </>
  );
}

import { Button, FormControl, Grid, MenuItem } from "@material-ui/core";
import { Box, Divider, Typography } from "@mui/material";
import { useState } from "react";
import CustomFormLabel from "../CustomElements/CustomFormLabel";
import CustomSelect from "../CustomElements/CustomSelect";
import FeatherIcon from "feather-icons-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Cart/CartSlice";

const Details = (props) => {
  // const [size, setSize] = useState("10");

  // const handleChange2 = (event2) => {
  //   setSize(event2.target.value);
  // };
  const [qty, setQty] = useState("10");
  const dispatch = useDispatch();
  const handleChange3 = (event3) => {
    setQty(event3.target.value);
  };

  return (
    <>
      <Typography
        fontWeight="600"
        sx={{
          fontSize: {
            xs: "24px",
            sm: "30px",
            lg: "30px",
          },
          mt: "5px",
        }}
      >
        {props.productName}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="400"
        sx={{
          mt: "10px",
          color: (theme) => theme.palette.grey,
          //   {console.loj}
        }}
      >
        {props.productDecription}
      </Typography>
      <Typography
        fontWeight="600"
        sx={{
          fontSize: {
            xs: "24px",
            sm: "30px",
            lg: "30px",
          },
          mt: "20px",
        }}
      >
        ${props.productPrice}
      </Typography>
      <Divider />
      <Box
        sx={{
          pt: 3,
          pb: 3,
        }}
      >
        <Grid container spacing={2}>
          {/* <Grid item xs={12} sm={6} lg={6}> */}
          {/* <Box display="flex" alignItems="center"> */}
          {/* <CustomFormLabel
                htmlFor="qty-select-outlined"
                sx={{
                  mt: 0,
                }}
              >
                Size.
              </CustomFormLabel> */}
          {/* <Box
                sx={{
                  ml: 2,
                  width: "180px",
                }}
              >
                <FormControl variant="outlined" fullWidth>
                  <CustomSelect
                    labelId="qty-label"
                    id="qty-select-outlined"
                    value={size}
                    onChange={handleChange2}
                    fullWidth
                    size="small"
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                    <MenuItem value={40}>4</MenuItem>
                    <MenuItem value={50}>5</MenuItem>
                  </CustomSelect>
                </FormControl>
              </Box> */}
          {/* </Box> */}
          {/* </Grid> */}
          <Grid item xs={12} sm={6} lg={6}>
            <Box display="flex" alignItems="center">
              <CustomFormLabel
                htmlFor="qty-select-outlined"
                sx={{
                  mt: 0,
                }}
              >
                Qty.
              </CustomFormLabel>
              <Box
                sx={{
                  ml: 2,
                  width: "180px",
                }}
              >
                <FormControl variant="outlined" fullWidth>
                  <CustomSelect
                    labelId="qty-label"
                    id="qty-select-outlined"
                    value={qty}
                    onChange={handleChange3}
                    fullWidth
                    size="small"
                  >
                    <MenuItem value={10}>1</MenuItem>
                    <MenuItem value={20}>2</MenuItem>
                    <MenuItem value={30}>3</MenuItem>
                    <MenuItem value={40}>4</MenuItem>
                    <MenuItem value={50}>5</MenuItem>
                  </CustomSelect>
                </FormControl>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{
          pt: 3,
          pb: 3,
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} lg={6}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              sx={{
                pt: "13px",
                pb: "13px",
                display: "block",
                width: "100%",
                mt: "5",
                borderRadius: "9px",
              }}
            >
              Buy Now
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <Button
              variant="contained"
              size="large"
              color="primary"
              display="flex"
              alignitems="center"
              justifycontent="center"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: props.productId,
                    img: props.productImage,
                    title: props.productName,
                    price: props.productPrice,
                  })
                )
              }
              sx={{
                pt: "13px",
                pb: "13px",
                width: "100%",
                borderRadius: "9px",
              }}
            >
              <FeatherIcon
                icon="shopping-cart"
                width="20"
                display="flex"
                alignitems="center"
              />
              <Box
                component="span"
                sx={{
                  ml: 1,
                  whiteSpace:"nowrap",
                }}
              >
                Add to Cart
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Details;

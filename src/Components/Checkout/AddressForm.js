import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Avatar, Card, CardContent, CardHeader } from "@material-ui/core";
import { useSelector } from "react-redux";

const AddressForm = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <>
      {/* <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid> */}
      <Card
        variant="outlined"
        sx={{
          p: 3,
          m: 2,
          borderRadius: "20px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 110, height: 110 }}
              src={`http://localhost:5000/public/images/user/${localStorage.getItem(
                "image"
              )}`}
            />
          }
          title={
            localStorage.getItem("firstname") +
            " " +
            localStorage.getItem("lastname")
          }
          // C:\Users\Mihir\Desktop\backend\ecommercebakend\public\images\user\userImg-1662007258465processed-2f95b445-4e72-4880-937b-561ba9fcf616_tCf2jdAd.jpeg
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Address
          </Typography>
          <Typography variant="body2">
            {localStorage.getItem("address")}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};
export default AddressForm;

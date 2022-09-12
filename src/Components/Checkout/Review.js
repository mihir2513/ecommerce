import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux/es/exports";

export default function Review() {
  const cart = useSelector((state) => state.cart);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.cart?.map((item, i) => (
          <ListItem key={i} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.title + " " + item.quantity} />
            <Typography variant="body2">{item.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Quantity" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {getTotal().totalQuantity}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${getTotal().totalPrice}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <strong> Shipping</strong>
          </Typography>
          <Typography gutterBottom>
            {localStorage.getItem("firstname") +
              " " +
              localStorage.getItem("lastname")}
          </Typography>
          <Typography gutterBottom>
            {localStorage.getItem("address")}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <strong> Payment details</strong>
          </Typography>
          <Grid container>
            <>
              <Grid item xs={6}>
                <Typography gutterBottom>Cash On Delivery</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom></Typography>
              </Grid>
            </>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

import React from "react";

import { Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/Cart/CartSlice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Arial, Helvetica, sans-serif",
        borderBottom: "1px solid lightblue",
        pb: "20px",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <Typography variant="h5">{props.title}</Typography>
        <Box
          sx={{ flex: "1", display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h5">Price:{props.price}</Typography>
          <Typography variant="h5">
            Total:{(props.price * props.quantity).toFixed(2)}
          </Typography>
        </Box>
        <Box
          sx={{ flex: "1", display: "flex", justifyContent: "space-between" }}
        >
          <Button
            size="medium"
            disableElevation
            variant="contained"
            onClick={() => dispatch(incrementQuantity(props.id))}
          >
            +
          </Button>
          <Typography variant="h6">{props.quantity}</Typography>
          <Button
            size="medium"
            disableElevation
            variant="contained"
            onClick={() => dispatch(decrementQuantity(props.id))}
          >
            -
          </Button>
        </Box>

        <button
          className="cartItem__removeButton"
          onClick={() => dispatch(removeItem(props.id))}
        >
          Remove
        </button>
      </Box>
      <img
        src={`http://localhost:5000/public/images/product/${props.image}`}
        alt="product"
        style={{ maxWidth: "80px", objectFit: "cover", marginLeft: "40px" }}
      ></img>
    </Box>
  );
};

export default CartItem;

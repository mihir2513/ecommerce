import { Box, Typography, Button } from "@mui/material";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
const Cart = () => {
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
  const onBynow=()=>{}
  return (
    <>
      <Box sx={{ width: "500px", padding: "20px" }}>
        <Typography variant="h3">Your Cart</Typography>
        {/* <h3>Shopping Cart</h3> */}
        {cart.cart?.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            image={item.img}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <Typography variant="h3">
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>:
        </Typography>
        {getTotal().totalQuantity > 0 ? (
          <Link to="/Checkout">
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
          </Link>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default Cart;

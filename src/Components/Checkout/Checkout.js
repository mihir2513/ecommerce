import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../Extra/Copyright";
import AddressForm from "./AddressForm";
import Review from "./Review";
import { addOrder } from "../../service/OrderService";
import { useDispatch, useSelector } from "react-redux/es/exports";
import jwt_decode from "jwt-decode";
import { addorderdetail } from "../../service/OrderDetailService";
import { clearCart } from "../../redux/Cart/CartSlice";
const steps = ["Shipping address", "Review your order"];

const theme = createTheme();

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const cart = useSelector((state) => state.cart);
  const disptch = useDispatch();
  const user = jwt_decode(localStorage.getItem("accessToken"));
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };
  const tPrice = getTotal().totalPrice;
  const formatDate = (date) => {
    return [
      date.getDate().toString().padStart(2, "0"),
      (date.getMonth() + 1).toString().padStart(2, "0"),
      date.getFullYear(),
    ].join("/");
  };
  const orderData = {
    orderDate: formatDate(new Date()),
    orderAmount: tPrice,
    paymentType: "COD",
    paymentStatus: "Done",
    userId_fk: user.userId,
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <Review />;
      // case 2:
      //   return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      if (orderData.orderAmount > 0) {
        console.log(orderData);
        addOrder(orderData).then((res) => {
          addorderdetail({ orderId: res.insertId, cartData: cart.cart }).then(
            (res) => {
              console.log(res);
              if (res.affectedRows > 0) {
                disptch(clearCart());
              }
            }
          );
        });
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleOrder = () => {
    console.log(orderData);
    // addOrder(data);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
};
export default Checkout;

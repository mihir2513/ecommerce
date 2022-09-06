import {
  CardHeader,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Card } from "@mui/material";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IsAutharized } from "../../redux/User/UserSlice";
import { getorderbyuserId } from "../../service/OrderService";
import OrderItem from "./OrderItem";
const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  // const user = useSelector((state) => state.user);
  const disptch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getProducts = async () => {
      const user = jwtDecode(localStorage.getItem("accessToken"));
      console.log(user.userId);
      await getorderbyuserId(user.userId).then((res) => {
        console.log(res);
        if (res === undefined) {
          disptch(IsAutharized(false));
          alert("You are Not authoraized");
          navigate("/login");
        } else {
          setOrderData(res);
        }
      });
    };
    getProducts();
  }, []);
  return (
    <>
      {/* <Card variant="outlined" sx={{ p: 3, m: 2, borderRadius: "20px" }}>
        <Box sx={{}}>
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{ m: "auto", display: "flex", justifyContent: "center" }}
          >
            My Orders
          </Typography>
        </Box>
        <Card
          variant="outlined"
          sx={{ p: 3, m: 2, display: "flex", borderRadius: "20px" }}
        >
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Typography component="div" variant="h5">
              Order Date
            </Typography>
            <Typography component="div" variant="h5">
              Payment Status
            </Typography>
            <Typography component="div" variant="h5">
              Payment Type
            </Typography>
            <Typography component="div" variant="h5">
              Order Amount
            </Typography>
            <Typography component="div" variant="h5">
              Order Details
            </Typography>
          </CardContent>
        </Card>
        {orderData.map((item) => (
          <OrderItem
            key={item.orderId}
            id={item.orderId}
            orderDate={item.orderDate}
            paymentStatus={item.paymentStatus}
            paymentType={item.paymentType}
            orderAmount={item.orderAmount}
          />
        ))}
      </Card> */}
      <Card variant="outlined" sx={{ p: 3, m: 2, borderRadius: "20px" }}>
        <CardHeader title="My Order" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left"> Order Date</TableCell>
                <TableCell align="left">Payment Status</TableCell>
                <TableCell align="left">Payment Type</TableCell>
                <TableCell align="left">Order Amount</TableCell>
                <TableCell align="left">Order Details</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            {orderData.map((item) => (
              <OrderItem
                key={item.orderId}
                id={item.orderId}
                orderDate={item.orderDate}
                paymentStatus={item.paymentStatus}
                paymentType={item.paymentType}
                orderAmount={item.orderAmount}
              />
            ))}
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default Orders;

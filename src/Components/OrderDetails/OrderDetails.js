import {
  CardContent,
  CardHeader,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getorderdetailbyid,
  getproductbyorderid,
} from "../../service/OrderDetailService";
import OrderDetailsItem from "./OrderDetailsItem";

const OrderDetails = () => {
  const orderId = useParams();
  const [productData, setProductData] = useState([]);
  const [orderDetaisData, setOrderDetaisData] = useState([]);
  console.log(orderId.id);
  useEffect(() => {
    const getOrderDetails = async (id) => {
      await getorderdetailbyid(id).then((res) => setOrderDetaisData(res));
      await getproductbyorderid(id).then((res) => {
        console.log(res);
        setProductData(res);
      });
    };
    getOrderDetails(orderId.id);
  }, [orderId]);
  console.log(productData);
  const mearged = productData.map((item, i) =>
    Object.assign({}, item, orderDetaisData[i])
  );
  console.log(mearged);
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    mearged.forEach((item) => {
      totalQuantity += item.orderQty;
      totalPrice += item.productPrice * item.orderQty;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <Card variant="outlined" sx={{ p: 3, m: 2, borderRadius: "20px" }}>
        <CardHeader title="My Order Details" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Product Image</TableCell>
                <TableCell align="left">Product Name</TableCell>
                <TableCell align="left">Product Price</TableCell>
                <TableCell align="left">Product Decription</TableCell>
                <TableCell align="left">Product Quantity</TableCell>
                <TableCell align="left">Total</TableCell>
                {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
              </TableRow>
            </TableHead>
            {mearged.map((item) => (
              <OrderDetailsItem
                key={item.productId}
                id={item.productId}
                productName={item.productName}
                productPrice={item.productPrice}
                productDecription={item.productDecription}
                productImage={item.productImage}
                orderQty={item.orderQty}
              />
            ))}
          </Table>
        </TableContainer>
        <CardContent>
        <Typography variant="h3">
          total ({getTotal().totalQuantity} items) :{" "}
          <strong>${getTotal().totalPrice}</strong>:
        </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default OrderDetails;

// import {  } from "@material-ui/core";
import { TableBody, TableRow, TableCell, Avatar } from "@material-ui/core";
import React from "react";

const OrderDetailsItem = (props) => {
  
  return (
    <>
      {/* <Card
        variant="outlined"
        sx={{ p: 3, m: 2, display: "flex", borderRadius: "20px" }}
      >
        <Box sx={{ display: "flex" }}>
          <CardContent
            sx={{
              flex: "1 0 auto",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <img
              style={{ width: "15%", height: "100%" }}
              alt={props.productImage}
              src={`http://localhost:5000/public/images/product/${props.productImage}`}
            ></img>
            <Typography component="div" variant="h5">
              {props.productName}
            </Typography>
            <Typography component="div" variant="h5">
              $ {props.productPrice}
            </Typography>
            <Typography component="div" variant="h5">
              {props.productDecription}
            </Typography>
          </CardContent>
        </Box>
      </Card> */}

      <TableBody>
        <TableRow
          key={props.productName}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">
            <Avatar
              alt={localStorage.getItem("image")}
              src={`http://localhost:5000/public/images/product/${props.productImage}`}
              sx={{ width: 110, height: 110 }}
            />
          </TableCell>
          <TableCell align="left">{props.productName}</TableCell>
          <TableCell align="left"> ${props.productPrice}</TableCell>
          <TableCell align="left">{props.productDecription}</TableCell>
          <TableCell align="left">{props.orderQty}</TableCell>
          <TableCell align="left">
           ${props.productPrice * props.orderQty}
          </TableCell>
          {/* <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell> */}
        </TableRow>
      </TableBody>
    </>
  );
};

export default OrderDetailsItem;

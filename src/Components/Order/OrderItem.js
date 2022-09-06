import { Card, CardContent, Typography, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import React from "react";
import { Link } from "react-router-dom";
import { TableBody, TableRow, TableCell, Avatar } from "@material-ui/core";
const OrderItem = (props) => {
  return (
    <>
      {/* <Card
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
            {props.orderDate}
          </Typography>
          <Typography component="div" variant="h5">
            {props.paymentStatus}
          </Typography>
          <Typography component="div" variant="h5">
            {props.paymentType}
          </Typography>
          <Typography component="div" variant="h5">
            {props.orderAmount}
          </Typography>
          <IconButton
            component={Link}
            to={`/orderDetails/${props.id}`}
          >
            <InfoIcon />
          </IconButton>
        </CardContent>
      </Card> */}
      <TableBody>
        <TableRow
          key={props.productName}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell align="left">{props.orderDate}</TableCell>
          <TableCell align="left"> {props.paymentStatus}</TableCell>
          <TableCell align="left">{props.paymentType}</TableCell>
          <TableCell align="left"> {props.orderAmount}</TableCell>
          <TableCell align="left">
            {" "}
            <IconButton component={Link} to={`/orderDetails/${props.id}`}>
              <InfoIcon />
            </IconButton>
          </TableCell>
          {/* <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell> */}
        </TableRow>
      </TableBody>
    </>
  );
};

export default OrderItem;

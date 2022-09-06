import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="/">Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;

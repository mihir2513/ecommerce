import { styled, Typography } from "@material-ui/core";
import React from "react";

const CustomFormLabel = styled((props) => (
  <Typography
    variant="h6"
    {...props}
    component="label"
    htmlFor={props.htmlFor}
  />
))(() => ({
  marginBottom: "5px",
  marginTop: "15px",
  display: "block",
}));

export default CustomFormLabel;

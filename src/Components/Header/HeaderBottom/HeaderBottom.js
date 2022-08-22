import { Box, Grid, Tab } from "@material-ui/core";
import React from "react";
import HeaderBottomStyle from "./HeaderBottomStyle";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  const classes = HeaderBottomStyle();
  return (
    <>
      <Box className={classes.headerBottom}>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={1}>
            <Link to="/header/products">
              <Tab label="Item One" />
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Tab label="Item One" />
          </Grid>
          <Grid item xs={1}>
            <Tab label="Item One" />
          </Grid>
          <Grid item xs={1}>
            <Tab label="Item One" />
          </Grid>
          <Grid item xs={1}>
            <Tab label="Item One" />
          </Grid>
          <Grid item xs={1}>
            <Tab label="Item One" />
          </Grid>
        </Grid>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default HeaderBottom;

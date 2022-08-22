import { Box, ButtonGroup, Grid, IconButton } from "@material-ui/core";
import React from "react";
import HeaderTopLogo from "./HeaderTopLogo";
import HeaderTopStyle from "./HeaderTopStyle";
import logo from "../../../assets/logo.png";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";
const HeaderTop = () => {
  const classes = HeaderTopStyle();
  return (
    <>
      <Box className={classes.headerTop}>
        <Box className={classes.headerContainer}>
          <Grid container spacing={2}>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Link to="/">
              <HeaderTopLogo className={classes.headerLogo} src={logo} /></Link>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={5}>
              <SearchBar
              // value={searched}
              // onChange={(searchVal) => requestSearch(searchVal)}
              // onCancelSearch={() => cancelSearch()}
              />
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <ButtonGroup className={classes.headerButton}>
                <Link to="/login">
                  <IconButton>
                    <PermIdentityOutlinedIcon />
                  </IconButton>
                </Link>
                <Link to="/header/productDetails">
                  <IconButton>
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                </Link>
              </ButtonGroup>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HeaderTop;

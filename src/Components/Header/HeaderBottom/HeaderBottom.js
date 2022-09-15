import { Box, Grid, Tab } from "@material-ui/core";
import React from "react";
import HeaderBottomStyle from "./HeaderBottomStyle";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { getcategory } from "../../../service/categoryService";
import { useState } from "react";
import { getproductbycatid } from "../../../service/ProductService";
const HeaderBottom = () => {
  const classes = HeaderBottomStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // getcategory().then((res) => {
    //   console.log(res )
    //   setcategoryData(res)});
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProduct = (id) => {
    getproductbycatid(id).then((res) => {
      console.log(res);
    });
  };
  const [categoryData, setcategoryData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getcategory().then((res) => {
        console.log(res);
        setcategoryData(res);
      });
      // localStorage.setItem('',)
    };
    getData();
  }, []);
  return (
    <>
      <Box className={classes.headerBottom}>
        <Grid container>
          <Grid item xs />
          <Grid item xs={1}>
            <Tab
              label="Categories"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {categoryData.map((index) => (
                <MenuItem
                component={Link}
                to={`/header/productsbycat/${index.categoryId}`}
                  // onClick={() => {
                  //   getproductbycatid(index.categoryId).then((res) => {
                  //     console.log(res);
                  //   });
                  // }}
                >
                  {index.categoryName}
                </MenuItem>
              ))}

              {/* <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
          </Grid>
          <Grid item xs={1}>
            <Link to="/header/products">
              <Tab label="Products" />
            </Link>
          </Grid>

          {/* <Grid item xs={1}>
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
          </Grid> */}
          <Grid item xs />
        </Grid>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default HeaderBottom;

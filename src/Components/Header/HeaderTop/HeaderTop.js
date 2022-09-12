import { Box, ButtonGroup, Grid, IconButton } from "@material-ui/core";
// import {Autocomplete} from "@mui/lab";
// import autocomplete
import Autocomplete from "@mui/material/Autocomplete";
import { useRef, useState } from "react";
import HeaderTopLogo from "./HeaderTopLogo";
import HeaderTopStyle from "./HeaderTopStyle";
import logo from "../../../assets/logo.png";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchBar from "material-ui-search-bar";
import { Link, useNavigate } from "react-router-dom";
import { Drawer, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Cart from "../../Cart/Cart";
import { IsAutharized } from "../../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { searchproduct } from "../../../service/ProductService";
import SearchIcon from "@mui/icons-material/Search";

const HeaderTop = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const searchref = useRef();
  const navigate = useNavigate();
  // const [search, setSearch] = useState();
  const [searchRe, setSearchRe] = useState([]);
  const disptch = useDispatch();
  const handleLogOut = () => {
    swal({
      title: "Are you sure?",
      text: "are you sure want to log out",
      icon: "warning",
      buttons: ["No Go Back!", "Log Out"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.clear();
        disptch(IsAutharized(false));
        swal("You have been logged out successfully.", {
          icon: "success",
        });
      } else {
        swal("you are not logged out");
      }
    });
  };
  const getTotalQuantity = () => {
    let total = 0;
    cart.cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };
  const handleSearch = () => {
    console.log(searchref.current);
    searchproduct(searchref.current.value).then((res) => {
      setSearchRe(res.map((option) => option.productName));
      console.log(res);
    });
  };
  const handleSubmit = () => {
    console.log(searchref.current.value);
    searchproduct(searchref.current.value).then((res) => {
      console.log(res);
      console.log(res[0].productId);
      navigate(`/header/productDetails/${res[0].productId}`);
      // <SearchProductDetails id={res[0].productId} />;
      // navigate('/SearchProductDetails')
    });
  };
  const classes = HeaderTopStyle();
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Box className={classes.headerTop}>
        <Box className={classes.headerContainer}>
          <Grid container spacing={2}>
            <Grid item xs={1} sm={1} md={1} />
            <Grid item xs={2} sm={1} md={1}>
              <Link to="/">
                <HeaderTopLogo className={classes.headerLogo} src={logo} />
              </Link>
            </Grid>
            <Grid item xs={1} sm={1} md={1} />
            <Grid item xs={7} sm={6} md={4}>
              <Autocomplete
                freeSolo
                disablePortal
                id="combo-box-demo"
                disableClearable
                options={searchRe}
                // sx={{ width: 400 }}
                renderInput={(params) => (
                  <>
                    <TextField
                      {...params}
                      onChange={handleSearch}
                      inputRef={searchref}
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                        endAdornment: (
                          <IconButton onClick={handleSubmit}>
                            <SearchIcon />
                          </IconButton>
                        ),
                      }}
                      label="Search"
                    />
                  </>
                )}
              />

              {/* <Autocomplete /> */}
              {/* <SearchBar
                datasource={searchRe.dataSource}
                value={search}
                onChange={handleSearch}
                // autoComplete={search}
              /> */}
            </Grid>
            <Grid item xs={1} sm={1} md={2} />
            <Grid item xs={12} sm={12} md={3}>
              {/* <ButtonGroup className={classes.headerButton}> */}
              {user.user ? (
                <>
                  <IconButton onClick={handleLogOut}>
                    <LogoutIcon />
                  </IconButton>
                  <Link to="/Edit">
                    <IconButton>
                      <lord-icon
                        src="https://cdn.lordicon.com/dqxvvqzi.json"
                        trigger="hover"
                        colors="outline:#121331,primary:#000000,secondary:#4bb3fd"
                        style={{ width: "50px", height: "50px" }}
                      ></lord-icon>
                    </IconButton>
                  </Link>
                  <Link to="/myorders">
                    <IconButton>
                      <Typography
                        variant="h6"
                        fontWeight="500"
                        sx={{ fontSize: "1em" }}
                      >
                        My Orders
                      </Typography>
                    </IconButton>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <IconButton>
                      <LoginIcon />
                    </IconButton>
                  </Link>
                </>
              )}

              {/* <Link to="/header/productDetails">
                  <IconButton>
                    <ShoppingCartOutlinedIcon />
                  </IconButton>
                </Link> */}
              <IconButton onClick={() => setCartOpen(true)}>
                {/* <ShoppingCartOutlinedIcon /> */}
                <lord-icon
                  src="https://cdn.lordicon.com/cllunfud.json"
                  trigger="hover"
                  style={{ width: "50px", height: "50px" }}
                ></lord-icon>
                <p style={{ display: "contents" }}>{getTotalQuantity() || 0}</p>
              </IconButton>
              <Drawer
                anchor="right"
                open={cartOpen}
                sx={{ width: "50%" }}
                onClose={() => setCartOpen(false)}
              >
                <Cart />
              </Drawer>
              {/* </ButtonGroup> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HeaderTop;

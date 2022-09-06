import {
  Box,
  ButtonGroup,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import HeaderTopLogo from "./HeaderTopLogo";
import HeaderTopStyle from "./HeaderTopStyle";
import logo from "../../../assets/logo.png";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";
import { Drawer } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import Cart from "../../Cart/Cart";
import { IsAutharized } from "../../../redux/User/UserSlice";
import { useDispatch } from "react-redux";
const HeaderTop = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(user)
  const disptch = useDispatch();
  const [isLogout, setIsLogout] = useState(true);
  const handleLogOut = () => {
    localStorage.clear();
    disptch(IsAutharized(false));
    console.log(user);
    // setIsLogout(false);
    // console.log(isLogout);
  };
  const getTotalQuantity = () => {
    let total = 0;
    cart.cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const classes = HeaderTopStyle();
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Box className={classes.headerTop}>
        <Box className={classes.headerContainer}>
          <Grid container spacing={2}>
            <Grid item xs={1} />
            <Grid item xs={2}>
              <Link to="/">
                <HeaderTopLogo className={classes.headerLogo} src={logo} />
              </Link>
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
              {/* <ButtonGroup className={classes.headerButton}> */}
              {user.user ? (
                <>
                  <IconButton onClick={handleLogOut}>
                    <LogoutIcon />
                  </IconButton>
                  <Link to="/Edit">
                    <IconButton>
                      <PermIdentityOutlinedIcon />
                    </IconButton>
                  </Link>
                  <Link to="/myorders">
                    <IconButton>
                      <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
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
                <ShoppingCartOutlinedIcon />
                <p style={{ display: "contents" }}>{getTotalQuantity() || 0}</p>
              </IconButton>
              <Drawer
                anchor="right"
                open={cartOpen}
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

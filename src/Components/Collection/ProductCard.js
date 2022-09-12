import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Grid, IconButton } from "@material-ui/core";
import Zoom from "@mui/material/Zoom";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addToCart } from "../../redux/Cart/CartSlice";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  console.log(props.id)
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
  const dispatch = useDispatch();
  const url = "http://localhost:5000";
  return (
    <>
      <Grid item xs={12} lg={3} sm={4} display="flex" key={props.id}>
        <Card
          sx={{ maxWidth: 345 }}
          onMouseOver={() => setState({ raised: true, shadow: 3 })}
          onMouseOut={() => setState({ raised: false, shadow: 1 })}
          {...props}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              src={`${url}/public/images/product/${props.img}`}
              alt="Live from space album cover"
              sx={{ height: "30vh", width: "100" }}
            />
            <CardContent>
              <Typography>{props.title}</Typography>
              <Typography>{props.price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {state.raised ? (
              <Box>
                <IconButton
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: props.id,
                        img: props.img,
                        title: props.title,
                        price: props.price,
                      })
                    )
                  }
                >
                  <Zoom
                    in={state.raised}
                    style={{ transitionDelay: state.raised ? "500ms" : "0ms" }}
                  >
                    <AddShoppingCartIcon />
                    {/* <InfoIcon/> */}
                  </Zoom>
                </IconButton>
                <IconButton
                  component={Link}
                  to={`/header/productDetails/${props.id}`}
                >
                  <Zoom
                    in={state.raised}
                    style={{ transitionDelay: state.raised ? "500ms" : "0ms" }}
                  >
                    <InfoIcon />
                  </Zoom>
                </IconButton>
              </Box>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Grid, IconButton } from "@material-ui/core";
import Zoom from "@mui/material/Zoom";
import { useState } from "react";
const ProductCard = (props) => {
  const [state, setState] = useState({
    raised: false,
    shadow: 1,
  });
  return (
    <>
      <Grid
        item
        xs={12}
        lg={3}
        sm={4}
        display="flex"
        alignItems="stretch"
        key={props.id}
      >
        <Card
          sx={{ maxWidth: 345 }}
          onMouseOver={() => setState({ raised: true, shadow: 3 })}
          onMouseOut={() => setState({ raised: false, shadow: 1 })}
          {...props}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              src={props.img}
              alt="Live from space album cover"
            />
            <CardContent>
              <Typography>{props.title}</Typography>
              <Typography>{props.price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {state.raised ? (
              <IconButton>
                <Zoom
                  in={state.raised}
                  style={{ transitionDelay: state.raised ? "500ms" : "0ms" }}
                >
                  <AddShoppingCartIcon />
                </Zoom>
              </IconButton>
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

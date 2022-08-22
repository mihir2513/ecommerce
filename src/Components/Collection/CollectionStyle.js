import { makeStyles } from "@material-ui/core";

const CollectionStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  title: {
    margin: "auto",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
  productContainer:{
    margin: "auto",
    justifyContent: "center",
    display: "flex",
    position: "relative",
  },
  productCard: {
    margin:"15px",
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.complex,
    }),

    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
  },
}));
export default CollectionStyle;

import { makeStyles } from "@material-ui/core";

const HeaderTopStyle = makeStyles(() => ({
  headerTop: {
    backgroundColor: "transparent",
    padding: "25px 0",
    borderBottom: "1px solid #eeeeee",
  },
  headerContainer: {
    // maxWidth: "1500px",
    display: "flex",
    marginTop: "0",
    marginRight: "-15px",
    marginLeft: "-15px",
    justifyContent: "space-between",

  },
  headerLogo: {
    textAlign: "left",
    verticalAlign: "middle",
    maxWidth: "100%",
    margin: "auto",
  },
  headerSearch: {
    paddingLeft: "15px",
     width: '50%',
  },
  headerButton:{
    width:"50px",
  },
}));
export default HeaderTopStyle;

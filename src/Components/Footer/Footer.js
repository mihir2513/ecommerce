import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Copyright from "../Extra/Copyright";
import { CssBaseline } from "@material-ui/core";

const Footer = () => {
  return (
    // <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom></Typography>
    //     <Typography
    //       variant="subtitle1"
    //       align="center"
    //       component="p"
    //     ></Typography>
    //     <Copyright />
    //   </Container>
    // </Box>
    <>
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      > */}
      {/* <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            Sticky footer
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {"Pin a footer to the bottom of the viewport."}
            {"The footer will move as the main element of the page grows."}
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container> */}
      <Box
        component="footer"
        sx={{
          position: "fixed",
          left: "0",
          bottom: "0",
          width: "100%",
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="lg">
          {/* <Typography variant="body1">
            My sticky footer can be found here.
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
      {/* </Box> */}
    </>
  );
};

export default Footer;

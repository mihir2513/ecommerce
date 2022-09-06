import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import ListIcon from "@mui/icons-material/List";
const ListTop = () => {
  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          {/* <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Company name
          </Typography> */}
          <Box sx={{ flexGrow: 1 }}>
            <IconButton>
              <GridViewIcon />
            </IconButton>
            <IconButton>
              <ListIcon />
            </IconButton>
          </Box>
          <nav></nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ListTop;

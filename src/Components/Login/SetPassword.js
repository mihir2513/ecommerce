import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { updateUserPassword } from "../../service/User";
import { sendMailForgatePassword } from "../../service/mailService";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";

const theme = createTheme();
const SetPassword = () => {
  const id = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(id.id);
  const onsubmit = (data) => {
    console.log(data);
    updateUserPassword(id.id, data).then((res) => {
      console.log(res);
      if (res.affectedRows === 1) {
        swal(
          "password changed successfully !",
          "You clicked the button!",
          "success"
        );
        //alert("productadd successfully");
        navigate("/Login");
      } else {
        alert("something went wrong");
      }
    });
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Forgot Password
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="userPassword"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("userPassword", {
                  required: "Password is required.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: "plese enter only valid email",
                  },
                })}
                error={Boolean(errors.userPassword)}
                helperText={errors.userPassword?.message}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit(onsubmit)}
              >
                submit
              </Button>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
    </>
  );
};

export default SetPassword;

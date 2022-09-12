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
import { getuserbyemail } from "../../service/User";
import { sendMailForgatePassword } from "../../service/mailService";
import swal from "sweetalert";

const theme = createTheme();
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    getuserbyemail(data).then((res) => {
      console.log(res);
      if (res[0] == null) {
        swal("you are not a valid user", "Error", "error");
      } else {
        const passworddata = {
          id: res[0].userId,
          name: data.userEmail,
          subject: "for forgot password",
          message: "click link and set your password",

          // html:<a href='http://localhost:3000/home'>home</a>
        };
        sendMailForgatePassword(passworddata).then((res) => {
          console.log(res);
          if (res.success == true) {
            swal(
              "pelace check your gmail we are sending a mali for forgot password",
              {
                icon: "success",
              }
            );
          } else {
            swal("Your imaginary file is safe!");
          }
        });
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
                id="email"
                label="Email Address"
                name="userEmail"
                autoComplete="email"
                autoFocus
                {...register("userEmail", {
                  required: "Email is required.",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "plese enter only valid email",
                  },
                })}
                error={Boolean(errors.userEmail)}
                helperText={errors.userEmail?.message}
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

export default ForgotPassword;

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
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useState } from "react";
const theme = createTheme();
const SetPassword = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const formSchema = Yup.object().shape({
    userPassword: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmpassword: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("userPassword")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

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
                type={showPassword ? "text" : "password"}
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
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowPassword((s) => !s)}>
                      {showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff></VisibilityOff>
                      )}
                    </IconButton>
                  ),
                }}
                error={Boolean(errors.userPassword)}
                helperText={errors.userPassword?.message}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="Password"
                type={showConfPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                {...register("confirmpassword", {
                  required: "Password is required.",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message: "plese enter only valid email",
                  },
                })}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={() => setShowConfPassword((s) => !s)}>
                      {showConfPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff></VisibilityOff>
                      )}
                    </IconButton>
                  ),
                }}
                error={Boolean(errors.confirmpassword)}
                helperText={errors.confirmpassword?.message}
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

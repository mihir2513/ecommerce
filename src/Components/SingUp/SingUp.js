import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Copyright from "../Extra/Copyright";
import { useState } from "react";
// import axios from "axios";
import { postUser } from "../../service/User";

const theme = createTheme();

const SingUp = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data.userImg[0]);
    console.log(data);
    const formData = new FormData();
    formData.append("userFirstName", data.userFirstName);
    formData.append("userLastName", data.userLastName);
    formData.append("userMobileNo", Number(data.userMobileNo));
    formData.append("userEmail", data.userEmail);
    formData.append("userPassword", data.userPassword);
    formData.append("userImg", data.userImg[0]);
    formData.append("userAddress", data.userAddress);
    console.log(formData);
    postUser(formData)
      .then((res) => {
        console.log(res);
        if (res.affectedRows === 1) {
          setIsError(false);
          navigate("/login");
        } else {
          setIsError(true);
        }
      })
      .catch((error) => {
        setIsError(true);
        console.error("There was an error!", error);
      });
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            {isError && (
              <Typography color="error" variant="subtitel1">
                This email is already associated with another account
              </Typography>
            )}

            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="userFirstName"
                    required
                    fullWidth
                    id="userFirstName"
                    label="First Name"
                    autoFocus
                    {...register("userFirstName", {
                      required: "First Name is required.",
                      pattern: {
                        value: /^[A-Za-z-]+$/,
                        message: "plese enter only name",
                      },
                    })}
                    error={Boolean(errors.userFirstName)}
                    helperText={errors.userFirstName?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="userLastName"
                    label="Last Name"
                    name="userLastName"
                    autoComplete="family-name"
                    {...register("userLastName", {
                      required: "Last Name is required.",
                      pattern: {
                        value: /^[A-Za-z-]+$/,
                        message: "plese enter only name",
                      },
                    })}
                    error={Boolean(errors.userLastName)}
                    helperText={errors.userLastName?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userMobileNo"
                    type="number"
                    label="Mobile number"
                    name="userMobileNo"
                    autoComplete="mobile-no"
                    {...register("userMobileNo", {
                      required: "Mobile Number is required.",
                      pattern: {
                        value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                        message: "plese enter only valid Mobile number",
                      },
                    })}
                    error={Boolean(errors.userMobileNo)}
                    helperText={errors.userMobileNo?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    type="text"
                    label="Address"
                    name="userAddress"
                    rows="3"
                    multiline={true}
                    autoComplete="Address"
                    {...register("userAddress", {
                      required: "Address is required.",
                    })}
                    error={Boolean(errors.userAddress)}
                    helperText={errors.userAddress?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="userEmail"
                    label="Email Address"
                    name="email"
                    autoComplete="userEmail"
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="userPassword"
                    label="Password"
                    type="password"
                    id="userPassword"
                    autoComplete="new-password"
                    {...register("userPassword", {
                      required: "Password is required.",
                      pattern: {
                        value:
                          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                        message: "plese enter only valid password",
                      },
                    })}
                    error={Boolean(errors.userPassword)}
                    helperText={errors.userPassword?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="userImg"
                    type="file"
                    id="img"
                    autoComplete="img"
                    {...register("userImg", {
                      required: "Password is required.",
                    })}
                    error={Boolean(errors.userImg)}
                    helperText={errors.userImg?.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit(onsubmit)}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link to="/login">Don't have an account? Sign Up</Link> */}
                </Grid>
                <Grid item>
                  <Link to="/login"> Already have an account? Sign in</Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export default SingUp;

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Copyright from "../Extra/Copyright";
import { loginUser } from "../../service/User";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IsAutharized } from "../../redux/User/UserSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

const theme = createTheme();
const Login = () => {
  const navigate = useNavigate();
  const disptch = useDispatch();
  const user = useSelector((state) => state.user);
  const [isInValid, setIsInValid] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    console.log(data);
    loginUser(data).then((res) => {
      console.log(res);
      if (res.status === 200) {
        navigate("/");
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("firstname", res.data[0].useFirstName);
        localStorage.setItem("lastname", res.data[0].userLastName);
        localStorage.setItem("mobile", res.data[0].userMobileNo);
        localStorage.setItem("address", res.data[0].userAddress);
        localStorage.setItem("email", res.data[0].userEmail);
        localStorage.setItem("image", res.data[0].userImage);
        localStorage.setItem("password", res.data[0].userPassword);
        disptch(IsAutharized(true));
        console.log(user);
      } else {
        setIsInValid(true);
      }
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
              Sign in
            </Typography>
            {isInValid && (
              <Typography color="error" variant="subtitel1">
                You Enter Wrong Email or Password
              </Typography>
            )}
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
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit(onsubmit)}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link to="/login">Don't have an account? Sign Up</Link> */}
                </Grid>
                <Grid item>
                  <Link to="/singup">Don't have an account? Sign Up</Link>
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
export default Login;

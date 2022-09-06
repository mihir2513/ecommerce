import {
  TextField,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  // OutlinedInput,
} from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
// import { getUserById } from "../../service/User";
import CustomFormLabel from "../CustomElements/CustomFormLabel";
// import { useState } from "react";
// import { IconButton, InputAdornment } from "@material-ui/core";
import { editUser, getUserById } from "../../service/User";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onsubmit = (data) => {
    const user = jwtDecode(localStorage.getItem("accessToken"));
    console.log(user.userId);
    console.log(data);
    const formData = new FormData();
    formData.append("userFirstName", data.userFirstName);
    formData.append("userLastName", data.userLastName);
    formData.append("userMobileNo", Number(data.userMobileNo));
    formData.append("userEmail", data.userEmail);
    formData.append("userImg", data.userImg[0]);
    formData.append("userAddress", data.userAddress);
    console.log(formData);
    editUser(formData, user.userId).then((res) => {
      console.log(res);
      if (res.affectedRows > 0) {
        getUserById(user.userId).then((res) => {
          localStorage.setItem("firstname", res.data[0].useFirstName);
          localStorage.setItem("lastname", res.data[0].userLastName);
          localStorage.setItem("mobile", res.data[0].userMobileNo);
          localStorage.setItem("address", res.data[0].userAddress);
          localStorage.setItem("email", res.data[0].userEmail);
          localStorage.setItem("image", res.data[0].userImage);
          navigate("/");
        });
      }
    });
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid item lg={4} md={12} xs={12}>
          <Card
            variant="outlined"
            sx={{
              p: 3,
              m: 2,
              borderRadius: "20px",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt={localStorage.getItem("image")}
                  src={`http://localhost:5000/public/images/user/${localStorage.getItem(
                    "image"
                  )}`}
                  sx={{ width: 110, height: 110 }}
                />
              }
              title={
                localStorage.getItem("firstname") +
                " " +
                localStorage.getItem("lastname")
              }
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Address
              </Typography>
              <Typography variant="body2">
                {localStorage.getItem("address")}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={8} md={12} xs={12}>
          <Card variant="outlined" sx={{ p: 3, m: 2, borderRadius: "20px" }}>
            <Typography variant="h6" fontWeight="600" sx={{ mb: 3 }}>
              Edit Details
            </Typography>
            <CustomFormLabel htmlFor="userFirstName">
              First Name
            </CustomFormLabel>
            <TextField
              autoComplete="given-First-name"
              name="userFirstName"
              required
              fullWidth
              id="userFirstName"
              defaultValue={localStorage.getItem("firstname")}
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
              sx={{ mb: 2 }}
            />
            <CustomFormLabel htmlFor="userLastName">Last Name</CustomFormLabel>
            <TextField
              autoComplete="given-Last-name"
              name="userLastName"
              required
              fullWidth
              id="userLastName"
              defaultValue={localStorage.getItem("lastname")}
              autoFocus
              {...register("userLastName", {
                required: "Last Name is required.",
                pattern: {
                  value: /^[A-Za-z-]+$/,
                  message: "plese enter only name",
                },
              })}
              error={Boolean(errors.userLastName)}
              helperText={errors.userLastName?.message}
              sx={{ mb: 2 }}
            />
            <CustomFormLabel htmlFor="userMobileNo">Mobile No</CustomFormLabel>
            <TextField
              required
              fullWidth
              id="userMobileNo"
              type="number"
              name="userMobileNo"
              defaultValue={localStorage.getItem("mobile")}
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
              sx={{ mb: 2 }}
            />
            <CustomFormLabel htmlFor="userAddress">Address</CustomFormLabel>
            <TextField
              required
              fullWidth
              id="address"
              defaultValue={localStorage.getItem("address")}
              type="text"
              name="userAddress"
              rows="3"
              // defaultValue={userData.user.userAddress}
              multiline={true}
              autoComplete="Address"
              {...register("userAddress", {
                required: "Address is required.",
              })}
              error={Boolean(errors.userAddress)}
              helperText={errors.userAddress?.message}
              sx={{ mb: 2 }}
            />
            <CustomFormLabel htmlFor="userEmail">Email Address</CustomFormLabel>
            <TextField
              required
              fullWidth
              id="userEmail"
              name="email"
              defaultValue={localStorage.getItem("email")}
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
              sx={{ mb: 2 }}
            />
            <CustomFormLabel htmlFor="name">Image</CustomFormLabel>
            {/* <OutlinedInput
              required
              fullWidth
              name="userPassword"
              id="userPassword"
              defaultValue={localStorage.getItem("password")}
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              {...register("userPassword", {
                required: "Password is required.",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: "plese enter only valid password",
                },
              })}
              error={Boolean(errors.userPassword)}
              helperText={errors.userPassword?.message}
              sx={{ mb: 2 }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            /> */}
            <TextField
              required
              fullWidth
              name="userImg"
              type="file"
              id="img"
              autoComplete="img"
              {...register("userImg", {
                required: "Image is required.",
              })}
              error={Boolean(errors.userImg)}
              helperText={errors.userImg?.message}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit(onsubmit)}
            >
              Update
            </Button>
          </Card>
        </Grid>
        {/* <Grid item xs md sm /> */}
      </Grid>
    </>
  );
};

export default UserProfile;

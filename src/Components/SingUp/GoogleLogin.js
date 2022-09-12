import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { IsAutharized } from "../../redux/User/UserSlice";
import { gapi } from "gapi-script";
import swal from "sweetalert";

const clientId =
  "817164577232-9tkkopireimrk4hef49sn05js2j64p1i.apps.googleusercontent.com";
const GoogleLogin = (props) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const navigate = useNavigate();
  const disptch = useDispatch();
  const onSuccess = async (res) => {
    console.log("Google Login Name", res);
    await axios
      .post(`http://localhost:5000/loginGoogle`, {
        userEmail: res.profileObj.email,
        userLastName: res.profileObj.familyName,
        userFirstName: res.profileObj.givenName,
        userPassword: res.profileObj.googleId,
        userImage: res.profileObj.imageUrl,
      })
      .then((res) => {
        console.log(res);
        if (res.data.data.length > 0) {
          swal({
            title: "Good job!",
            text: "You have successfully logged in ",
            icon: "success",
            button: "Aww yiss!",
          });
          navigate("/");
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("firstname", res.data.data[0].useFirstName);
          localStorage.setItem("lastname", res.data.data[0].userLastName);
          localStorage.setItem("mobile", "No data");
          localStorage.setItem("address", "No data");
          localStorage.setItem("email", res.data.data[0].userEmail);
          localStorage.setItem("image", "No data");
          localStorage.setItem("password", res.data.data[0].userPassword);
          disptch(IsAutharized(true));
        }
        if (res.data.data.affectedRows === 1) {
          swal({
            title: "Good job!",
            text: "your account has been successfully created",
            icon: "success",
            button: "Aww yiss!",
          });
          navigate("/");
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("firstname", res.data.userData.useFirstName);
          localStorage.setItem("lastname", res.data.userData.userLastName);
          localStorage.setItem("mobile", NaN);
          localStorage.setItem("address", "No data");
          localStorage.setItem("email", res.data.userData.userEmail);
          localStorage.setItem("image", "No data");
          localStorage.setItem("password", res.data.userData.userPassword);
          disptch(IsAutharized(true));
        }
      });
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    // isSignedIn: true,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });

  return (
    <>
      <Button onClick={signIn} className="gr__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
        <span className="buttonText">{props.text} </span>
      </Button>
    </>
  );
};
export default GoogleLogin;

import { Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { addimage } from "./service/User";

const Formimage = () => {
  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onsubmit = (data) => {
    const formData = new FormData();
    formData.append("userImg", selectedImage);
    console.log(data);
    console.log(URL.createObjectURL(selectedImage));
    const data2 = { ur: URL.createObjectURL(selectedImage) };
    // addimage(data2.ur).then((res) => console.log(res));
  };
  return (
    <>
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
        onChange={imageChange}
        error={Boolean(errors.userImg)}
        helperText={errors.userImg?.message}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={handleSubmit(onsubmit)}
      >
        Sign Up
      </Button>
    </>
  );
};

export default Formimage;

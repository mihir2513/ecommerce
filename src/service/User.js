import axios from "axios";
const url = "http://localhost:5000";
export const postUser = async (data) => {
  try {
    const response = await axios.post(`${url}/register`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const loginUser = async (data) => {
  try {
    const response = await axios.post(`${url}/loginuser`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const gogglelogin = async (data) => {
  try {
    const response = await axios.post(`${url}/loginGoogle`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const getUserById = async (id) => {
  const token = localStorage.getItem("accessToken");
  console.log(`Bearer ${token}`);
  try {
    const response = await axios.get(`${url}/getUser/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log("error while get data", error);
  }
};
export const editUser = async (data, id) => {
  const token = localStorage.getItem("accessToken");
  console.log(`Bearer ${token}`);
  try {
    const response = await axios.patch(`${url}/editUser/${id}`, data, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const updateUserPassword = async (id, data) => {
  try {
    const response = await axios.patch(`${url}/forgeotPassword/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};

export const getuserbyemail = async (data) => {
  try {
    const responnse = await axios.post(`${url}/getuserbyemail`, data);
    return responnse.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};

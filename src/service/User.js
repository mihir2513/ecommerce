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

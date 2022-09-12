import axios from "axios";
const url = "http://localhost:5000";
export const mail = async (data) => {
  try {
    const response = await axios.post(`${url}/nodemail`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const sendMailForgatePassword = async (data) => {
  try {
    const response = await axios.post(`${url}/forgatepassword`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};

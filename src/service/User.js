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

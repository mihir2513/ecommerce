import axios from "axios";
const url = "http://localhost:5000";
export const addOrder = async (data) => {
  try {
    const response = await axios.post(`${url}/addorder`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const getorderbyuserId = async (id) => {
  const token = localStorage.getItem("accessToken");
  console.log(`Bearer ${token}`);
  try {
    const response = await axios.get(`${url}/getorderbyuserId/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log("error while get data", error);
  }
};

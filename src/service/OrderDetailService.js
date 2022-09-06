import axios from "axios";
const url = "http://localhost:5000";
export const addorderdetail = async (data) => {
  try {
    const response = await axios.post(`${url}/addorderdetail`, data);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const getorderdetailbyid = async (id) => {
  try {
    const response = await axios.get(`${url}/getorderdetailbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while get data", error);
  }
};
export const getproductbyorderid = async (id) => {
  try {
    const response = await axios.get(`${url}/getproductbyorderid/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while get data", error);
  }
};

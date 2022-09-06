import axios from "axios";
const url = "http://localhost:5000";
export const getProduct = async () => {
  try {
    const response = await axios.get(`${url}/getproduct`);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};

export const getProductbyid = async (id) => {
  try {
    const response = await axios.get(`${url}/productbyid/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
export const getImagesByProductId = async (id) => {
  try {
    const response = await axios.get(`${url}/getImagesByProductId/${id}`);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};

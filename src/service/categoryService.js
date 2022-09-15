import axios from "axios";
const url = "http://localhost:5000";
export const getcategory = async () => {
  try {
    const response = await axios.get(`${url}/getcategory`);
    return response.data;
  } catch (error) {
    console.log("error while post data", error);
  }
};
  
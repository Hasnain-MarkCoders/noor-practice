import axios from "axios";

const host = "https://fakestoreapi.com";
export const getProduct = async (endpoint) => {
  try {
    const response = await axios.get(`${host}${endpoint}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

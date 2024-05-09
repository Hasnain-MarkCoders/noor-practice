import axios from "axios";


const host = "https://fakestoreapi.com";
export const getProduct = async (endpoint,token ) => {
  try {
    const response = await axios.get(`${host}${endpoint}`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

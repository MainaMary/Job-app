import axios from "axios";
//export default axios.create({ baseURL: "http://localhost:8000/api/v1/" });
export const baseUrl = "http://localhost:8000/api/v1/";


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1/', // Replace with your API's base URL
    headers: {
    'Content-Type': 'application/json', // Set the content type to JSON
   
  }
});

export default axiosInstance;
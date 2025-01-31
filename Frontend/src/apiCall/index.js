import axios from "axios";
const axiosInstance = axios.create({
  headers: `Bearer ${localStorage.getItem("token")}`,
});
export default axiosInstance;

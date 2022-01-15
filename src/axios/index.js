import axios from "axios";
import { url } from "../constants/url";

export const adminLogin = async (userData) => {
  return await axios.post(`${url}/auth/adminlogin`, userData);
};

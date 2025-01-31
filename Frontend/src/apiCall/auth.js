import axiosInstance from "./index";
export const signupUser = async (user) => {
  try {
    const response = await axiosInstance.post("/api/auth/signup", user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
const registerUser = (payload: any) => {
  return axios.post("http://localhost:8000/api/v1/auth/register", payload);
};

export const useRegisterUser = () => {
  return useMutation(registerUser);
};

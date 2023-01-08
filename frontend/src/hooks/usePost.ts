import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
const registerUser = (payload: any) => {
  console.log(baseUrl);
  const response = axios.post(`${baseUrl}auth/register`, payload);
  return response;
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log(data, "reponse data");
    },
  });
};

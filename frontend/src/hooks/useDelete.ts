import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import { JobsContext } from "../types";
import axiosInstance from "../api/baseUrl";
interface Props {
  email: string;
  password: string;
  name: string;
}
const registerUser = async (payload: Props) => {
  const response = await axiosInstance.delete(`${baseUrl}auth/register`);
  return response.data;
};

export const useRegisterUser = () => {
  const { setUser } = useAppContext();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setUser(data);
      console.log(data, "reponse data");
    },
  });
};

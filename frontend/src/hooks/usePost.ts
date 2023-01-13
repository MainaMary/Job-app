import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import { useAppContext } from "../context/appContext";
import { JobsContext } from "../types";
interface Props {
  email: string;
  password: string;
  name: string;
}
const registerUser = async (payload: Props) => {
  const response = await axios.post(`${baseUrl}auth/register`, payload);
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

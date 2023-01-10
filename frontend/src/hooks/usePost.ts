import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../api/baseUrl";
import axios from "axios";
import { useAppContext } from "../context/appContext";
interface Props {
  email: string;
  password: string;
  name: string;
}
const registerUser = async (payload: Props) => {
  try {
    console.log(baseUrl);
    const response = await axios.post(`${baseUrl}auth/register`, payload);
    return response;
  } catch (error: any) {
    return error.message;
  }
};

export const useRegisterUser = () => {
  const { setResData } = useAppContext();
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setResData(data);
      console.log(data, "reponse data");
    },
  });
};

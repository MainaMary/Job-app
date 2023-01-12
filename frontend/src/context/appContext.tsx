import { useState } from "react";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { DISPLAY_ALERT, CLEAR_CART, REGISTER_USER_SUCCESS } from "./actons";
import { reducer } from "./reducers";
import { useRegisterUser } from "../hooks/usePost";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  children: JSX.Element;
}
interface JobsContext {
  isError: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  displayAlert: () => void;
  clearAlert: () => void;
  registerUser: (x: any) => void;
  resData: [];
  setResData: React.Dispatch<React.SetStateAction<never[]>>;
}
const initialValues = {
  isLoading: true,
  isError: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  displayAlert: null,
  clearAlert: null,
  registerUser: null,
};
const appContext = createContext<JobsContext | null>(null);

export const useAppContext = () => {
  return useContext(appContext);
};
const AppContextProvider = ({ children }: Props) => {
  const [values, dispatch] = useReducer(reducer, initialValues);
  const [resData, setResData] = useState([]);
  const queryClient = useQueryClient();
  console.log(resData, "resdata");
  queryClient.setQueryData;

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };
  const clearAlert = () => {
    dispatch({ type: CLEAR_CART });
  };
  const registerUser = (payload: any) => {
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: payload,
    });
  };

  return (
    <appContext.Provider
      value={{
        ...values,
        displayAlert,
        clearAlert,
        registerUser,
        resData,
        setResData,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;

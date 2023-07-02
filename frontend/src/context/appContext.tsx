import { useState } from "react";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { DISPLAY_ALERT, CLEAR_CART, REGISTER_USER_SUCCESS } from "./actons";
import { reducer } from "./reducers";
import { JobsContext, RegisterUser } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
interface Props {
  children: JSX.Element;
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
  user: [],
  setUser: null,
};
const appContext = createContext<JobsContext>({
  isLoading: true,
  isError: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  displayAlert: () => {},
  clearAlert: () => {},
  registerUser: () => {},
  user: [],
  setUser: () => {},
});

export const useAppContext = () => {
  return useContext(appContext);
};
const AppContextProvider = ({ children }: Props) => {
  const [values, dispatch] = useReducer(reducer, initialValues);
  axios.defaults.headers.common['Authorization']=`Bearer ${state.token}`
  const [user, setUser] = useState<RegisterUser[]>([]);
  const queryClient = useQueryClient();
  console.log(user, "resdata");
  queryClient.setQueryData;

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };
  const clearAlert = () => {
    dispatch({ type: CLEAR_CART });
  };
  const registerUser = (payload: RegisterUser) => {
    console.log("payload", "successful regsitration");
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: payload,
    });
  };

  const addToLocalStorage = (user: RegisterUser[]) => {
    localStorage.setItem('res', JSON.stringify(user))
  };
  addToLocalStorage(user);
  const removeFromLocalStorage = (user:RegisterUser[]) => {
    localStorage.removeItem('user')
  };
  removeFromLocalStorage(user)
  return (
    <appContext.Provider
      value={{
        ...values,
        displayAlert,
        clearAlert,
        registerUser,
        user,
        setUser,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;

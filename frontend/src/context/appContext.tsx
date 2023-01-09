import { any } from "joi";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { DISPLAY_ALERT, CLEAR_CART, REGISTER_USER_SUCCESS } from "./actons";
import { reducer } from "./reducers";
import { useRegisterUser } from "../hooks/usePost";

interface Props {
  children: JSX.Element;
}
export const initialValues = {
  isLoading: true,
  isError: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  displayAlert: any,
  clearAlert: any,
  registerUser: any,
};
const appContext = createContext(initialValues);

export const useAppContext = () => {
  return useContext(appContext);
};
const AppContextProvider = ({ children }: Props) => {
  const [values, dispatch] = useReducer(reducer, initialValues);
  const { mutate } = useRegisterUser();

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
      value={{ ...values, displayAlert, clearAlert, registerUser }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;

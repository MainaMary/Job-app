import { any } from "joi";
import React, { useContext, useReducer, useState } from "react";
import { createContext } from "react";
import { DISPLAY_ALERT, CLEAR_CART } from "./actons";
import { reducer } from "./reducers";

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
};
const appContext = createContext(initialValues);
export const useAppContext = () => {
  return useContext(appContext);
};
const AppContextProvider = ({ children }: Props) => {
  const [values, dispatch] = useReducer(reducer, initialValues);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    console.log("display alert");
  };
  const clearAlert = () => {
    dispatch({ type: CLEAR_CART });
  };
  console.log(values);
  return (
    <appContext.Provider value={{ ...values, displayAlert, clearAlert }}>
      {children}
    </appContext.Provider>
  );
};

export default AppContextProvider;

import { DISPLAY_ALERT, CLEAR_CART, REGISTER_USER_SUCCESS } from "./actons";
import { RegisterUser } from "../types";

interface AlertAction {
  type: any;
  payload?: RegisterUser;
}
const reducer = (state: any, action: AlertAction) => {
  const { type, payload } = action;
  switch (type) {
    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all the details",
      };

    case CLEAR_CART:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        alertText: "Registration successful",
        alertType: "ssuccess",
        showAlert: true,
        user: payload?.user,
        token: payload?.token,
        //location: payload?.location,
      };
    }
    default:
      throw new Error("No action");
  }
};

export { reducer };

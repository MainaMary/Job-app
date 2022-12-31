import { DISPLAY_ALERT, CLEAR_CART } from "./actons";

import { initialValues } from "./appContext";
enum ActionTypes {
  DISPLAY_ALERT = "DISPLAY_ALERT",
  DECREASE = "DECREASE",
  CLEAR_CART = "CLEAR_CART",
}
interface AlertAction {
  type: any;
  payload?: string;
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
    default:
      throw new Error("No action");
  }
};

export { reducer };

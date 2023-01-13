export type JobsContext = {
  isLoading: boolean;
  isError: boolean;
  showAlert: boolean;
  alertText: string;
  alertType: string;
  displayAlert: () => void;
  clearAlert: () => void;
  registerUser: (x: any) => void;
  user: [];
  setUser: React.Dispatch<React.SetStateAction<never[]>>;
};

export type RegisterUser = {
  token: string;
  user: {
    email: string;
    location: string;
    name: string;
  };
};

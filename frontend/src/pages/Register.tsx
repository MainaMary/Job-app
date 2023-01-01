import React, { useState } from "react";
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import { useAppContext } from "../context/appContext";
import { Link } from "react-router-dom";
import { useRegisterUser } from "../hooks/usePost";

interface RProps {
  name: string;
  email: string;
  password: string;
}
const Register = () => {
  const defaultValues: RProps = {
    name: "",
    email: "",
    password: "",
  };
  const { mutate } = useRegisterUser();
  const { displayAlert, clearAlert, alertText, registerUser } = useAppContext();
  const [formValues, setFormValues] = useState<RProps>(defaultValues);
  const { name, email, password } = formValues;
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!name || !email || !password) {
      console.log("Hello");
      displayAlert();
    }
    if (name && email && password) {
      clearAlert();
    }
    console.log({ name, email, password });
    registerUser(mutate({ name: name, email, password }));
  };
  return (
    <FormWrapper>
      <form className="w-full py-4 px-5" onSubmit={handleSubmit}>
        <p className="text-red-400 text-center">{alertText}</p>
        <h2>Register</h2>
        <div className="my-4">
          <CustomLabel>Name</CustomLabel>
          <CustomInput
            value={name}
            type="text"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <CustomLabel>Email</CustomLabel>
          <CustomInput
            value={email}
            type="text"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className="my-4">
          <Button name="Register" className="w-full" />
        </div>
        <div className="my-4">
          <p>
            Already have an account? {""}
            <span className="text-primary-color">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </div>
      </form>
    </FormWrapper>
  );
};

export default Register;

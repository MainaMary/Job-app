import React, { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
interface RProps {
  email: string;
  password: string;
}
const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { displayAlert, clearAlert, alertText } = useAppContext();
  const navigate = useNavigate()
  const defaultValues: RProps = {
    email: "",
    password: "",
  };
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);
  const [formValues, setFormValues] = useState<RProps>(defaultValues);
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { email, password } = formValues;
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Hello");
      displayAlert();
    }
    if (email && password) {
      clearAlert();
    }
  };
  return (
    <FormWrapper>
      <form className="w-full py-4 px-5" onSubmit={handleSubmit}>
        <p className="text-red-400 text-center">{alertText}</p>
        <h2>Log in</h2>

        <div className="my-4">
          <CustomLabel>Email</CustomLabel>
          <CustomInput
            value={formValues.email}
            type="text"
            name="email"
            onChange={handleChange}
            ref={emailRef}
          />
        </div>
        <div className="my-4">
          <CustomLabel>Password</CustomLabel>
          <CustomInput
            type="password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
          />
        </div>
        <div className="my-4" onClick={() =>navigate('/home')}>
          <Button name="Log in" className="w-full" />
        </div>
        <div className="my-4">
          <p>
            Don't have an account? {""}
            <span className="text-primary-color">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </form>
    </FormWrapper>
  );
};

export default LogIn;

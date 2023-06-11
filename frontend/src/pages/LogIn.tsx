import React, { useState, useRef, useEffect } from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai"
import Button from "../components/Button";
import FormWrapper from "../components/FormWrapper";
import CustomInput from "../components/CustomInput";
import CustomLabel from "../components/CustomLabel";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import useVisibleHook from "../custom/useVisible";
interface RProps {
  email: string;
  password: string;
  confirmPassword: string;
}
const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const { displayAlert, clearAlert, alertText } = useAppContext();
  const [error, setError] = useState<string>("")
  const navigate = useNavigate()
  const {visible, handleVisible} = useVisibleHook()
  const defaultValues: RProps = {
    email: "",
    password: "",
    confirmPassword:""
  };
  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);
  const passwordRef = useRef(null)

  const ConfirmPasswordRef = useRef(null)

  const [formValues, setFormValues] = useState<RProps>(defaultValues);
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { email, password, confirmPassword } = formValues;
  const handleClick = (event:any) =>{
    event.currentTarget.id
    console.log(event.currentTarget.id)
    handleVisible()
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Hello");
      displayAlert();
    }
    if (email && password) {
      clearAlert();
    }
    if(password !==  confirmPassword){
      setError('Passwords should match')
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
          <div className="relative">
          <CustomInput
            type={visible ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formValues.password}
          />
          <div
          ref={passwordRef}
            onClick={handleClick}
            className="absolute right-2 top-3 cursor-pointer"
          >
            {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
        </div>
        <div className="my-4">
          <CustomLabel> Confirm Password</CustomLabel>
          <div className="relative">
          <CustomInput
            type={visible ? "text" : "password"}
            placeholder="Password"
            name="confirmPassword"
            onChange={handleChange}
            value={formValues.confirmPassword}
          />
          <div
          ref={ConfirmPasswordRef}
            onClick={handleVisible}
            className="absolute right-2 top-3 cursor-pointer"
          >
            {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
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

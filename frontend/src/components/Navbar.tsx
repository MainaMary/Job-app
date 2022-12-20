import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between px-16 h-20 items-center ">
      <div
        onClick={() => navigate("/")}
        className="flex w-[13%] justify-between"
      >
        <div className="font-bold bg-primary-color rounded w-[40px] text-base leading-[40px] h-[40px] text-center text-white">
          JB
        </div>
        <h1>JobBag</h1>
      </div>
      <div className="w-[25%] flex justify-between">
        <Button name={<Link to="/login">Log in</Link>} />
        <Button name={<Link to="/register">Register</Link>} />
      </div>
    </nav>
  );
};

export default Navbar;

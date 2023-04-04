import React,{useState} from "react";
import {FiAlignLeft} from "react-icons/fi"
import {FaUserAlt} from "react-icons/fa"
import Button from "./Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {VscChromeClose} from "react-icons/vsc"
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const navigate = useNavigate();
  const handleBars = () =>{
    setOpen(prev => !prev)
  }
  return (
    <nav className="flex justify-between px-16 h-20 items-center ">
      <div
        onClick={() => navigate("/")}
        className="flex w-[13%] justify-between"
      >
        <div className="font-bold bg-primary-color cursor-pointer rounded w-[40px] text-base leading-[40px] h-[40px] text-center text-white">
          JB
        </div>
        <h1>JobBag</h1>
      </div>
      <div className="w-[25%] md:flex justify-between hidden">
        <Button name={<Link to="/login">Log in</Link>} />
        <Button name={<Link to="/register">Register</Link>} />
      </div>
      <div className="w-[25%]  justify-between  block md:hidden">
        <Button name={<Link to="/login">Log in</Link>} />
        <Button name={<Link to="/register">Register</Link>} />
      </div>
      
      <div onClick={handleBars} className="block md:hidden">
         {open ? <VscChromeClose/> : <FaBars/>}
      </div>
    </nav>
  );
};

export default Navbar;

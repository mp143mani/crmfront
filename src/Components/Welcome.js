import React from "react";
import "../CSS/Welcome.css";
import Capture4 from "../assets/imgs/Capture4.PNG";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

export default function Welcome() {
  let navigate = useNavigate();
  //  let handleBeforeLogin = async ()=>{ navigate('/loginBefore')}
  //  let handleRegister = async ()=>{ navigate('/Register')}
  return (
    <div class="container-fluid" >
     <Navbar1 />
      <div className="Entry-Caption ">
            <h1>Hi, Welcome to The INDO Group</h1>
            <p>We are the top ranked CRM service provider in India</p>
            {/* <img className="Capture4" src={Capture4} alt="..." /> */}
        </div>
        </div>
  );
}


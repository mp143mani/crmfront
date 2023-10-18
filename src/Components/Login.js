

import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import env from "../Backendurl";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../CSS/Login.css";
import Navbar1 from "./NavbarA";
import { EmployeeContext } from "../Context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const context1 = useContext(EmployeeContext);

  const handleLogin = async () => {
    setToggle(true);
    let res = await axios.post(`${env.apiurl}/users/signin`, {
      email,
      password,
    });

    if (res.data.statusCode === 200) {
      setToggle(false);
      localStorage.setItem("token", res.data.token);
      context1.leadLength();
      context1.requestLength();
      await handleVerify();
    } else {
      setToggle(false);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const handleVerify = async () => {
    let res3 = await axios.get(`${env.apiurl}/users/adminRoleAuth`);
    if (res3.data.data === "Admin") {
      navigate("/Dashboard1");
    }
    if (res3.data.data === "Employee" || res3.data.data === "NEmployee") {
      navigate("/Dashboard");
    } else {
      alert("Only Admin has Access");
    }
  };

  const handleForgotpass = async () => {
    navigate("/Forgot");
  };

  return (
    <div className="login-container">
      <Navbar1 />
      <div className="container">
        <h1 className="text-center">Welcome to App</h1>
        <p className="text-center">Login to Continue</p>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="primary" onClick={handleForgotpass}>
              Forgot Password
            </Button>
          </div>
        </Form>

        {toggle ? <Spinner animation="border" variant="primary" /> : null}
        {message ? <div className="error-message">{message}</div> : null}
      </div>
    </div>
  );
}

export default Login;

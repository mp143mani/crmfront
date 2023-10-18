import React from "react";
import "../CSS/Welcome.css";
import { useNavigate } from "react-router-dom";

export default function Navbar1() {
  let navigate = useNavigate();
  const auth = localStorage.getItem('token');
  let handleBeforeLogin = async () => {
    navigate("/loginBefore");
  };
  let handleRegister = async () => {
    navigate("/Register");
  };
  let handleBeforeLogout = async () => {
    localStorage.clear();
    navigate("/loginBefore");
  };

  return (
    <div id="content">
      {/* Topbar */}
      <nav
        className="navbar  navbar-expand-lg bg-dark fixed-top"
        style={{ color: "white" }}
      >
        <div className="container-fluid">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            
          </div>

          <div>
            {auth ?
            
            <button
              className="btn btn-info mx-2"
              onClick={() => handleBeforeLogout()}
            >
              LOG Out
            </button>: <button
              className="btn btn-primary mx-2"
              onClick={() => handleBeforeLogin()}
            >
              LOG IN
            </button>}
          </div>
          <div>
            <button
              className="btn btn-outline-success me-auto"
              onClick={() => handleRegister()}
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

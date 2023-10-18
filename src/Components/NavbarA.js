import React from "react";

import { useNavigate } from "react-router-dom";

export default function Navbar1() {
  let navigate = useNavigate();
  const auth = localStorage.getItem('token');
  let handleBeforeLogin = async () => {
    navigate("/login");
  };
  let handleRegister = async () => {
    navigate("/Register");
  };
  let handleBeforeLogout = async () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div id="content">
      {/* Topbar */}
      <nav
        className="navbar  navbar-expand-lg bg-primary fixed-top"
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
              className="btn btn-success mx-2"
              onClick={() => handleBeforeLogout()}
            >
              LOG Out
            </button>: <button
              className="btn btn-success mx-2"
              onClick={() => handleBeforeLogin()}
            >
              LOG IN
            </button>}
          </div>
          <div>
            <button
              className="btn btn-success me-auto"
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

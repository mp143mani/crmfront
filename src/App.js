import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Creatingleads from "./Components/Creatingleads";
import Dashboard from "./Components/UserDashboard";
import Forgot from "./Components/Forgot";
import ForgotReq from "./Components/ForgotReq";
import Leads from "./Components/Leads";
import Login from "./Components/Login";
import Register from "./Components/Register";
import RegisterReq from "./Components/RegisterReq";
import Request from "./Components/Request";

import UpdateLead from "./Components/UpdateL";
import Req from "./Components/Req";
import CreateReq from "./Components/CreateReq";
import UpdateReq from "./Components/UpdateRequst";
import { useState } from "react";
import { EmployeeContext } from "./Context";
import axios from "axios";
import env from "./Backendurl";
import Dashboard1 from "./Components/Admindashboard";
import UpdateAdmin from "./Components/Userupdate";

function App() {
  const [length, setLength] = useState();
  const [lengthReq, setLengthReq] = useState();

  const leadLength = async () => {
    let res = await axios.get(`${env.apiurl}/LeadsCrm/getLeadLength`);
    setLength(res.data.data);
    console.log(res);
  };
  const requestLength = async () => {
    let res1 = await axios.get(`${env.apiurl}/ReqCrm/getReqLength`);
    setLengthReq(res1.data.data);
    console.log(res1);
  };
  return (
    <div>
      <div id="wrapper">
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <div className="Route-Content1">
          <div className="Route-Content"> */}
          <EmployeeContext.Provider
            value={{
              length: length,
              leadLength: leadLength,
              lengthReq: lengthReq,
              requestLength: requestLength,
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Forgot" element={<Forgot />} />
                <Route path="/ForgotReq" element={<ForgotReq />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/RegisterReq" element={<RegisterReq />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Dashboard1" element={<Dashboard1 />} />
                <Route path="/Leads" element={<Leads />} />
                <Route path="/Request" element={<Request />} />
                <Route path="/Creatingleads" element={<Creatingleads />} />
                <Route path="/UpdateLead/:id" element={<UpdateLead />} />
                <Route path="/Req" element={<Req />} />
                <Route path="/CreateReq" element={<CreateReq />} />
                <Route path="/UpdateReq/:id" element={<UpdateReq />} />
                <Route path="/UpdateRole/:id" element={<UpdateAdmin />} />

                <Route path="*" element={<Navigate to={"/"} />} />
              </Routes>
            </BrowserRouter>
          </EmployeeContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

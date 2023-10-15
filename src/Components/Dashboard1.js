import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import env from "../enviroinment";
import Button from "react-bootstrap/Button";
import { FaPen } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../CSS/Lead.css";

function Dashboard1() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let tableRef = useRef(null);

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/users/getAdminData`);
    if (res.data.statusCode === 200) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
      navigate("/login");
    }
  };

  let handleUpdate = async (id) => {
    navigate("/UpdateRole/" + id);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div id="content2" >
      <Navbar />
      <div className="login-wrapper">
        <h1>Admin control</h1>
      </div>
      <div >

        <div className ="Content4">
        <Table  striped bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Role</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.mobileNumber}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>       
                  <td>
                    <Button color="primary" onClick={() => handleUpdate(e._id)}>
                      <FaPen />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
        <div className ="Content5">
        <Button variant="primary" onClick={() => loadData()}>
          Refresh
        </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard1;

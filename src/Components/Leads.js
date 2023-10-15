import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import env from "../enviroinment";
import Button from "react-bootstrap/Button";
import { FaTrashAlt, FaPlus, FaPen } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../CSS/Lead.css";

function Leads() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let tableRef = useRef(null);
  const [searchText, setSearchText] =useState('')

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/LeadsCrm/get`);
    if (res.data.statusCode === 200) {
      setData(res.data.data);
    } else {
      alert(res.data.message);
      navigate("/login");
    }
  };

  let handleDelete = async (id) => {
    let res = await axios.delete(`${env.apiurl}/LeadsCrm/delete-lead/${id}`);
    if (res.data.statusCode === 200) {
      loadData();
    } else {
      alert(res.data.message);
    }
  };

  let handleUpdate = async (id) => {
    navigate("/UpdateLead/" + id);
  };

  let handleCreate = async () => {
    navigate("/CreateLead");
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div id="content2" >
      <Navbar />
      <div className="login-wrapper">
        <h1>LEAD LIST</h1>
      </div>
      <nav className="navbar bg-light">
      <form className="container-fluid">
       <div className="input-group">
      <span className="input-group-text" id="basic-addon1">Lead Search Bar</span>
      <input type="text" className="form-control" onChange={(e)=>setSearchText(e.target.value)} placeholder="Search Email or Name " aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>
      <div >
      <div className ="Content5">
        <Button color="primary" onClick={() => handleCreate()}>
          <FaPlus /> Add lead
        </Button>
        </div>
        <div className ="Content4">
        <Table  striped bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Lead Name</th>
              <th>Mobile Number</th>
              <th>Company</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((e)=>e.leadName.toLowerCase().includes(searchText.toLocaleLowerCase()) || e.email.toLowerCase().includes(searchText.toLocaleLowerCase())).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.leadName}</td>
                  <td>{e.mobileNumber}</td>
                  <td>{e.company}</td>
                  <td>{e.email}</td>

                  <td>{e.createdAt}</td>
                  <td>{e.status}</td>
                  <td>
                    <Button color="danger" onClick={() => handleDelete(e._id)}>
                      <FaTrashAlt />
                    </Button>
                  </td>
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

export default Leads;

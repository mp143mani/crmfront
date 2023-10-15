import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import '../CSS/Login.css';

export default function UpdateReq() {
  const params = useParams();
  const navigate = useNavigate();
  const [reqName, setReqName]=useState("")
  const [mobileNumber, setMobileNumber]=useState("")
  const [company, setCompany]=useState("")
  const [email, setEmail]=useState("")
 const[status,setStatus]=useState("")

  useEffect(()=>{getData()},[])

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/ReqCrm/edit-Req/${params.id}`);
console.log(res)
setReqName(res.data.reqName);
    setMobileNumber(res.data.mobileNumber);
    setCompany(res.data.company);
    setEmail(res.data.email);
    setStatus(res.data.status)

  };

  
  const handleSubmit = async ()=>{
    let res = await axios.put(`${env.apiurl}/ReqCrm/edit-Req/${params.id}`,{
        reqName,
        mobileNumber,
        company,
        email,
        status
  
    })
    // {fun.loadData}
    if(res.data.statusCode===200)
    {    
        navigate("/Req");
    }

};

  return (
    <Container className="wallpaper3">
      <h1>Update Service Request</h1>
      <Form>
        <FormGroup>
          <Label for="reqName">reqName</Label>
          <Input
            onChange={(e)=> {setReqName(e.target.value)}}
            value={reqName}
            placeholder="Enter reqName"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={(e)=> {setEmail(e.target.value)}}
            value={email}
            placeholder="Enter Email"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="company">company</Label>
          <Input
            onChange={(e)=> {setCompany(e.target.value)}}
            value={company}
            placeholder="Enter company"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobileNumber">mobileNumber</Label>
          <Input
            onChange={(e)=> {setMobileNumber(e.target.value)}}
            value={mobileNumber}
            placeholder="Enter mobileNumber"
            type="text"
          />
           </FormGroup>
          <FormGroup>
          <Label for="status">Status</Label>
          <Input
            onChange={(e)=> {setStatus(e.target.value)}}
            value={status}
            placeholder="Enter status"
            type="text"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

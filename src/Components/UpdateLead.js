import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import '../CSS/Login.css';

export default function UpdateLead() {
  const params = useParams();
  const navigate = useNavigate();
  const [leadName, setLeadName]=useState("")
  const [mobileNumber, setMobileNumber]=useState("")
  const [company, setCompany]=useState("")
  const [email, setEmail]=useState("")
 const[status,setStatus]=useState("")

  useEffect(()=>{getData()},[])

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/LeadsCrm/edit-lead/${params.id}`);
console.log(res)
    setLeadName(res.data.leadName);
    setMobileNumber(res.data.mobileNumber);
    setCompany(res.data.company);
    setEmail(res.data.email);
    setStatus(res.data.status)

  };

  
  const handleSubmit = async ()=>{
    let res = await axios.put(`${env.apiurl}/LeadsCrm/edit-lead/${params.id}`,{
        leadName,
        mobileNumber,
        company,
        email,
        status
  
    })
    // {fun.loadData}
    if(res.data.statusCode===200)
    {    
        navigate("/Leads");
    }

};

  return (
    <Container className="wallpaper1">
      <h1>Update Lead</h1>
      <Form>
        <FormGroup>
          <Label for="leadName">leadName</Label>
          <Input
            onChange={(e)=> {setLeadName(e.target.value)}}
            value={leadName}
            placeholder="Enter leadName"
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

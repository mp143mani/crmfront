import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios'
import env from '../enviroinment'
import '../CSS/Login.css';



export default function CreateLead() {

  const navigate = useNavigate();
  let [leadName,setLeadName]=useState("")
  let [mobileNumber,setMobileNumber]=useState("")
  let [company,setCompany]=useState("")
  let [email,setEmail]=useState("")
  let [status,setStatus]=useState("")

    const handleSubmit = async ()=>{
        let res = await axios.post(`${env.apiurl}/LeadsCrm/leadAdd`,{
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
      <h1>Create Lead</h1>
      <Form>
        <FormGroup>
          <Label for="leadName">leadName</Label>
          <Input
            onChange={(e)=>setLeadName(e.target.value)}
            placeholder="Enter lead Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="mobileNumber">Mobile Number</Label>
          <Input
            onChange={(e)=>setMobileNumber(e.target.value)}
            placeholder="Enter Mobile Number"
            type="mobileNumber"
          />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input
            onChange={(e)=>setCompany(e.target.value)}
            placeholder="Enter Company"
            type="company"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="status">status</Label>
          <Input
            onChange={(e)=>setStatus(e.target.value)}
            placeholder="Enter status"
            type="text"
          />
        </FormGroup>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
      </Form>
 
    </Container>
  );
}

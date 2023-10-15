import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios'
import env from '../enviroinment'

export default function Register() {

  const navigate = useNavigate();
  let [name,setName]=useState("")
  let [mobileNumber,setMobileNumber]=useState("")
  let [company,setCompany]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  

    const handleSubmit = async ()=>{
        let res = await axios.post(`${env.apiurl}/users/signup`,{
            name,
            mobileNumber,
            company,
            email,
            password
        })
        if(res.data.statusCode===200)
        {
           sessionStorage.setItem('token',res.data.token)
           navigate('/RegisterReq') 
        }
 
  };

  return (
    <Container>
      <h1>Create Profile</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter Name"
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
          <Label for="password">password</Label>
          <Input
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            type="text"
          />
        </FormGroup>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
      </Form>
    </Container>
  );
}

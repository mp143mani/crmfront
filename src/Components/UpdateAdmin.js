import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";
import "../CSS/Welcome.css";

export default function UpdateAdmin() {
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
 const[role,setRole]=useState("")

  useEffect(()=>{getData()},[])

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/users/edit-Admin/${params.id}`);
console.log(res)
setName(res.data.name);
    setEmail(res.data.email);
    setRole(res.data.role)

  };

  let handleDashboard1 = async ()=>{ navigate('/Dashboard1')}

  
  const handleSubmit = async ()=>{
    let res = await axios.put(`${env.apiurl}/users/edit-Admin/${params.id}`,{
        name,
        email,
        role
  
    })
    // {fun.loadData}
    if(res.data.statusCode===200)
    {    
        navigate("/Dashboard1");
    }

};

  return (
    <Container className="wallpaper3">
      <h1>Role Updatation Window</h1>
      <Form>
      <FormGroup>
          <Label for="name">Name</Label>
          <Input
            onChange={(e)=> {setName(e.target.value)}}
            value={name}
            placeholder="Enter name"
            type="name"
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
          <Label for="role">Role</Label>
          <Input
            onChange={(e)=> {setRole(e.target.value)}}
            value={role}
            placeholder="Enter role"
            type="text"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button className ="mx-2" variant="primary" onClick={()=>handleDashboard1()}>
          Back To Dashboard
        </Button>
      </Form>
    </Container>
  );
}

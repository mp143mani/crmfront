import React, { useContext } from "react";
import "../CSS/Welcome.css";
// import axios from 'axios'
//import env from '../enviroinment'

import Navbar from "./Navbar";
import Footer from "./Footer";
import { EmployeeContext } from "../Context";

export default function Dashboard() {
const context =useContext(EmployeeContext)

  return (
    <div className=" wallpaper">
    <div id="content ">
    
      <Navbar />
      
      <div class="container text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="lead2">
              <div className="lead3 col"  > No. Of Leads :{context.length} </div>
            </div>
          </div>
          <div class="col">
            <div class="lead2 ">
              <div className="lead3 col"> No. Of Service Request :{context.lengthReq} </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

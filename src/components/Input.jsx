import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import React , { useState } from 'react'
import { Card } from "primereact/card";
import "../styles/Input.css"
import Table from "./Table";

const Input = () => {
    const [value, setValue] = useState("");
    
  return (
    <Card  style={{width:"85rem" ,   marginLeft: "3.4rem",
    marginRight: "1rem", marginBottom:"-2.4rem",backgroundColor:"#000000",
     }} >
        <div
     
      
    >
      <div >
        <InputText
           style={{backgroundColor:"#E0E3E8",width:"25rem",height:"2.6rem"}}
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        
        <Button
          label="Search"
          className="p-button-rounded  p-button-info"
          style={{right:"35px", width:"150px",height:"2.6rem" }}
          
        />
      </div>
    </div>
    <div>
        <Table/>
    </div>
    </Card>
    
  )
}

export default Input
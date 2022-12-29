import React, { useState, useEffect,useRef } from 'react';
import axios from "axios";
import { Button } from "primereact/button";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "../styles/Table.css"



const Table = () => {
  const dt = useRef(null);
  const exportCSV = (selectionOnly ) => {
    dt.current.exportCSV({ selectionOnly });
  }
 
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setPosts(res.data));
  }, []);
   
    
  
  return (
    <>
    <div style={{position:"relative", width:"50px", left:"74.5rem",bottom:"2.6rem"}}>
      <Button type="button" label='Export csv' onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" style={{width:"8rem", height:"2.6rem"}}  />
    </div>
    <div style={{marginTop:"0rem"}}>
            <div className="card" >
            

                <DataTable value={posts} responsiveLayout="scroll"
                ref={dt}  >
                    <Column field="name" header="User"></Column>
                    <Column field="username" header="Action"></Column>
                    <Column field="email" header="Target"></Column>
                    <Column field="address.zipcode" header="Date"></Column>
                    <Column field="phone" header="IP"></Column>
                </DataTable>
            </div>
        </div>
        </>
    
   
       
        
        
  
  )
}

export default Table
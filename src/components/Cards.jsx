import React ,{useRef} from 'react'
import { Card } from "primereact/card";
import "../styles/Cards.css"
import { Button } from "primereact/button";
import Input from './Input';
import { Tooltip } from 'primereact/tooltip';


const Cards = () => {

  

  return (
    
      
          <Card  >
             <div className='display' >
                <div>
                    <h1  >Audit trail</h1>
                </div>
                <div  className="button-demo">
                  
                   {/* <Button label="Export" className="p-button-rounded  p-button-info" /> */}
                  
                </div>
             </div>
             <div>
              <div>
                <Input/>
              </div>
             </div>
           
          </Card>
        
         
  )
}

export default Cards
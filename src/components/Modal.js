import { useState } from "react";
import Button from "./Button.js";

export default function Modal({header, save, close}){

const [ta, setValue] = useState();

return (
    <div className="modal-dialog light-theme">  
     <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">{header}</h3>
          <button type="button" className="close light-theme" onClick={close}>&times;</button>
        </div>
        <div className="modal-body">
          <textarea id="ta" className="textarea" rows="5" onChange={(e)=> setValue(e.target.value)}></textarea>
        </div>
        <div className="modal-footer">
          <Button className="btn-dark-scheme" value="Close" onClick ={close} />
          <Button className="btn-dark-scheme" value="Save" onClick ={(e)=>{
              e.preventDefault();
              save(ta);
          }} />
        </div>
      </div>
     
    </div>
);
}

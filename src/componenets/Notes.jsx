import React from "react";
import {MdDelete} from "react-icons/md";


const Notes=(props)=>{
    
    return(
        <>
        <div className="note">
            <div className="note-title">
                <h1>{props.title}</h1>
            </div>
            
            <div>
                <p>{props.content}</p>
            </div>
            <button type="button" onClick={()=>props.onDelete(props.id)}><MdDelete size={20}/></button>
        </div>
        </>
    );
}

export default Notes;
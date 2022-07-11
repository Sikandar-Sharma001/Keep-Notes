import React, { useEffect, useState } from "react";
import {IoIosAdd} from "react-icons/io";

const CreateArea=(props)=>{
    const [inputNote, setInputNote]= useState({
        title: "",
        content: "",
    });

    const handleChange=(event)=>{
        const { name, value}=event.target;
        setInputNote(preValue=> {
            return{
                ...preValue,
                [name]: value,
            }
        })
    }

    const onSubmit=(event)=>{
        if(!inputNote.title){
            alert("please give a title..");
        }
        else{
            props.onAdd(inputNote);
        }
        setInputNote({
            title: "",
            content: "",
        })
        event.preventDefault();
    }
    return(
        <>
        <form>
            <input 
                value={inputNote.title}
                type="text" 
                placeholder="Title"
                name="title"
                onChange={handleChange}
            />
            <p>
                <textarea 
                    value={inputNote.content}
                    name="content"
                    placeholder="Write your note..."
                    onChange={handleChange}
                />
            </p>
            <button type="button" onClick={onSubmit}><IoIosAdd size={35}/></button>
        </form>
        </>
    );
}

export default CreateArea;
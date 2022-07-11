import React, { useState } from "react";
import Header from "./componenets/Header";
import CreateArea from "./componenets/CreateArea";
import Notes from "./componenets/Notes";
import Count from "./componenets/Count";
const App=()=>{
  const [notes, setNotes]=useState([]);

  const addNotes=(newNote)=>{
    setNotes((preValue)=>{
      return [...preValue, newNote];
    });
  }

  const deleteNote=(id)=>{
    setNotes(preValue=>{
      return [...preValue.filter((note, index)=> index!=id)]
    })
  }

  return(
    <>
    <Header/>
    <Count count={notes.length} />
    <CreateArea onAdd={addNotes}/>
    {notes.map((note,index)=>(
      <Notes
         key={index} 
         id={index} 
         title={note.title} 
         content={note.content}
         onDelete={deleteNote}
      />
    ))}
    </>
  );
}
export default App;
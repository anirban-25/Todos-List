import { useState } from "react"
import React from 'react'

export const AddTodo = ({addTodo}) => {
    let marginstyle={
        marginTop: '6px'
    }
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot remain blank");
        }
        addTodo(title, desc);
    }
    return (
        <div className="container my-3">
            <h3>ADD A TODO</h3>
            <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Todo Title</label>
                <input type="text" value={title} className="form-control" onChange={(e)=>{settitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Todo Description</label>
                <input type="text" value={desc} className="form-control" onChange={(e)=>{setdesc(e.target.value)}} id="desc"/>
            </div>
            <button type="submit" className="btn btn-success btn-sm" style={marginstyle} >Add Todo</button>
            </form>
        </div>
    )
}
